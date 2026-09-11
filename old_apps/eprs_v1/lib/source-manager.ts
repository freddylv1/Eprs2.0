export interface SourceDefinition {
  id: string;
  name: string;
  description: string;
  isDefault?: boolean;
}

export const SUPPORTED_SOURCES: Record<string, SourceDefinition> = {
  MOE1200: {
    id: 'MOE1200',
    name: '教育部 1200 字 (MOE 1200 Vocabulary)',
    description: 'Ministry of Education 1200 essential English vocabulary dataset.',
    isDefault: true,
  },
  TOEIC: {
    id: 'TOEIC',
    name: 'TOEIC 多益核心單字 (TOEIC Core Vocabulary)',
    description: 'Essential business and professional vocabulary for TOEIC test preparation.',
  },
  IELTS: {
    id: 'IELTS',
    name: 'IELTS 雅思考試單字 (IELTS Academic Vocabulary)',
    description: 'Academic and general English vocabulary dataset for IELTS.',
  },
  Custom: {
    id: 'Custom',
    name: '自訂詞彙集 (Custom Vocabulary Set)',
    description: 'User-defined custom learning dataset.',
  },
};

export class SourceManager {
  /**
   * Validates and returns the source definition object. Defaults to MOE1200.
   */
  static getSource(sourceId?: string): SourceDefinition {
    if (!sourceId) return SUPPORTED_SOURCES.MOE1200;
    const key = sourceId.trim().toUpperCase();
    return SUPPORTED_SOURCES[key] || SUPPORTED_SOURCES.MOE1200;
  }

  /**
   * Returns all available material sources.
   */
  static listSources(): SourceDefinition[] {
    return Object.values(SUPPORTED_SOURCES);
  }

  /**
   * Checks if source ID is supported.
   */
  static isValidSource(sourceId: string): boolean {
    if (!sourceId) return false;
    const key = sourceId.trim().toUpperCase();
    return key in SUPPORTED_SOURCES;
  }
}
