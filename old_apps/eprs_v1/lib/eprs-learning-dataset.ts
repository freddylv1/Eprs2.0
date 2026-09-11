import { queryWord, WordQueryOutput } from './eprs-query';

export interface DatasetWordItem {
  word: string;
  ipa: string;
  syllable: string;
  meaning: string;
  pattern: {
    pattern_id: string;
    pattern_name: string;
    spelling?: string;
    phoneme?: string;
    all_patterns?: any[];
  } | string;
  rule: {
    rule_id: string;
    rule_name: string;
    applied_rules?: any[];
  } | string;
  memory_tip: string;
  practice: {
    level: string;
    distractors: string[];
    checkboxes?: string[];
  };
}

export interface LearningDataset {
  lesson_id: string;
  source: string;
  level: string;
  words_count: number;
  words: DatasetWordItem[];
}

export interface TransformOptions {
  lesson_id: string;
  source: string;
  level: string;
  compactPatternRuleFormat?: boolean;
}

/**
 * Transforms database word entries into a standardized EPRS Learning Dataset.
 */
export function transformToLearningDataset(
  rawWords: any[],
  options: TransformOptions
): LearningDataset {
  const datasetWords: DatasetWordItem[] = rawWords.map((wordObj) => {
    const wordStr = typeof wordObj === 'string' ? wordObj : wordObj.word;
    const queried: WordQueryOutput = queryWord({ word: wordStr, mode: 'full' }) as any;

    const ipa = queried.ipa || wordObj.ipa || `/${wordStr}/`;
    const syllable = queried.syllable || wordObj.syllable || wordStr;
    const meaning = queried.chinese || wordObj.chinese || wordObj.meaning || wordObj.pos || '';

    // Pattern formatting
    const patId = queried.pattern_mapping?.pattern_id || wordObj.pattern_mapping?.pattern_id || 'PAT-01';
    const patName = queried.pattern_mapping?.pattern_name || wordObj.pattern_mapping?.pattern_name || 'Phonics Pattern';
    const patternObj = options.compactPatternRuleFormat
      ? `${patId} (${patName})`
      : {
          pattern_id: patId,
          pattern_name: patName,
          spelling: queried.pattern_mapping?.spelling,
          phoneme: queried.pattern_mapping?.phoneme,
          all_patterns: queried.pattern_mapping?.all_patterns,
        };

    // Rule formatting
    const ruleId = queried.rule_mapping?.rule_id || wordObj.rule_mapping?.rule_id || 'R001';
    const ruleName = queried.rule_mapping?.rule_name || wordObj.rule_mapping?.rule_name || 'Pronunciation Rule';
    const ruleObj = options.compactPatternRuleFormat
      ? `${ruleId} (${ruleName})`
      : {
          rule_id: ruleId,
          rule_name: ruleName,
          applied_rules: queried.rule_mapping?.applied_rules,
        };

    // Memory tip
    const memory_tip =
      queried.memory_tip ||
      wordObj.memory_tip ||
      `Syllable structure analysis for word '${wordStr}' using rule ${ruleId}.`;

    // Practice
    const practice = {
      level: queried.practice?.level || wordObj.level || 'L1',
      distractors: queried.practice?.distractors || ['optionA', 'optionB', 'optionC'],
      checkboxes: ['Pronunciation Practice', 'Spelling Mastered', 'Rule Check'],
    };

    return {
      word: wordStr,
      ipa,
      syllable,
      meaning,
      pattern: patternObj,
      rule: ruleObj,
      memory_tip,
      practice,
    };
  });

  return {
    lesson_id: options.lesson_id,
    source: options.source,
    level: options.level,
    words_count: datasetWords.length,
    words: datasetWords,
  };
}
