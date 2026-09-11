import { VocabularySource } from '../lib/eprs-import';
import { resolveException, ExceptionResolutionResult } from './exception_resolver';
import { syllabifyWord, analyzeSyllablePattern, EPRSWordRecord, SyllableIpaEntry, PatternMappingEntry } from './vocabulary_builder';
import { processIPA } from './ipa_processor';
import { generateMemoryTip } from './memory_processor';
import { determinePrimaryStress } from './stress_processor';
import { extractPhonemesForSyllable } from '../Engine/phoneme_master';
import { generateIPA } from '../Engine/ipa_generator';
import { calculateConfidence } from '../Engine/confidence_engine';
import { validateWordRecord } from '../Engine/validation_engine';

export interface WorkflowResult {
  step: number;
  word: string;
  record: EPRSWordRecord;
  validation_level: 'GOLD' | 'SILVER' | 'FAILED';
  workflow_version: string;
  executed_steps: string[];
}

/**
 * EPRS Builder Workflow v1.7 Offline Pronunciation Engine
 * Complete 9-Stage Inference Pipeline:
 * Word → Syllable → Stress → Pattern → Rule → Exception → Phoneme → IPA → Validation
 */
export function processEPRSWorkflow(src: VocabularySource, index: number): WorkflowResult {
  const executed_steps: string[] = [];

  // Stage 1: Word (Input Sanitization)
  const word = String(src.word || '').trim();
  const pos = String(src.pos || 'n.').trim();
  const chinese = String(src.chinese || '').trim();
  executed_steps.push('Stage 1: Word (Input Processing)');

  // Stage 2: Syllable (Syllable_Processor)
  const sylList = syllabifyWord(word);
  executed_steps.push('Stage 2: Syllable (Syllable_Processor)');

  // Stage 3: Stress (Stress Engine v1.6.1 / v1.7)
  const stressAnalysis = determinePrimaryStress(word, sylList, pos);
  const primaryStressIndex = stressAnalysis.primary_stress_index;
  executed_steps.push(`Stage 3: Stress (Stress Engine -> index ${primaryStressIndex})`);

  // Stage 4: Pattern (Pattern_Processor)
  const syllableAnalyses = sylList.map((syl, idx) => {
    const isStressed = idx === primaryStressIndex;
    const isLast = idx === sylList.length - 1;
    return analyzeSyllablePattern(syl, isLast, isStressed);
  });
  executed_steps.push('Stage 4: Pattern (Pattern_Processor)');

  // Stage 5: Rule (Rule_Processor)
  const ruleMappingsSet = new Set<string>();
  syllableAnalyses.forEach((a) => ruleMappingsSet.add(a.rule_id));
  const mainAnalysis = syllableAnalyses[primaryStressIndex] || syllableAnalyses[0];
  executed_steps.push('Stage 5: Rule (Rule_Processor)');

  // Stage 6: Exception (Exception_Processor)
  const excResult: ExceptionResolutionResult = resolveException(word);
  executed_steps.push('Stage 6: Exception (Exception_Processor / HIST Taxonomy)');

  // Stage 7: Phoneme (Phoneme_Master)
  const isException = excResult.is_exception;
  const phonemeMappings = sylList.map((syl, idx) => {
    const isStressed = idx === primaryStressIndex;
    const isLast = idx === sylList.length - 1;
    return extractPhonemesForSyllable(syl, isStressed, isLast);
  });
  executed_steps.push('Stage 7: Phoneme (Phoneme_Master)');

  // Stage 8: IPA (IPA_Generator Engine)
  let fullIpa: string;
  let syllableIpas: SyllableIpaEntry[] = [];
  let patternMappings: PatternMappingEntry[] = [];

  if (isException && excResult.exception_entry) {
    const exc = excResult.exception_entry;
    fullIpa = exc.ipa;
    syllableIpas = [
      {
        syllable_index: 0,
        syllable_text: exc.word,
        syllable: exc.word,
        ipa: exc.ipa,
        stress: 'primary',
        pattern_id: exc.pattern_id,
        rule_id: exc.rule_id,
      },
    ];
    patternMappings = [
      {
        syllable_index: 0,
        syllable: exc.word,
        pattern_id: exc.pattern_id,
        pattern: exc.pattern_name,
        condition: exc.condition,
        rule_id: exc.rule_id,
        ipa: exc.ipa,
      },
    ];
  } else {
    const ipaOutput = generateIPA({
      word,
      syllables: sylList,
      primaryStressIndex,
      isException: false,
    });
    fullIpa = ipaOutput.full_ipa;

    sylList.forEach((syl, idx) => {
      const a = syllableAnalyses[idx];
      const isStressed = idx === primaryStressIndex;
      const fragment = ipaOutput.phonemes[idx] || a.ipa_fragment;

      syllableIpas.push({
        syllable_index: idx,
        syllable_text: syl,
        syllable: syl,
        ipa: `/${fragment}/`,
        stress: isStressed ? 'primary' : 'unstressed',
        pattern_id: a.pattern_id,
        rule_id: a.rule_id,
      });

      patternMappings.push({
        syllable_index: idx,
        syllable: syl,
        pattern_id: a.pattern_id,
        pattern: a.pattern_name,
        condition: a.condition,
        rule_id: a.rule_id,
        ipa: `/${fragment}/`,
      });
    });
  }
  executed_steps.push('Stage 8: IPA (IPA_Generator Engine)');

  // Memory Generation (Memory_Processor)
  const activePatternId = isException && excResult.exception_entry
    ? excResult.exception_entry.pattern_id
    : mainAnalysis.pattern_id;
  const patNum = activePatternId.replace('PAT-', '');

  const memoryTip = generateMemoryTip(
    word,
    isException && excResult.exception_entry ? excResult.exception_entry.pattern_name : mainAnalysis.pattern_name,
    fullIpa,
    excResult,
    isException && excResult.exception_entry ? excResult.exception_entry.syllable : sylList
  );

  const confidenceRes = calculateConfidence({
    word,
    syllables: sylList,
    primaryStressIndex,
    patternId: activePatternId,
    ruleId: isException && excResult.exception_entry ? excResult.exception_entry.rule_id : mainAnalysis.rule_id,
    isException,
    exceptionId: isException && excResult.exception_entry ? excResult.exception_entry.exception_id : null,
    fullIpa,
  });

  const record: EPRSWordRecord = {
    index,
    word,
    pos: pos || 'n.',
    chinese: chinese || '常見單字',
    syllable: isException && excResult.exception_entry ? excResult.exception_entry.syllable : sylList,
    ipa: fullIpa,
    syllable_ipa: syllableIpas,
    stress: {
      primary_stress_syllable_index: primaryStressIndex,
      secondary_stress_syllable_indexes: stressAnalysis.secondary_stress_indexes,
      unstressed_reductions: stressAnalysis.unstressed_reductions,
    },
    pattern_mapping: patternMappings,
    rule_mapping: isException && excResult.exception_entry ? [excResult.exception_entry.rule_id] : Array.from(ruleMappingsSet),
    family_mapping: {
      pattern_family: {
        id: `PAT-FAM-${patNum}`,
        name: `${isException && excResult.exception_entry ? excResult.exception_entry.pattern_name : mainAnalysis.pattern_name} Family`,
      },
      sound_family: {
        primary_sound: fullIpa,
        reduced_sound: sylList.length > 1 ? '/ə/' : null,
      },
      stress_family: {
        primary_stress_index: primaryStressIndex,
        type: stressAnalysis.stress_type,
      },
      reduction_family: {
        type: sylList.length > 1 ? 'Schwa Reduction' : 'None',
        count: stressAnalysis.unstressed_reductions.length,
      },
      suffix_family: null,
      word_family: null,
      learning_family: {
        id: isException && excResult.exception_entry ? excResult.exception_entry.stage_id : mainAnalysis.stage_id,
        stage: isException && excResult.exception_entry ? excResult.exception_entry.stage_name : mainAnalysis.stage_name,
      },
    },
    exception_check: {
      is_exception: isException,
      exception_id: isException && excResult.exception_entry ? excResult.exception_entry.exception_id : null,
      exception_type: isException && excResult.exception_entry ? excResult.exception_entry.exception_type : null,
      reason: isException && excResult.exception_entry ? excResult.exception_entry.reason : null,
      pattern: isException && excResult.exception_entry ? excResult.exception_entry.pattern : null,
      actual_sound: isException && excResult.exception_entry ? excResult.exception_entry.actual_sound : null,
      note: isException && excResult.exception_entry ? excResult.exception_entry.note : null,
    },
    memory_tip: memoryTip,
    reasoning: {
      syllable_reasoning: `[Syllable_Processor] 音節拆解 [${sylList.join('-')}]`,
      pattern_reasoning: `[Pattern_Processor] 主拼讀 structure ${activePatternId}`,
      rule_reasoning: `[Rule_Processor] 音律對應與例外判定通過 (${stressAnalysis.reasoning})`,
      ipa_conclusion: `[IPA_Processor] 標準 IPA 為 ${fullIpa}`,
    },
    confidence: confidenceRes.confidence_score,
    reasoning_summary: `${word} | Syllable: ${sylList.join('/')} | Stress: ${primaryStressIndex} | IPA: ${fullIpa} | Pipeline: Word->Syllable->Stress->Pattern->Rule->Exception->Phoneme->IPA->Validation`,
  };

  // Stage 9: Validation (Validation_Engine)
  const valResult = validateWordRecord(record);
  const validation_level = valResult.validation_level;
  executed_steps.push('Stage 9: Validation (Validation_Engine)');

  if (validation_level === 'GOLD') {
    executed_steps.push('Stage 10: Database Commit (Validated GOLD)');
  }

  return {
    step: 9,
    word,
    record,
    validation_level,
    workflow_version: '1.7',
    executed_steps,
  };
}
