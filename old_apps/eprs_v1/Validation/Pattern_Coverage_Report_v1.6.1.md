# EPRS Pattern Coverage Report v1.6.1 (Batch 01 - 20 Words)

**報告日期**：2026-08-05  
**Builder 版本**：v1.6.1  
**分析範疇**：Batch 01 前 20 字 Golden Test Set

---

## 1. Pattern 使用統計與明細

### PAT-01 Magic e
* **名稱**：Magic e Pattern Family
* **使用單字 (3)**：have, give, live

### PAT-02 Closed Syllable
* **名稱**：Closed Syllable Family
* **使用單字 (2)**：balance, ambulance

### PAT-03 Open Syllable
* **名稱**：Open Syllable Family
* **使用單字 (2)**：elegance, bridge

### PAT-11 Palatalization / Complex Combination
* **名稱**：Palatalization Combination Family
* **使用單字 (2)**：associate, appreciate

### PAT-12 Prefix Combination
* **名稱**：Prefix Reduction Family
* **使用單字 (3)**：collapse, believe, convince

### PAT-M402 ANCE Ending
* **名稱**：ANCE Ending Family
* **使用單字 (8)**：advance, alliance, defiance, distance, appliance, assistance, attendance, compliance

---

## 2. Coverage 涵蓋率總計

* **Patterns Used**：6 / 402 (涵蓋率 1.49% — 針對 initial 20 核心單字)
* **Exceptions Used**：3 / 15 (歷史例外資料庫目前載入 15 筆，已比對使用 HIST-001, HIST-002, HIST-003)
* **Rule Engine Direct Matches (No Exception)**：17 / 20 (85% 通用規則涵蓋率)
* **Exception Rate**：3 / 20 (15% 例外率，符合第一批次高頻常用動詞特性)

---

## 3. 驗證結論

1. **核心規則覆蓋良好**：17 字完全透過通用 Pattern (`PAT-01`, `PAT-02`, `PAT-03`, `PAT-11`, `PAT-12`, `PAT-M402`) 與音律規則自動完成推導。
2. **例外判定清晰精確**：`have`, `give`, `live` 準確命中 `HIST-001`, `HIST-002`, `HIST-003` 歷史例外分類。
3. **具備可擴充性**：隨著擴充批次導入，Pattern 涵蓋率將逐步上升。
