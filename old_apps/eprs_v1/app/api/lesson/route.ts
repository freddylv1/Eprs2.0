import { NextRequest, NextResponse } from 'next/server';
import { generateLesson } from '@/lib/lesson-generator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const source = searchParams.get('source') || 'MOE1200';
    const range = searchParams.get('range') || '1-50';
    const level = searchParams.get('level') || 'ALL';

    const lessonDataset = generateLesson({
      source,
      range,
      level,
    });

    // Map words to requested response structure
    const formattedWords = lessonDataset.words.map((w) => {
      const patternStr = typeof w.pattern === 'string'
        ? w.pattern
        : `${w.pattern.pattern_id}${w.pattern.pattern_name ? ` (${w.pattern.pattern_name})` : ''}`;

      const ruleStr = typeof w.rule === 'string'
        ? w.rule
        : `${w.rule.rule_id}${w.rule.rule_name ? ` (${w.rule.rule_name})` : ''}`;

      return {
        word: w.word,
        ipa: w.ipa,
        syllable: w.syllable,
        meaning: w.meaning,
        pattern: patternStr,
        rule: ruleStr,
      };
    });

    return NextResponse.json({
      lesson: lessonDataset.lesson_id,
      words_count: lessonDataset.words_count,
      words: formattedWords,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err.message || 'Failed to generate lesson dataset',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const source = body.source || 'MOE1200';
    const range = body.range || '1-50';
    const level = body.level || 'ALL';

    const lessonDataset = generateLesson({
      source,
      range,
      level,
    });

    const formattedWords = lessonDataset.words.map((w) => {
      const patternStr = typeof w.pattern === 'string'
        ? w.pattern
        : `${w.pattern.pattern_id}${w.pattern.pattern_name ? ` (${w.pattern.pattern_name})` : ''}`;

      const ruleStr = typeof w.rule === 'string'
        ? w.rule
        : `${w.rule.rule_id}${w.rule.rule_name ? ` (${w.rule.rule_name})` : ''}`;

      return {
        word: w.word,
        ipa: w.ipa,
        syllable: w.syllable,
        meaning: w.meaning,
        pattern: patternStr,
        rule: ruleStr,
      };
    });

    return NextResponse.json({
      lesson: lessonDataset.lesson_id,
      words_count: lessonDataset.words_count,
      words: formattedWords,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err.message || 'Failed to generate lesson dataset',
      },
      { status: 500 }
    );
  }
}
