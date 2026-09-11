// EPRS Version Management & Specification Registry
// Centralized Single Source of Truth for Data Generation & UI Display Versioning

export interface VersionInfo {
  version: string;
  releaseDate: string;
  title: string;
  type: 'ENGINE' | 'DATASET' | 'UI_SPEC' | 'RULES';
  highlights: string[];
}

export interface BatchVersionRecord {
  batchId: string;
  batchNum: number;
  level: number;
  levelName: string;
  range: string;
  engineVersion: string;
  datasetVersion: string;
  uiSpecVersion: string;
  status: 'GOLD' | 'RELEASE_CANDIDATE' | 'FROZEN';
  verifiedDate: string;
}

export const EPRS_VERSION_CONFIG = {
  // 1. Core Engine Version (自然發音推導核心引擎版本)
  ENGINE_VERSION: 'v1.6.0',

  // 2. Data Generation Rules Version (資料生成與結構規範版本)
  DATA_SPEC_VERSION: 'v1.6.0',

  // 3. UI Display & UX Specification Version (介面顯示、列印與無障礙規範版本)
  UI_SPEC_VERSION: 'v1.3.0',

  // 4. Phonics Rules System Version (自然發音十三大核心規則版本)
  PHONICS_RULES_VERSION: 'v1.6.0',

  // 5. System Release Tag
  FULL_SYSTEM_VERSION: 'EPRS v1.6.0 (Data v1.6.0 | UI v1.3.0)',

  // 批次版本對照矩陣 (Batch Version Control Matrix)
  BATCH_VERSIONS: [
    {
      batchId: 'moe-all',
      batchNum: 0,
      level: 1,
      levelName: '國中 1200 全套',
      range: '1 ~ 1200',
      engineVersion: 'v1.4.0',
      datasetVersion: 'v1.4.ALL',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-15'
    },
    {
      batchId: 'senior-01',
      batchNum: 1,
      level: 1,
      levelName: '高中第一級',
      range: '1 ~ 100',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.01',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-20'
    },
    {
      batchId: 'senior-02',
      batchNum: 2,
      level: 1,
      levelName: '高中第一級',
      range: '101 ~ 200',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.02',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-22'
    },
    {
      batchId: 'senior-03',
      batchNum: 3,
      level: 1,
      levelName: '高中第一級',
      range: '201 ~ 300',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.03',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-25'
    },
    {
      batchId: 'senior-04',
      batchNum: 4,
      level: 1,
      levelName: '高中第一級',
      range: '301 ~ 400',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.04',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-27'
    },
    {
      batchId: 'senior-05',
      batchNum: 5,
      level: 1,
      levelName: '高中第一級',
      range: '401 ~ 500',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.05',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-29'
    },
    {
      batchId: 'senior-06',
      batchNum: 6,
      level: 1,
      levelName: '高中第一級',
      range: '501 ~ 600',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.06',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-08-31'
    },
    {
      batchId: 'senior-07',
      batchNum: 7,
      level: 1,
      levelName: '高中第一級',
      range: '601 ~ 700',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.07',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-09-02'
    },
    {
      batchId: 'senior-08',
      batchNum: 8,
      level: 1,
      levelName: '高中第一級',
      range: '701 ~ 800',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.08',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-09-04'
    },
    {
      batchId: 'senior-09',
      batchNum: 9,
      level: 1,
      levelName: '高中第一級',
      range: '801 ~ 900',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.09',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-09-05'
    },
    {
      batchId: 'senior-10',
      batchNum: 10,
      level: 1,
      levelName: '高中第一級',
      range: '901 ~ 1000',
      engineVersion: 'v1.5.0',
      datasetVersion: 'v1.5.10',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-09-06'
    },
    {
      batchId: 'senior-11',
      batchNum: 11,
      level: 1,
      levelName: '高中第一級',
      range: '1001 ~ 1098',
      engineVersion: 'v1.6.0',
      datasetVersion: 'v1.6.0-rc1',
      uiSpecVersion: 'v1.3.0',
      status: 'GOLD',
      verifiedDate: '2026-09-07'
    },
    {
      batchId: 'senior-12',
      batchNum: 12,
      level: 2,
      levelName: '高中第二級',
      range: '1101 ~ 1200',
      engineVersion: 'v1.6.0',
      datasetVersion: 'v1.6.0-rc2',
      uiSpecVersion: 'v1.3.0',
      status: 'RELEASE_CANDIDATE',
      verifiedDate: '2026-09-08'
    }
  ] as BatchVersionRecord[],

  // 版本變更紀錄 (Changelog Repository)
  CHANGELOG: [
    {
      version: 'v1.6.0 (Engine & Data Spec)',
      releaseDate: '2026-09-08',
      title: '高中第二級單字推進與前綴弱化 (R012) 規則強化',
      type: 'ENGINE',
      highlights: [
        '新增高中第二級 (Level 2) Batch 12 單字發音推導 (1101~1200)。',
        '建立非重讀前綴 (con-, com-, de-, re-, ex-) 優先於 R001 閉音節判定之轉移防範機制。',
        '強化歷史音變 (R010) 與靜符子音 (R009) 判定鏈 (如 blood, calm, castle, comb)。'
      ]
    },
    {
      version: 'v1.3.0 (UI & Display Spec)',
      releaseDate: '2026-09-08',
      title: '雙軌版本控制中心、自適應字級與 A4 橫向列印最佳化',
      type: 'UI_SPEC',
      highlights: [
        '新增雙軌版本控制中心彈窗，即時檢視各批次 Engine、Data Spec 與 UI Spec 狀態。',
        '優化發音推導報表字級動態縮放 (100% ~ 300%) 與排版防跑版保護。',
        '統一 A4 橫向列印 CSS 樣式與每單元 20 字結構化練習導航。'
      ]
    },
    {
      version: 'v1.5.0 (Engine & Data Spec)',
      releaseDate: '2026-08-20',
      title: '高中第一級 (Level 1) 1000 單字發音資料庫建立',
      type: 'DATASET',
      highlights: [
        '建置高中第一級 Batch 01~10 共 1000 字自然發音資料庫。',
        '導入記憶體模組架構 (@/lib/seniorBatch*Data) 達成零離線檔案生成。'
      ]
    },
    {
      version: 'v1.2.0 (UI & Audio Spec)',
      releaseDate: '2026-08-18',
      title: 'AudioManager 發音防手震與 1 秒鎖定機制',
      type: 'UI_SPEC',
      highlights: [
        '全域 AudioManager 單例互斥管理與 1000ms 防狂點機制。',
        '統一標準美式語音發音參數 (en-US, rate: 0.85, pitch: 1.0)。'
      ]
    }
  ] as VersionInfo[]
};
