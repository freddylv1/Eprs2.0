import { NextRequest, NextResponse } from 'next/server';
import { buildDatabaseFromInput } from '@/Builder/database_generator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let csvText: string | undefined;
    let xlsxBuffer: Buffer | undefined;
    let rawItems: any[] | undefined;

    if (contentType.includes('application/json')) {
      const body = await req.json();
      if (Array.isArray(body)) {
        rawItems = body;
      } else if (body && Array.isArray(body.items)) {
        rawItems = body.items;
      } else if (body && Array.isArray(body.data)) {
        rawItems = body.data;
      } else if (body && typeof body.csv === 'string') {
        csvText = body.csv;
      }
    } else if (contentType.includes('text/csv') || contentType.includes('text/plain')) {
      csvText = await req.text();
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      if (file) {
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
          xlsxBuffer = fileBuffer;
        } else {
          csvText = fileBuffer.toString('utf8');
        }
      }
    } else {
      const arrayBuf = await req.arrayBuffer();
      if (arrayBuf.byteLength > 0) {
        xlsxBuffer = Buffer.from(arrayBuf);
      }
    }

    const result = buildDatabaseFromInput({
      csvText,
      xlsxBuffer,
      rawItems,
    });

    return NextResponse.json({
      status: 'success',
      version: result.version,
      schema_name: result.schema_name,
      workflow_version: result.workflow_version || '1.6',
      validation_level: result.validation_level || 'GOLD',
      total_words: result.total_words,
      words: result.words,
      yamlContent: result.yamlContent,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err.message || 'Failed to execute EPRS Builder Workflow v1.6',
      },
      { status: 500 }
    );
  }
}
