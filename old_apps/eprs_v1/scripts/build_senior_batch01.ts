import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { SENIOR_BATCH_01_DATA, SeniorWordRecord } from "../lib/seniorBatch01Raw";

export { SENIOR_BATCH_01_DATA, type SeniorWordRecord };

// Main function to write out:
// 1. Source/Senior/Batch01.yaml
// 2. Database/English_Pronunciation_Database_Senior_Batch01.yaml
export function generateSeniorBatch01Files() {
  const dirSourceSenior = path.join(process.cwd(), "Source", "Senior");
  const dirDatabase = path.join(process.cwd(), "Database");

  if (!fs.existsSync(dirSourceSenior)) {
    fs.mkdirSync(dirSourceSenior, { recursive: true });
  }

  // 1. Source Batch YAML
  const sourceYaml = {
    batch: 1,
    batch_name: "Senior_Level1_Batch_01",
    level: 1,
    level_name: "第一級",
    range: "1 ~ 100",
    total_words: 100,
    words: SENIOR_BATCH_01_DATA.map(w => ({
      id: w.id,
      word: w.word,
      pos: w.pos,
      chinese: w.chinese,
      syllable: w.syllable,
      ipa: w.ipa
    }))
  };

  const sourceFilePath = path.join(dirSourceSenior, "Batch01.yaml");
  fs.writeFileSync(sourceFilePath, yaml.dump(sourceYaml, { lineWidth: -1 }), "utf8");
  console.log(`[PASS] Written source YAML: ${sourceFilePath}`);

  // 2. Database Full YAML
  const databaseYaml = {
    batch: 1,
    batch_name: "Senior_Level1_Batch_01",
    level: 1,
    level_name: "第一級",
    range: "1 ~ 100",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260903_001",
    words: SENIOR_BATCH_01_DATA.map(w => ({
      id: w.id,
      word: w.word,
      pos: w.pos,
      chinese: w.chinese,
      syllable: w.syllable,
      ipa: w.ipa,
      derivations: w.derivations
    }))
  };

  const dbFilePath = path.join(dirDatabase, "English_Pronunciation_Database_Senior_Batch01.yaml");
  fs.writeFileSync(dbFilePath, yaml.dump(databaseYaml, { lineWidth: -1 }), "utf8");
  console.log(`[PASS] Written database YAML: ${dbFilePath}`);
}

generateSeniorBatch01Files();
