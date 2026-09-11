import { NextResponse } from 'next/server';
import { getPackageContext } from '@/lib/eprs-package';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const context = getPackageContext();

    const ruleMasterSummary = context.ruleMaster
      ? {
          version: context.ruleMaster.version,
          schema_name: context.ruleMaster.schema_name,
          rule_count: Object.keys(context.ruleMaster.Rule_Index || {}).length,
          rules: Object.keys(context.ruleMaster.Rule_Index || {}),
        }
      : null;

    const patternMasterSummary = context.patternMaster
      ? {
          version: context.patternMaster.version,
          schema_name: context.patternMaster.schema_name,
          groups: Object.keys(context.patternMaster.pattern_groups || {}),
        }
      : null;

    const databaseSummary = context.database
      ? {
          version: context.database.version,
          batch: context.database.batch,
          total_words_in_batch: context.database.total_words_in_batch,
          total_indexed_words: context.indexes.wordIndex.size,
          sample_words: Array.from(context.indexes.wordIndex.keys()).slice(0, 10),
        }
      : null;

    return NextResponse.json({
      status: 'success',
      message: 'EPRS APP PACKAGE v1.5 Runtime loaded successfully via PackageContext',
      metadata: context.metadata,
      validation_report: context.validationReport,
      manifest: context.manifest,
      loaded_modules: {
        rule_master: ruleMasterSummary,
        pattern_master: patternMasterSummary,
        stress_master: !!context.stressMaster,
        exception_master: !!context.exceptionMaster,
        database: databaseSummary,
        learning_model: !!context.learningModel,
      },
      indexes_summary: {
        wordIndex_size: context.indexes.wordIndex.size,
        patternIndex_size: context.indexes.patternIndex.size,
        ruleIndex_size: context.indexes.ruleIndex.size,
        familyIndex_size: context.indexes.familyIndex.size,
        learningIndex_size: context.indexes.learningIndex.size,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: err.message || 'Failed to load package context',
      },
      { status: 500 }
    );
  }
}
