import { NextRequest, NextResponse } from 'next/server';
import { searchPackage, SearchQueryParams } from '@/lib/eprs-package';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const params: SearchQueryParams = {
      word: searchParams.get('word') || undefined,
      q: searchParams.get('q') || undefined,
      pattern: searchParams.get('pattern') || undefined,
      rule: searchParams.get('rule') || undefined,
      family: searchParams.get('family') || undefined,
      level: searchParams.get('level') || undefined,
      stage: searchParams.get('stage') || undefined,
    };

    const result = searchPackage(params);
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { status: 'error', error: err.message || 'Search failed' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const params: SearchQueryParams = {
      word: body.word,
      q: body.q,
      pattern: body.pattern,
      rule: body.rule,
      family: body.family,
      level: body.level,
      stage: body.stage,
    };

    const result = searchPackage(params);
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { status: 'error', error: err.message || 'Search failed' },
      { status: 500 }
    );
  }
}
