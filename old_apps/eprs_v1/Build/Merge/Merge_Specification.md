# EPRS Batch Merger Specification

## Specification Overview
The EPRS Batch Merger takes validated YAML batches (`Batch_001` through `Batch_024`) from `Build/Batch/` and compiles them into a unified, consolidated database: `Build/Output/English_Pronunciation_Database.yaml`.

## Pipeline Input
- Directory: `Build/Batch/`
- Batches: `Batch_001` to `Batch_024`
- Total Words: 1200 words (24 batches × 50 words/batch)
- Schema: English_Pronunciation_Database Schema v2.0

## Pre-Merge Validation Gate
Before merging, every batch MUST pass all 6 validation criteria executed by `Build/Validation/validator.ts`:
1. **IPA**: Must be valid slash-delimited IPA representation (`/.../`).
2. **Stress**: Must contain primary stress syllable index mapping.
3. **Pattern**: Must map valid `PAT-XX` identifiers.
4. **Rule**: Must map valid `RXXX` pronunciation rule identifiers.
5. **Reasoning**: Must include complete 4-part reasoning breakdown (syllable, pattern, rule, conclusion).
6. **Confidence**: Must contain confidence score (0-100).

If any batch fails validation, the merger will throw an exception and halt execution.

## Output Structure
The merged file `Build/Output/English_Pronunciation_Database.yaml` contains:
- `version`: "2.0"
- `schema_name`: "EPRS Word Schema v2.0 Reasoning Engine"
- `total_batches`: 24
- `total_words`: 1200
- `Rule_Index`: R001 ~ R017
- `Pattern_Index`: PAT-01 ~ PAT-13
- `Family_Index`: PAT-FAM-01 ~ PAT-FAM-13
- `Learning_Index`: STAGE-01 ~ STAGE-05
- `words`: Reindexed array from 0 to 1199 containing all word records.
