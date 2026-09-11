export interface VocabularySource {
  index: number;
  word: string;
  pos: string;
  chinese: string;
}

export interface ValidationErrorItem {
  index: number;
  error: string;
}

export interface VocabularyValidationResult {
  valid: boolean;
  count: number;
  errors: ValidationErrorItem[];
}

/**
 * Validates array of VocabularySource objects.
 * Checks for missing word, index, pos, or chinese.
 */
export function validateVocabulary(data: VocabularySource[]): VocabularyValidationResult {
  const errors: ValidationErrorItem[] = [];

  data.forEach((item, idx) => {
    const itemIndex = typeof item.index === 'number' ? item.index : idx + 1;
    if (!item.word || !String(item.word).trim()) {
      errors.push({
        index: itemIndex,
        error: 'Missing word',
      });
    }
  });

  return {
    valid: errors.length === 0,
    count: data.length,
    errors,
  };
}

/**
 * Helper to parse CSV or TSV text input into VocabularySource array.
 * Supports lines formatted as: index,word,pos,chinese OR word,pos,chinese
 */
export function parseCSVToVocabulary(csvText: string): VocabularySource[] {
  if (!csvText || !csvText.trim()) return [];

  const lines = csvText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const result: VocabularySource[] = [];

  let lineCounter = 1;

  for (const line of lines) {
    // Skip header line if detected
    if (lineCounter === 1 && (line.toLowerCase().includes('word') || line.toLowerCase().includes('chinese'))) {
      lineCounter++;
      continue;
    }

    const parts = line.split(/,|\t/).map((p) => p.trim().replace(/^["']|["']$/g, ''));
    if (parts.length < 1) continue;

    let index = lineCounter;
    let word = '';
    let pos = '';
    let chinese = '';

    if (parts.length >= 4 && !isNaN(parseInt(parts[0], 10))) {
      index = parseInt(parts[0], 10);
      word = parts[1];
      pos = parts[2];
      chinese = parts[3];
    } else if (parts.length >= 3) {
      word = parts[0];
      pos = parts[1];
      chinese = parts[2];
    } else if (parts.length === 2) {
      word = parts[0];
      chinese = parts[1];
    } else {
      word = parts[0];
    }

    result.push({
      index,
      word,
      pos,
      chinese,
    });

    lineCounter++;
  }

  return result;
}
