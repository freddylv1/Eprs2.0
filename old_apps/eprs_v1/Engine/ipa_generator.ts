/**
 * EPRS IPA Generator Engine (v1.7)
 * Implements algorithmic IPA generation based on /Engine/IPA_Generator.yaml
 */

import { processIPA, IPAProcessResult } from '../Builder/ipa_processor';

export interface IPAGeneratorInput {
  word: string;
  syllables: string[];
  primaryStressIndex: number;
  isException: boolean;
  exceptionIpa?: string;
}

export interface IPAGeneratorOutput {
  full_ipa: string;
  syllable_ipas: string[];
  phonemes: string[];
}

export function generateIPA(input: IPAGeneratorInput): IPAGeneratorOutput {
  if (input.isException && input.exceptionIpa) {
    return {
      full_ipa: input.exceptionIpa,
      syllable_ipas: [input.exceptionIpa],
      phonemes: [input.exceptionIpa.replace(/\//g, '')],
    };
  }

  const result: IPAProcessResult = processIPA(input.syllables, input.primaryStressIndex);
  const syllableIpas = result.syllable_phonemes.map((p) => `/${p.ipa_fragment}/`);
  const phonemes = result.syllable_phonemes.map((p) => p.ipa_fragment);

  return {
    full_ipa: result.full_ipa,
    syllable_ipas: syllableIpas,
    phonemes,
  };
}
