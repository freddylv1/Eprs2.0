/**
 * EPRS Validation Engine (v1.7)
 * Implements 9-stage structural and semantic verification from /Engine/Validation_Engine.yaml
 */

import { EPRSWordRecord } from '../Builder/vocabulary_builder';

export interface ValidationEngineResult {
  is_valid: boolean;
  validation_level: 'GOLD' | 'SILVER' | 'FAILED';
  passed_checks: string[];
  failed_checks: string[];
}

export function validateWordRecord(record: EPRSWordRecord): ValidationEngineResult {
  const passed: string[] = [];
  const failed: string[] = [];

  // Stage 1: Word
  if (record.word && record.word.trim().length > 0) {
    passed.push('Stage 1 (Word): Valid non-empty string');
  } else {
    failed.push('Stage 1 (Word): Missing word string');
  }

  // Stage 2: Syllable
  if (Array.isArray(record.syllable) && record.syllable.length > 0) {
    passed.push('Stage 2 (Syllable): Non-empty syllable array');
  } else {
    failed.push('Stage 2 (Syllable): Empty syllable array');
  }

  // Stage 3: Stress
  if (
    record.stress &&
    typeof record.stress.primary_stress_syllable_index === 'number' &&
    record.stress.primary_stress_syllable_index >= 0 &&
    record.stress.primary_stress_syllable_index < record.syllable.length
  ) {
    passed.push('Stage 3 (Stress): Valid primary stress index within syllable bounds');
  } else {
    failed.push('Stage 3 (Stress): Invalid primary stress index');
  }

  // Stage 4: Pattern
  if (record.pattern_mapping && record.pattern_mapping.length > 0 && record.pattern_mapping[0].pattern_id) {
    passed.push('Stage 4 (Pattern): Valid pattern mapping');
  } else {
    failed.push('Stage 4 (Pattern): Missing pattern mapping');
  }

  // Stage 5: Rule
  if (record.rule_mapping && record.rule_mapping.length > 0) {
    passed.push('Stage 5 (Rule): Valid rule mapping');
  } else {
    failed.push('Stage 5 (Rule): Missing rule mapping');
  }

  // Stage 6: Exception
  if (record.exception_check) {
    if (record.exception_check.is_exception) {
      if (
        record.exception_check.exception_id &&
        /^(HIST|ORTH|REDUC)-\d{3}$/.test(record.exception_check.exception_id)
      ) {
        passed.push(`Stage 6 (Exception): Exception taxonomy match (${record.exception_check.exception_id})`);
      } else {
        failed.push('Stage 6 (Exception): Exception ID does not match taxonomy format');
      }
    } else {
      passed.push('Stage 6 (Exception): Standard rule pass (no exception)');
    }
  } else {
    failed.push('Stage 6 (Exception): Missing exception check block');
  }

  // Stage 7: Phoneme & Stage 8: IPA
  if (record.ipa && record.ipa.startsWith('/') && record.ipa.endsWith('/')) {
    passed.push('Stage 7&8 (Phoneme & IPA): Valid formatted IPA output');
  } else {
    failed.push('Stage 7&8 (Phoneme & IPA): Invalid or unformatted IPA');
  }

  // Stage 9: Validation (Memory tip schema)
  if (
    record.memory_tip &&
    record.memory_tip.type &&
    record.memory_tip.content &&
    Array.isArray(record.memory_tip.related_words)
  ) {
    passed.push('Stage 9 (Validation): Memory tip schema valid ({type, content, related_words})');
  } else {
    failed.push('Stage 9 (Validation): Memory tip schema violation');
  }

  const is_valid = failed.length === 0;
  let validation_level: 'GOLD' | 'SILVER' | 'FAILED' = 'GOLD';
  if (failed.length > 0 && record.word && record.ipa) {
    validation_level = 'SILVER';
  } else if (!record.word || !record.ipa) {
    validation_level = 'FAILED';
  }

  return {
    is_valid,
    validation_level,
    passed_checks: passed,
    failed_checks: failed,
  };
}
