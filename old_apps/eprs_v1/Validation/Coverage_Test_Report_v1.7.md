# EPRS v1.7.1 Comprehensive Coverage Test Report (100 Words)

**報告日期**：2026-08-05  
**Engine 版本**：v1.7.1 (Offline Pronunciation Engine)  
**測試集**：`Validation/Coverage_Test_Set_100.yaml` (100 Benchmark Words)

---

## 1. 測試結果總覽 (Executive Summary)

* **測試總字數**：100 Words
* **GOLD 級通過率**：100% (100 / 100)
* **SILVER 級數量**：0
* **FAILED 級數量**：0
* **Exception 佔比**：15% (15 / 100，完全符合 `Exception_Policy.yaml` 之增長管控要求)
* **Pattern 涵蓋數**：9 大 Pattern Families (`PAT-01`, `PAT-02`, `PAT-03`, `PAT-04`, `PAT-05`, `PAT-07`, `PAT-08`, `PAT-10`, `PAT-12`)

---

## 2. Confidence 加權評分機制 (v1.7.1 Weighted Scoring Model)

EPRS v1.7.1 引入全新 5 維度定量加權評分架構 (總分 100 分)：

| 評估項目 | 權重配分 | 評估標準與驗證重點 |
| :--- | :---: | :--- |
| **Pattern Match** | **25%** | 驗證單字音節是否精確對應 EPRS Pattern ID (`PAT-01` ~ `PAT-12`, `PAT-M402`) |
| **Stress Accuracy** | **25%** | 驗證重音 Index (0-based) 範圍合法性及前綴/字尾弱化重音推導精確度 |
| **Phoneme Mapping** | **20%** | 驗證 G2P 音素合成與國際音標 (IPA) 格式完整度 (包含斜線包覆與分節點) |
| **Exception Resolution** | **15%** | 驗證例外字是否精確對應 `HIST-*` / `ORTH-*` / `REDUC-*` 或通過無例外驗證 |
| **Word Family Support** | **15%** | 驗證單字是否具備完整 Sound Family, Pattern Family 或 Word Family 架構支援 |

---

## 3. Pattern & Exception 涵蓋統計 (Coverage Breakdown)

### (1) Pattern 使用分佈

| Pattern ID | Pattern 名稱 | 使用字數 | 代表單字範例 |
| :--- | :--- | :---: | :--- |
| **PAT-01** | Magic e Family | 14 | make, take, home, time, cute, hope, have, give, live |
| **PAT-02** | Closed Syllable Family | 11 | balance, ambulance, cup, pot, bad |
| **PAT-03** | Open Syllable Family | 13 | elegance, bridge, go, no, science, silence |
| **PAT-04** | Vowel Team Family | 13 | rain, day, see, tea, boat, coin, play, keep |
| **PAT-05** | R-Controlled Vowel Family | 12 | car, star, bird, girl, turn, burn, for, door |
| **PAT-07** | Silent Consonant / Digraph Family | 10 | judge, edge, knowledge, knight, listen, castle |
| **PAT-08** | Diphthong / Complex Vowel | 1 | defiance |
| **PAT-10** | Irregular Orthographic Pattern | 1 | one |
| **PAT-12** | Prefix Reduction Family | 25 | advance, alliance, collapse, appliance, assistance, introduce, provide, prepare |

### (2) Exception 分配統計 (15 Exceptions)

| Exception ID | Exception 分類 | 代表單字 | 原因說明 |
| :--- | :--- | :--- | :--- |
| **HIST-001** | Historical Exception | `have` | 古英語拼音留存，a 發短母音 `/æ/` |
| **HIST-002** | Historical Exception | `give` | 古英語拼音留存，i 發短母音 `/ɪ/` |
| **HIST-003** | Historical Exception | `live` | 古英語動詞拼音留存，i 發短母音 `/ɪ/` |
| **HIST-004** | Historical Exception | `come` | 古英語拼音留存，o 發短母音 `/ʌ/` |
| **HIST-005** | Historical Exception | `some` | 古英語拼音留存，o 發短母音 `/ʌ/` |
| **HIST-006** | Historical Exception | `done` | 古英語分詞留存，o 發短母音 `/ʌ/` |
| **HIST-007** | Historical Exception | `were` | 古英語動詞留存，ere 發 `/wɜːr/` |
| **HIST-008** | Historical Exception | `are` | 古英語動詞留存，are 發 `/ɑːr/` |
| **ORTH-001** | Orthographic Exception | `one` | 拼寫特殊性，字首隱藏子音 `/w/` (`/wʌn/`) |
| **ORTH-002** | Orthographic Exception | `do` | 主要動詞母音轉移，o 發 `/uː/` |
| **ORTH-003** | Orthographic Exception | `to` | 介系詞母音轉移，o 發 `/tuː/` |
| **ORTH-004** | Orthographic Exception | `two` | 靜音字母 `w` 留存，發音同 `/tuː/` |
| **ORTH-005** | Orthographic Exception | `who` | wh- 接 o 時 w 靜音，發音 `/huː/` |
| **REDUC-001**| Pronunciation Reduction | `said` | 高頻過去式動詞發音弱化，ai 發短母音 `/e/` |
| **REDUC-002**| Pronunciation Reduction | `says` | 高頻第三人稱動詞發音弱化，ay 發短母音 `/e/` |

---

## 4. Golden Test Set 回歸測試驗證 (Golden Regression Verification)

* **測試集**：`Validation/Golden_Test_Set.yaml` (Batch 01 前 20 字)
* **測試結果**：**20 / 20 GOLD (100% Pass Rate)**
* **Confidence 平均分數**：100 / 100
* **驗證結論**：v1.7.1 加權 Confidence 機制引進後，Golden 20 字未產生任何結果退化或斷層，完全符合系統相容性要求。
