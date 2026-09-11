import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { load } from 'js-yaml';

export interface EPRSManifest {
  package_name: string;
  version: string;
  build_date: string;
  loader_sequence: string[];
  required_files: string[];
  optional_files: string[];
  dependency_map: Record<string, { depends_on: string[]; description: string }>;
  checksum: Record<string, string>;
  excluded: string[];
}

export interface FileVerificationResult {
  file: string;
  exists: boolean;
  checksumMatches: boolean;
  expectedChecksum: string;
  actualChecksum: string;
  parsedSuccessfully: boolean;
  error?: string;
}

export interface PackageValidationReport {
  isValid: boolean;
  packageName: string;
  version: string;
  buildDate: string;
  requiredFilesCount: number;
  verifiedFilesCount: number;
  loaderSequence: string[];
  missingFiles: string[];
  checksumFailures: string[];
  results: FileVerificationResult[];
}

export interface EPRSRuntimePackage {
  manifest: EPRSManifest;
  validationReport: PackageValidationReport;
  ruleMaster: any;
  patternMaster: any;
  stressMaster: any;
  exceptionMaster: any;
  database: any;
  learningModel: any;
  wordsMap: Map<string, any>;
}

function resolvePackageDir(): string {
  const candidates = [
    path.resolve(process.cwd(), 'EPRS_APP_PACKAGE_v1.5'),
    path.resolve(__dirname, '..', 'EPRS_APP_PACKAGE_v1.5'),
    path.resolve(__dirname, 'EPRS_APP_PACKAGE_v1.5'),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return path.resolve(process.cwd(), 'EPRS_APP_PACKAGE_v1.5');
}

function calculateSHA256(filePath: string): string {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
  } catch {
    return '';
  }
}

export function loadEPRSPackage(): EPRSRuntimePackage {
  const packageDir = resolvePackageDir();
  const manifestPath = path.join(packageDir, 'manifest.yaml');

  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest file not found at ${manifestPath}`);
  }

  const manifestContent = fs.readFileSync(manifestPath, 'utf8');
  const manifest = load(manifestContent) as EPRSManifest;

  const results: FileVerificationResult[] = [];
  const missingFiles: string[] = [];
  const checksumFailures: string[] = [];

  // Step 2: Validate Package files declared in loader_sequence / required_files
  for (const relativePath of manifest.loader_sequence) {
    const fullPath = path.join(packageDir, relativePath);
    const exists = fs.existsSync(fullPath);
    const expectedChecksum = manifest.checksum[relativePath] || '';
    let actualChecksum = '';
    let checksumMatches = false;
    let parsedSuccessfully = false;
    let error: string | undefined = undefined;

    if (!exists) {
      missingFiles.push(relativePath);
      error = 'File does not exist';
    } else {
      actualChecksum = calculateSHA256(fullPath);
      // Compare checksums if provided in manifest
      if (expectedChecksum) {
        checksumMatches = actualChecksum.toLowerCase() === expectedChecksum.toLowerCase();
        if (!checksumMatches) {
          checksumFailures.push(relativePath);
        }
      } else {
        checksumMatches = true; // No checksum baseline provided
      }

      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        load(content);
        parsedSuccessfully = true;
      } catch (err: any) {
        parsedSuccessfully = false;
        error = `YAML parse error: ${err.message}`;
      }
    }

    results.push({
      file: relativePath,
      exists,
      checksumMatches,
      expectedChecksum,
      actualChecksum,
      parsedSuccessfully,
      error,
    });
  }

  const requiredFilesPresent = manifest.required_files.every(file =>
    fs.existsSync(path.join(packageDir, file))
  );

  const isValid = requiredFilesPresent && missingFiles.length === 0;

  const validationReport: PackageValidationReport = {
    isValid,
    packageName: manifest.package_name,
    version: manifest.version,
    buildDate: manifest.build_date,
    requiredFilesCount: manifest.required_files.length,
    verifiedFilesCount: results.filter(r => r.exists && r.parsedSuccessfully).length,
    loaderSequence: manifest.loader_sequence,
    missingFiles,
    checksumFailures,
    results,
  };

  // Step 3: Load Rule Master
  const ruleMasterPath = path.join(packageDir, 'Core/EPRS_Rule_Master.yaml');
  const ruleMaster = fs.existsSync(ruleMasterPath)
    ? load(fs.readFileSync(ruleMasterPath, 'utf8'))
    : null;

  // Step 4: Load Pattern Master
  const patternMasterPath = path.join(packageDir, 'Knowledge/Pattern_Master.yaml');
  const patternMaster = fs.existsSync(patternMasterPath)
    ? load(fs.readFileSync(patternMasterPath, 'utf8'))
    : null;

  // Load Stress Master & Exception Master
  const stressMasterPath = path.join(packageDir, 'Knowledge/Stress_Master.yaml');
  const stressMaster = fs.existsSync(stressMasterPath)
    ? load(fs.readFileSync(stressMasterPath, 'utf8'))
    : null;

  const exceptionMasterPath = path.join(packageDir, 'Knowledge/Exception_Master.yaml');
  const exceptionMaster = fs.existsSync(exceptionMasterPath)
    ? load(fs.readFileSync(exceptionMasterPath, 'utf8'))
    : null;

  // Step 5: Load Database
  const databasePath = path.join(packageDir, 'Database/English_Pronunciation_Database.yaml');
  const database = fs.existsSync(databasePath)
    ? (load(fs.readFileSync(databasePath, 'utf8')) as any)
    : null;

  // Load Learning Model
  const learningModelPath = path.join(packageDir, 'Core/EPRS_Learning_Model.yaml');
  const learningModel = fs.existsSync(learningModelPath)
    ? load(fs.readFileSync(learningModelPath, 'utf8'))
    : null;

  // Build high-speed word lookup index
  const wordsMap = new Map<string, any>();
  if (database && Array.isArray(database.words)) {
    for (const w of database.words) {
      if (w && w.word) {
        wordsMap.set(w.word.toLowerCase().trim(), w);
      }
    }
  }

  return {
    manifest,
    validationReport,
    ruleMaster,
    patternMaster,
    stressMaster,
    exceptionMaster,
    database,
    learningModel,
    wordsMap,
  };
}

// Singleton package instance cached in memory
let cachedRuntimePackage: EPRSRuntimePackage | null = null;

export function getEPRSRuntime(): EPRSRuntimePackage {
  if (!cachedRuntimePackage) {
    cachedRuntimePackage = loadEPRSPackage();
  }
  return cachedRuntimePackage;
}
