import { getPackageContext } from './eprs-package';
import { SourceManager } from './source-manager';
import { transformToLearningDataset, LearningDataset } from './eprs-learning-dataset';

export interface LessonOptions {
  source?: string; // e.g. 'MOE1200'
  range?: string;  // e.g. '1-50', '51-100'
  level?: string;  // e.g. 'ALL', 'L1', 'L2', 'L3', 'L4', 'L5'
}

/**
 * Calculates Lesson ID from source and range.
 * Examples:
 * range '1-50' -> MOE1200-L01
 * range '51-100' -> MOE1200-L02
 * custom range -> MOE1200-R1-50
 */
export function deriveLessonId(sourceId: string, rangeStr?: string): string {
  const cleanSource = sourceId.toUpperCase();
  if (!rangeStr) return `${cleanSource}-L01`;

  const parts = rangeStr.split('-').map((p) => parseInt(p.trim(), 10));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    const start = parts[0];
    const pageSize = parts[1] - parts[0] + 1;

    if (pageSize === 50 && (start - 1) % 50 === 0) {
      const lessonNum = Math.floor((start - 1) / 50) + 1;
      const padNum = lessonNum < 10 ? `0${lessonNum}` : `${lessonNum}`;
      return `${cleanSource}-L${padNum}`;
    }
    return `${cleanSource}-R${parts[0]}-${parts[1]}`;
  }

  return `${cleanSource}-L01`;
}

/**
 * Generates a structured EPRS Lesson Dataset based on source, range, and level filter.
 */
export function generateLesson(options: LessonOptions): LearningDataset {
  const sourceDef = SourceManager.getSource(options.source);
  const context = getPackageContext();

  const allWords = Array.from(context.indexes.wordIndex.values());

  // 1. Filter by Level
  const selectedLevel = (options.level || 'ALL').toUpperCase();
  let filteredWords = allWords;
  if (selectedLevel !== 'ALL' && selectedLevel !== 'L1-L5') {
    filteredWords = allWords.filter((w) => {
      const levelVal = w.family_mapping?.learning_family?.id || w.level || w.learning_stage || 'L1';
      return String(levelVal).toUpperCase() === selectedLevel;
    });
  }

  // 2. Range Slicing
  let startIndex = 0;
  let endIndex = filteredWords.length;

  if (options.range) {
    const parts = options.range.split('-').map((p) => parseInt(p.trim(), 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      startIndex = Math.max(0, parts[0] - 1);
      endIndex = Math.min(filteredWords.length, parts[1]);
    } else if (parts.length === 1 && !isNaN(parts[0])) {
      endIndex = Math.min(filteredWords.length, parts[0]);
    }
  }

  const wordSlice = filteredWords.slice(startIndex, endIndex);

  // 3. Derive Lesson ID
  const lessonId = deriveLessonId(sourceDef.id, options.range || `1-${wordSlice.length}`);

  // 4. Transform to Dataset
  return transformToLearningDataset(wordSlice, {
    lesson_id: lessonId,
    source: sourceDef.id,
    level: selectedLevel,
  });
}
