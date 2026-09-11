import { NextResponse } from 'next/server';
import { getPackageContext } from '@/lib/eprs-package';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const context = getPackageContext();
    const sampleWords = Array.from(context.indexes.wordIndex.values()).slice(0, 50);
    return NextResponse.json({
      status: 'success',
      total_words: context.indexes.wordIndex.size,
      sample: sampleWords,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to retrieve vocabulary' },
      { status: 500 }
    );
  }
}
