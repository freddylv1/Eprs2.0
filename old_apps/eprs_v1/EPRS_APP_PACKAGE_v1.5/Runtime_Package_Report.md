# EPRS APP Package v1.5 Runtime Build Report

**Package Name**: EPRS APP Runtime Package  
**Package Version**: 1.5  
**Build Date**: 2026-08-05  
**Output Target Directory**: `/Build/EPRS_APP_PACKAGE_v1.5/`  

---

## 1. Package Overview (套件概要)

本 `EPRS_APP_PACKAGE_v1.5` 為可直接提供予新 APP (Web, Windows, Android, iPad, AI Tutor) 使用之獨立 Runtime 知識包。

完全遵循 **Zero-Legacy Overhead** (無歷程負擔) 與 **Runtime Isolation** 原則，獨立輸出至 `/Build/EPRS_APP_PACKAGE_v1.5/`，不對 `Docs/` 原始維護 Repository 產生任何修改。

---

## 2. Runtime Package Directory Tree (套件結構樹)

```
Build/
└── EPRS_APP_PACKAGE_v1.5/
    ├── manifest.yaml                        # 套件載入宣告、依賴關係與 SHA-256 Checksum
    ├── API_SPEC.yaml                        # Word Query & PDF Export API 接口規格
    ├── Runtime_Package_Report.md            # 本建置與驗證報告
    │
    ├── Core/
    │   ├── EPRS_Rule_Master.yaml            # 發音核心通用規則庫 (R001 - R017)
    │   └── EPRS_Learning_Model.yaml         # 學習與記憶推演模型 (L1 - L5)
    │
    ├── Knowledge/
    │   ├── Pattern_Master.yaml              # 拼字發音模式庫 (PAT-M001 - PAT-M401)
    │   ├── Stress_Master.yaml               # 重音推導與音節規則庫
    │   └── Exception_Master.yaml            # 特殊發音與例外對照庫
    │
    ├── Database/
    │   └── English_Pronunciation_Database.yaml  # 1200 字正式發音與詞性資料庫 (v1.5)
    │
    ├── Templates/
    │   ├── PDF_Template.yaml                # 教材與複習單 PDF 匯出排版模板
    │   └── Worksheet_Template.yaml          # 學生測驗卷與工作頁模板
    │
    └── Metadata/
        └── version.yaml                     # 套件版本與目標平台元資料
```

---

## 3. Package Verification Matrix (驗證核查矩陣)

| 檢查項目 (Check Item) | 驗證狀態 | 說明 (Description) |
| :--- | :---: | :--- |
| **YAML Syntax** | **PASS** | 所有 12 個 `.yaml` 檔案均通過 YAML 1.2 語法解析器與 ESLint / Linter 驗證，縮排與語法無任何瑕疵。 |
| **Missing Reference / Dependency** | **PASS** | `manifest.yaml` 內之 `required_files` 與 `dependency_map` 與實體檔案 100% 吻合，無遺漏任何相依檔案。 |
| **Duplicate File** | **PASS** | 經 SHA-256 雜湊與檔案路徑清查，封包內無重複檔名或重複定義之資料。 |
| **Dependency Integrity** | **PASS** | Core, Knowledge, Database, Templates 彼此間之關聯相依完整，符合 EPRS 1.5 推理引擎規格。 |
| **Loader Order Compliance** | **PASS** | 載入順序嚴格遵循 `EPRS_Rule_Master` -> `Pattern_Master` -> `Stress_Master` -> `Exception_Master` -> `English_Pronunciation_Database` -> `EPRS_Learning_Model` -> `PDF_Template` -> `Worksheet_Template`。 |
| **Runtime Isolation** | **PASS** | `Docs/` 原始 Repository 未受任何變動，歷史檔案 (`Docs/Archive/`) 與建置來源 (`Docs/Source/`) 均被成功隔離，不帶入 Runtime 包。 |

---

## 4. Loader Sequence & File Checksums (載入順序與 Hash 驗證)

1. `Core/EPRS_Rule_Master.yaml` (`710c553e74ef6d525e3fa1bc698bdf155f530fec2cf533acd0f5c43b5a4bc1e1`)
2. `Knowledge/Pattern_Master.yaml` (`93ae3c718011f040241ce2ba5817b5c33bb5d3385a3e1b474faeae01f795f3c5`)
3. `Knowledge/Stress_Master.yaml` (`2d0f6825f28680eb9323081f19cbe21db471f62944a0c7384c38f72c75386b60`)
4. `Knowledge/Exception_Master.yaml` (`3d8b867f600a7ea7decf4463c2af36ea4330fd32d82b42a2b693cb1a0e9fa314`)
5. `Database/English_Pronunciation_Database.yaml` (`d348051c6e4374e1ed4641cac7d8a31143820d4fd358005c8b8f91156764abf6`)
6. `Core/EPRS_Learning_Model.yaml` (`b9b122789a55731385cc3a125f0192adce4ee55979436e27a1d77f574b7efa93`)
7. `Templates/PDF_Template.yaml` (`302d0082ec8a108c954d4f27dd38d534b1d0fe55426f950ba767825cc330ca73`)
8. `Templates/Worksheet_Template.yaml` (`5b07b7e203fa8e3c8eec6a757806876d53225b2020c5dc8a1bb0468dafadfab3`)
