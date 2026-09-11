import { loadEPRSPackage, EPRSManifest, PackageValidationReport } from './eprs-loader';

export interface EPRSMetadata {
  package_name: string;
  version: string;
  build_date: string;
  total_words: number;
  rule_count: number;
  pattern_count: number;
  family_count: number;
  learning_count: number;
  loader_sequence: string[];
  required_files: string[];
  optional_files: string[];
  schema_name?: string;
  batch?: number;
}

export interface EPRSIndexes {
  wordIndex: Map<string, any>;        // word (lowercased) -> WordEntry
  patternIndex: Map<string, any[]>;   // pattern_id -> WordEntry[]
  ruleIndex: Map<string, any[]>;      // rule_id -> WordEntry[]
  familyIndex: Map<string, any[]>;    // family_id -> WordEntry[]
  learningIndex: Map<string, any[]>;  // stage_id / level_id -> WordEntry[]
}

export interface PackageContext {
  ruleMaster: any;
  patternMaster: any;
  stressMaster: any;
  exceptionMaster: any;
  learningModel: any;
  database: any;
  metadata: EPRSMetadata;
  indexes: EPRSIndexes;
  manifest: EPRSManifest;
  validationReport: PackageValidationReport;
}

export interface MemoryUsageFormatted {
  rss: string;
  heapTotal: string;
  heapUsed: string;
}

export interface PackageCache {
  context: PackageContext | null;
  loaded: boolean;
  loadTimeMs: number;
  loadedAt: string;
  estimatedMemoryUsage: MemoryUsageFormatted;
}

export interface SearchQueryParams {
  word?: string;
  pattern?: string;
  rule?: string;
  family?: string;
  level?: string;
  stage?: string;
  q?: string;
}

export interface SearchResult {
  status: 'success' | 'error';
  query: SearchQueryParams;
  total_matches: number;
  matches: any[];
  error?: string;
}

// Global cache variable to preserve singleton in memory across hot-reloads
const globalForEPRS = global as unknown as {
  eprsCache?: PackageCache;
};

if (!globalForEPRS.eprsCache) {
  globalForEPRS.eprsCache = {
    context: null,
    loaded: false,
    loadTimeMs: 0,
    loadedAt: '',
    estimatedMemoryUsage: { rss: '0 MB', heapTotal: '0 MB', heapUsed: '0 MB' },
  };
}

function addToIndexMap(map: Map<string, any[]>, rawKey: string | null | undefined, wordObj: any) {
  if (!rawKey) return;
  const key = String(rawKey).trim();
  if (!key) return;

  if (!map.has(key)) {
    map.set(key, []);
  }
  const list = map.get(key)!;
  if (!list.some((w) => w.word === wordObj.word)) {
    list.push(wordObj);
  }
}

function buildIndexes(database: any): EPRSIndexes {
  const wordIndex = new Map<string, any>();
  const patternIndex = new Map<string, any[]>();
  const ruleIndex = new Map<string, any[]>();
  const familyIndex = new Map<string, any[]>();
  const learningIndex = new Map<string, any[]>();

  if (!database || !Array.isArray(database.words)) {
    return { wordIndex, patternIndex, ruleIndex, familyIndex, learningIndex };
  }

  for (const w of database.words) {
    if (!w || !w.word) continue;

    const lowerWord = String(w.word).toLowerCase().trim();
    wordIndex.set(lowerWord, w);

    // 1. Pattern Indexing
    const patternsCollected = new Set<string>();
    if (Array.isArray(w.pattern_mapping)) {
      for (const item of w.pattern_mapping) {
        if (item?.pattern_id) patternsCollected.add(item.pattern_id);
      }
    }
    if (Array.isArray(w.syllable_ipa)) {
      for (const item of w.syllable_ipa) {
        if (item?.pattern_id) patternsCollected.add(item.pattern_id);
      }
    }
    patternsCollected.forEach((pId) => addToIndexMap(patternIndex, pId, w));

    // 2. Rule Indexing
    const rulesCollected = new Set<string>();
    if (Array.isArray(w.rule_mapping)) {
      for (const rid of w.rule_mapping) {
        if (rid) rulesCollected.add(String(rid));
      }
    }
    if (Array.isArray(w.pattern_mapping)) {
      for (const item of w.pattern_mapping) {
        if (item?.rule_id) rulesCollected.add(String(item.rule_id));
      }
    }
    if (Array.isArray(w.syllable_ipa)) {
      for (const item of w.syllable_ipa) {
        if (item?.rule_id) rulesCollected.add(String(item.rule_id));
      }
    }
    if (w.stress?.unstressed_reductions && Array.isArray(w.stress.unstressed_reductions)) {
      for (const item of w.stress.unstressed_reductions) {
        if (item?.rule_id) rulesCollected.add(String(item.rule_id));
      }
    }
    rulesCollected.forEach((rId) => addToIndexMap(ruleIndex, rId, w));

    // 3. Family Indexing
    const familiesCollected = new Set<string>();
    if (w.family_mapping?.pattern_family?.id) familiesCollected.add(w.family_mapping.pattern_family.id);
    if (w.family_mapping?.learning_family?.id) familiesCollected.add(w.family_mapping.learning_family.id);
    if (w.family_mapping?.suffix_family?.id) familiesCollected.add(w.family_mapping.suffix_family.id);
    if (w.family_mapping?.word_family?.id) familiesCollected.add(w.family_mapping.word_family.id);
    if (w.family_mapping?.reduction_family?.type) familiesCollected.add(w.family_mapping.reduction_family.type);
    if (w.family_mapping?.stress_family?.type) familiesCollected.add(w.family_mapping.stress_family.type);
    familiesCollected.forEach((fId) => addToIndexMap(familyIndex, fId, w));

    // 4. Learning Indexing
    const learningCollected = new Set<string>();
    if (w.family_mapping?.learning_family?.id) learningCollected.add(w.family_mapping.learning_family.id);
    if (w.family_mapping?.learning_family?.stage) learningCollected.add(w.family_mapping.learning_family.stage);
    if (w.learning_stage) learningCollected.add(String(w.learning_stage));
    if (w.level) learningCollected.add(String(w.level));
    if (w.stage) learningCollected.add(String(w.stage));
    learningCollected.forEach((lId) => addToIndexMap(learningIndex, lId, w));
  }

  return { wordIndex, patternIndex, ruleIndex, familyIndex, learningIndex };
}

export function getPackageCache(): PackageCache {
  return globalForEPRS.eprsCache!;
}

export function getPackageContext(): PackageContext {
  const cache = getPackageCache();

  if (cache.loaded && cache.context) {
    return cache.context;
  }

  const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();

  // Load raw package via eprs-loader logic
  const runtimeRaw = loadEPRSPackage();

  const totalWords = runtimeRaw.database?.words?.length || runtimeRaw.wordsMap.size || 0;
  const ruleCount = Object.keys(runtimeRaw.ruleMaster?.Rule_Index || {}).length || 17;
  const patternCount = Object.keys(runtimeRaw.database?.Pattern_Index || {}).length || 13;

  const metadata: EPRSMetadata = {
    package_name: runtimeRaw.manifest.package_name,
    version: runtimeRaw.manifest.version,
    build_date: runtimeRaw.manifest.build_date,
    total_words: totalWords,
    rule_count: ruleCount,
    pattern_count: patternCount,
    family_count: Object.keys(runtimeRaw.database?.Family_Index || {}).length || 13,
    learning_count: Object.keys(runtimeRaw.database?.Learning_Index || {}).length || 5,
    loader_sequence: runtimeRaw.manifest.loader_sequence,
    required_files: runtimeRaw.manifest.required_files,
    optional_files: runtimeRaw.manifest.optional_files,
    schema_name: runtimeRaw.database?.schema_name,
    batch: runtimeRaw.database?.batch,
  };

  const indexes = buildIndexes(runtimeRaw.database);

  const endTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const loadTimeMs = endTime - startTime;

  const mem = process.memoryUsage();
  const formatMB = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

  const context: PackageContext = {
    ruleMaster: runtimeRaw.ruleMaster,
    patternMaster: runtimeRaw.patternMaster,
    stressMaster: runtimeRaw.stressMaster,
    exceptionMaster: runtimeRaw.exceptionMaster,
    learningModel: runtimeRaw.learningModel,
    database: runtimeRaw.database,
    manifest: runtimeRaw.manifest,
    validationReport: runtimeRaw.validationReport,
    metadata,
    indexes,
  };

  cache.context = context;
  cache.loaded = true;
  cache.loadTimeMs = loadTimeMs;
  cache.loadedAt = new Date().toISOString();
  cache.estimatedMemoryUsage = {
    rss: formatMB(mem.rss),
    heapTotal: formatMB(mem.heapTotal),
    heapUsed: formatMB(mem.heapUsed),
  };

  return context;
}

export function getPackageStatus() {
  const context = getPackageContext();
  const cache = getPackageCache();

  return {
    package_version: context.metadata.version,
    database_words: context.metadata.total_words,
    rule_count: context.metadata.rule_count,
    pattern_count: context.metadata.pattern_count,
    cache_loaded: cache.loaded,
    cache_size: `${context.indexes.wordIndex.size} indexed words, ${context.indexes.ruleIndex.size} rules, ${context.indexes.patternIndex.size} patterns, ${context.indexes.familyIndex.size} families, ${context.indexes.learningIndex.size} learning stages`,
    load_time_ms: Math.round(cache.loadTimeMs * 100) / 100,
    loaded_at: cache.loadedAt,
    memory_usage: cache.estimatedMemoryUsage,
  };
}

export function getPackageStatistics() {
  const context = getPackageContext();

  const rule_usage: Record<string, number> = {};
  context.indexes.ruleIndex.forEach((words, ruleId) => {
    rule_usage[ruleId] = words.length;
  });

  const pattern_usage: Record<string, number> = {};
  context.indexes.patternIndex.forEach((words, patId) => {
    pattern_usage[patId] = words.length;
  });

  const family_usage: Record<string, number> = {};
  context.indexes.familyIndex.forEach((words, famId) => {
    family_usage[famId] = words.length;
  });

  const learning_distribution: Record<string, number> = {};
  context.indexes.learningIndex.forEach((words, learnId) => {
    learning_distribution[learnId] = words.length;
  });

  return {
    total_words: context.metadata.total_words,
    rule_usage,
    pattern_usage,
    family_usage,
    learning_distribution,
  };
}

export function searchPackage(params: SearchQueryParams): SearchResult {
  const context = getPackageContext();

  const targetWord = (params.word || params.q || '').trim().toLowerCase();
  const targetPattern = (params.pattern || '').trim();
  const targetRule = (params.rule || '').trim();
  const targetFamily = (params.family || '').trim();
  const targetLevel = (params.level || params.stage || '').trim();

  const candidateSets: any[][] = [];

  if (targetWord) {
    const directWord = context.indexes.wordIndex.get(targetWord);
    if (directWord) {
      candidateSets.push([directWord]);
    } else {
      const partialMatches: any[] = [];
      context.indexes.wordIndex.forEach((wordObj, key) => {
        if (key.includes(targetWord)) {
          partialMatches.push(wordObj);
        }
      });
      candidateSets.push(partialMatches);
    }
  }

  if (targetPattern) {
    const matches = context.indexes.patternIndex.get(targetPattern) || [];
    if (matches.length === 0) {
      const altMatches: any[] = [];
      context.indexes.patternIndex.forEach((list, key) => {
        if (key.toLowerCase() === targetPattern.toLowerCase()) {
          altMatches.push(...list);
        }
      });
      candidateSets.push(altMatches);
    } else {
      candidateSets.push(matches);
    }
  }

  if (targetRule) {
    const matches = context.indexes.ruleIndex.get(targetRule) || [];
    if (matches.length === 0) {
      const altMatches: any[] = [];
      context.indexes.ruleIndex.forEach((list, key) => {
        if (key.toLowerCase() === targetRule.toLowerCase()) {
          altMatches.push(...list);
        }
      });
      candidateSets.push(altMatches);
    } else {
      candidateSets.push(matches);
    }
  }

  if (targetFamily) {
    const matches = context.indexes.familyIndex.get(targetFamily) || [];
    if (matches.length === 0) {
      const altMatches: any[] = [];
      context.indexes.familyIndex.forEach((list, key) => {
        if (key.toLowerCase() === targetFamily.toLowerCase()) {
          altMatches.push(...list);
        }
      });
      candidateSets.push(altMatches);
    } else {
      candidateSets.push(matches);
    }
  }

  if (targetLevel) {
    const matches = context.indexes.learningIndex.get(targetLevel) || [];
    if (matches.length === 0) {
      const altMatches: any[] = [];
      context.indexes.learningIndex.forEach((list, key) => {
        if (key.toLowerCase() === targetLevel.toLowerCase()) {
          altMatches.push(...list);
        }
      });
      candidateSets.push(altMatches);
    } else {
      candidateSets.push(matches);
    }
  }

  // If no search criteria passed, return all words
  if (candidateSets.length === 0) {
    const allWords = Array.from(context.indexes.wordIndex.values());
    return {
      status: 'success',
      query: params,
      total_matches: allWords.length,
      matches: allWords,
    };
  }

  // Intersect candidates across all specified search parameters
  let resultWords: any[] = candidateSets[0];
  for (let i = 1; i < candidateSets.length; i++) {
    const set = new Set(candidateSets[i].map((w) => w.word));
    resultWords = resultWords.filter((w) => set.has(w.word));
  }

  return {
    status: 'success',
    query: params,
    total_matches: resultWords.length,
    matches: resultWords,
  };
}
