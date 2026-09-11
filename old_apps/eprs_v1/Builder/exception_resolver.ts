import { EXCEPTION_DATABASE, ExceptionEntry, ExceptionType } from './exception_database';

export interface ExceptionResolutionResult {
  is_exception: boolean;
  exception_entry?: ExceptionEntry;
  exception_id: string | null;
  exception_type: ExceptionType | null;
  reason: string | null;
  pattern: string | null;
  actual_sound: string | null;
  note: string | null;
  condition: string | null;
  memory_tip: {
    type: string;
    content: string;
    related_words: string[];
  } | null;
}

/**
 * Exception Resolver
 * Checks whether a target word is registered in the Exception Database.
 */
export function resolveException(word: string): ExceptionResolutionResult {
  if (!word) {
    return {
      is_exception: false,
      exception_id: null,
      exception_type: null,
      reason: null,
      pattern: null,
      actual_sound: null,
      note: null,
      condition: null,
      memory_tip: null,
    };
  }

  const cleanWord = word.trim().toLowerCase();
  const matchedEntry = EXCEPTION_DATABASE[cleanWord];

  if (matchedEntry) {
    return {
      is_exception: true,
      exception_entry: matchedEntry,
      exception_id: matchedEntry.exception_id,
      exception_type: matchedEntry.exception_type,
      reason: matchedEntry.reason,
      pattern: matchedEntry.pattern,
      actual_sound: matchedEntry.actual_sound,
      note: matchedEntry.note,
      condition: matchedEntry.condition,
      memory_tip: matchedEntry.memory_tip,
    };
  }

  return {
    is_exception: false,
    exception_id: null,
    exception_type: null,
    reason: null,
    pattern: null,
    actual_sound: null,
    note: null,
    condition: null,
    memory_tip: null,
  };
}
