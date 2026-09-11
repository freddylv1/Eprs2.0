import { NextRequest, NextResponse } from 'next/server';
import { queryWord, QueryMode } from '@/lib/eprs-query';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const word = searchParams.get('word') || searchParams.get('q') || '';
    const mode = (searchParams.get('mode') as QueryMode) || 'full';

    if (!word) {
      return NextResponse.json(
        { error: 'Query parameter "word" is required', example: '/api/word_query?word=have&mode=full' },
        { status: 400 }
      );
    }

    const result = queryWord({ word, mode });
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const word = body.word || '';
    const mode = (body.mode as QueryMode) || 'full';

    if (!word) {
      return NextResponse.json(
        { error: 'Body property "word" is required', example: { word: 'have', mode: 'full' } },
        { status: 400 }
      );
    }

    const result = queryWord({ word, mode });
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
