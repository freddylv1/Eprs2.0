import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface ValidationItemResult {
  word: string;
  ipa_valid: boolean;
  stress_valid: boolean;
  pattern_valid: boolean;
  rule_valid: boolean;
  reasoning_valid: boolean;
  confidence_valid: boolean;
  errors: string[];
}

export interface BatchValidationResult {
  batch_id: string;
  total_words: number;
  passed_words: number;
  failed_words: number;
  status: 'PASSED' | 'FAILED';
  items: ValidationItemResult[];
}

export function validateBatchYaml(yamlPath: string, batchId: string): BatchValidationResult {
  const content = fs.readFileSync(yamlPath, 'utf8');
  const doc: any = yaml.load(content);

  const words = doc?.words || [];
  const items: ValidationItemResult[] = [];

  let passed = 0;
  let failed = 0;

  for (const w of words) {
    const errors: string[] = [];

    // 1. IPA check
    const ipaValid = typeof w.ipa === 'string' && w.ipa.startsWith('/') && w.ipa.endsWith('/') && w.ipa.length > 2;
    if (!ipaValid) errors.push(`Invalid IPA format: ${w.ipa}`);

    // 2. Stress check
    const stressValid =
      w.stress &&
      typeof w.stress.primary_stress_syllable_index === 'number' &&
      w.stress.primary_stress_syllable_index >= 0;
    if (!stressValid) errors.push('Missing or invalid primary_stress_syllable_index');

    // 3. Pattern check
    const patternValid =
      Array.isArray(w.pattern_mapping) &&
      w.pattern_mapping.length > 0 &&
      w.pattern_mapping.every((p: any) => p.pattern_id && p.pattern_id.startsWith('PAT-'));
    if (!patternValid) errors.push('Missing or invalid pattern_mapping');

    // 4. Rule check
    const ruleValid =
      Array.isArray(w.rule_mapping) &&
      w.rule_mapping.length > 0 &&
      w.rule_mapping.every((r: any) => typeof r === 'string' && r.startsWith('R'));
    if (!ruleValid) errors.push('Missing or invalid rule_mapping');

    // 5. Reasoning check
    const reasoningValid =
      w.reasoning &&
      typeof w.reasoning.syllable_reasoning === 'string' &&
      typeof w.reasoning.pattern_reasoning === 'string' &&
      typeof w.reasoning.rule_reasoning === 'string' &&
      typeof w.reasoning.ipa_conclusion === 'string';
    if (!reasoningValid) errors.push('Incomplete reasoning block');

    // 6. Confidence check
    const confidenceValid = typeof w.confidence === 'number' && w.confidence >= 0 && w.confidence <= 100;
    if (!confidenceValid) errors.push('Invalid confidence score');

    const isValid = errors.length === 0;
    if (isValid) passed++;
    else failed++;

    items.push({
      word: w.word || 'UNKNOWN',
      ipa_valid: ipaValid,
      stress_valid: stressValid,
      pattern_valid: patternValid,
      rule_valid: ruleValid,
      reasoning_valid: reasoningValid,
      confidence_valid: confidenceValid,
      errors,
    });
  }

  return {
    batch_id: batchId,
    total_words: words.length,
    passed_words: passed,
    failed_words: failed,
    status: failed === 0 && words.length === 50 ? 'PASSED' : 'FAILED',
    items,
  };
}
