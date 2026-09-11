import { NextRequest, NextResponse } from 'next/server';
import { validateVocabulary, parseCSVToVocabulary, VocabularySource } from '@/lib/eprs-import';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let items: VocabularySource[] = [];

    if (contentType.includes('application/json')) {
      const body = await req.json();
      if (Array.isArray(body)) {
        items = body;
      } else if (body && Array.isArray(body.data)) {
        items = body.data;
      } else if (body && typeof body.csv === 'string') {
        items = parseCSVToVocabulary(body.csv);
      }
    } else if (contentType.includes('text/csv') || contentType.includes('text/plain')) {
      const text = await req.text();
      items = parseCSVToVocabulary(text);
    }

    const validationResult = validateVocabulary(items);

    return NextResponse.json({
      status: 'success',
      result: validationResult,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err.message || 'Failed to process vocabulary import',
      },
      { status: 500 }
    );
  }
}
