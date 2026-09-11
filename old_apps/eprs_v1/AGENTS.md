# EPRS Project Governance, Rules & Knowledge Repository

## EPRS Core Mission (發音知識系統核心使命)

> **建立完整、可驗證、可重用的英文發音知識系統，以最少的例外、最多的通用規則，協助學習者快速推演未知單字的發音，並透過規律化記憶提升長期學習效率。**

---

## 一、EPRS 自然發音核心十三大規則體系 (Phonics Rules Knowledge Base)

本系統以 13 大標準自然發音規則為核心，所有單字音節推導均須明確標註適用規則、推導公式與例外判定：

| 規則代碼 | 規則名稱 (中文 / 英文) | 分類 | 核心公式 / 判定特徵 | 代表發音與範例單字 | 判定防範與例外原則 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R001** | **閉音節短母音**<br>Closed Syllable | 母音法則 | `[(C)VC]` 母音後接子音封閉 | a→/æ/ (cat), e→/ɛ/ (bed), i→/ɪ/ (sit), o→/ɑː/ (stop), u→/ʌ/ (bus) | **非重讀/弱化前綴禁止判定為適用**（見 R012）；後接 r 轉入 R005。 |
| **R002** | **開音節長母音**<br>Open Syllable | 母音法則 | `[(C)V]` 母音結尾未被封閉 | a→/eɪ/ (paper), e→/iː/ (me), i→/aɪ/ (tiger), o→/oʊ/ (go), u→/juː/ (music) | 非重音音節之開音節常發生弱化（如 banana 首音節）。 |
| **R003** | **魔術 E 規則**<br>Magic E / V-C-e | 母音法則 | `[V + C + e]` 字尾 e 靜音使母音變長 | a_e→/eɪ/ (cake), i_e→/aɪ/ (bike), o_e→/oʊ/ (home), u_e→/juː/ (cute) | have, live, give, love 為歷史音變例外，歸入 R010。 |
| **R004** | **母音字母組合**<br>Vowel Teams | 母音法則 | `[VV]` 相連母音組合發固定音 | ai/ay→/eɪ/ (rain, day), ee/ea→/iː/ (meet, read), oa/ow→/oʊ/ (boat, snow), oi/oy→/ɔɪ/ (coin, boy), ou/ow→/aʊ/ (house, cow), oo→/uː/ (moon) 或 /ʊ/ (book) | ea 有時發短音 /ɛ/ (bread) 或 /eɪ/ (break)，需標記歷史音變。 |
| **R005** | **R 控制母音**<br>R-Controlled Vowels | 母音法則 | `[V + r]` 母音受 r 捲舌同化 | ar→/ɑːr/ (car), or→/ɔːr/ (fork), er/ir/ur→/ɝː/ (her, bird, nurse), air/are→/ɛr/ (chair, care), ear/eer→/ɪr/ (hear, deer) | war, warm 中 a 受 w 圓唇化發 /ɔːr/。 |
| **R006** | **子音連綴與合音**<br>Consonant Blends & Digraphs | 子音法則 | `[CC]` 子音群結合成新單音或順滑連綴 | sh→/ʃ/ (ship), ch→/tʃ/ (chat), th→/θ/ (think) 或 /ð/ (this), ph→/f/ (photo), wh→/w/ (what), ng→/ŋ/ (sing), ck→/k/ (black) | ch 在希臘借詞發 /k/ (echo, chemistry)，在法語借詞發 /ʃ/ (chef, machine)。 |
| **R007** | **軟硬子音規則**<br>Soft and Hard C/G | 子音法則 | `[C/G + e/i/y]` 發軟音；其餘發硬音 | 軟 C→/s/ (city, cell), 硬 C→/k/ (cat, cold); 軟 G→/dʒ/ (gem, giant), 硬 G→/ɡ/ (game, gold) | get, give, gift 為古諾斯語借詞硬音例外，歸入 R010。 |
| **R008** | **非重音母音弱化**<br>Unstressed Vowel Reduction | 音節與弱化 | `[Unstressed Syllable]` 弱音節弱化為央母音 | 弱化母音發 /ə/ (schwa) 或 /ɪ/ (about /əˈbaʊt/, pencil /ˈpɛn.səl/, family /ˈfæm.ə.li/) | 凡非重音音節且音標發 /ə/ 或 /ɪ/ 者，優先適用本規則。 |
| **R009** | **靜符子音規則**<br>Silent Consonants | 子音法則 | 歷史輔音群簡化後特定字母不發音 | kn-→/n/ (know, knee), wr-→/r/ (write, wrong), -mb→/m/ (climb, lamb), -bt→/t/ (doubt, debt), -gn→/n/ (sign), -lk→/k/ (walk, talk), ps-→/s/ (psychology) | 須在推導鏈中明確註記靜音字母與歷史簡化背景。 |
| **R010** | **例外音標字**<br>Phonetic Exceptions | 例外與特殊 | 借詞、歷史音變、拼寫不合常規字 | debt /dɛt/ (b靜音), island /ˈaɪ.lənd/ (s靜音), laugh /læf/ (gh發/f/), colonel /ˈkɝː.nəl/ | 必須標註具體例外分類（如「外來借詞」、「歷史母音推移殘留」）。 |
| **R011** | **字首字尾與詞構規則**<br>Morphology & Affixes | 詞綴與複合詞 | 詞根+前後綴或複合字組合規律 | -tion/-sion→/ʃən/ (nation), -ture→/tʃɚ/ (nature), -ous→/əs/ (famous), -ly→/li/ (quickly), un-, re-, dis- | 重音常落在 -tion, -ic, -ity 前一個音節。 |
| **R012** | **非重讀前綴弱化**<br>Unstressed Prefix Reduction | 音節與弱化 | 多音節字非重讀前綴母音弱化 | ac-, ad-, af-, al-, ap-, as-, at-, con-, com-, de-, re-, ex- 處於非重讀音節時發 /ə/ 或 /ɪ/ (account /əˈkaʊnt/, admit /ədˈmɪt/, apply /əˈplaɪ/) | **嚴禁誤判為 R001 閉音節**。雙子音 (cc, pp, tt) 在此僅發單子音。 |
| **R013** | **子音+le 音節規則**<br>Consonant + le Syllable | 音節與弱化 | `[C + le]` 字尾成音節輔音 | -ble→/bəl/ (table), -cle→/kəl/ (circle), -dle→/dəl/ (candle), -fle→/fəl/ (waffle), -gle→/ɡəl/ (eagle), -tle→/təl/ (bottle) | 本身構成一個非重讀音節，自帶成音節 /l/。 |

---

## 二、零離線檔案生成原則 (Zero Offline File Generation Policy)

1. **嚴禁實體檔案硬碟寫入**：
   - 嚴格禁止在本地檔案系統生成龐大的靜態 YAML、Markdown、HTML 或 PDF 實體檔案（如 `Database/Batch*.yaml`、`Validation/*_Report.md`、`Report/*.html`）。
   - 單字推導、報表呈現與練習題卡完全由記憶體內模組（`@/lib/batch01Data`、`@/lib/seniorBatch*Data`）與動態路由（`/report/[batch]`、`/quick-practice`）即時計算渲染。
   - 防止觸發容器檔案系統同步逾時（Timed out waiting for file system condition 180s）、磁碟膨脹與檔案鎖死。

2. **記憶體即時推論與動態渲染**：
   - 批次分析與報告均透過 Next.js 頁面與組件即時呈現，支援前端篩選、分頁、單元拆分、語音合成與「離線 HTML 動態下載（`/api/export-offline`）」。

---

## 三、跨環境目錄移植與相對路徑原則 (Portability & Relative Paths Policy)

1. **100% 相對路徑與環境無關性**：
   - 專案所有檔案存取、資源參照、模組引用均必須使用相對路徑（`@/*`、`./*`）或以 `process.cwd()` / `__dirname` 相對解析。
   - 嚴格禁止硬編碼任何絕對路徑（如 `/app/applet` 或根目錄 `/`）。
   - 確保專案目錄可直接以 ZIP 下載或 `git clone` 移植至本機 macOS/Windows/Linux、Docker 容器或 CI/CD 環境下無痛安裝並順暢執行。

2. **多目錄後備搜尋（Fallback Strategy）**：
   - 載入關鍵資源（如字典包 `EPRS_APP_PACKAGE_v1.5`、中文字型）時，必須循序檢查：
     1. `path.resolve(process.cwd(), ...)`
     2. `path.resolve(__dirname, '..', ...)`
     3. 系統標準後備路徑
   - 避免因執行命令的當前工作路徑 (CWD) 差異而導致 `ENOENT` 錯誤。

---

## 四、音訊引擎與發音播放規範 (Audio Engine & UX Standards)

1. **全域音訊互斥管理器 (`AudioManager`)**：
   - 全專案統一使用 `@/lib/audioManager.ts` 單例，嚴格禁止在組件中直接隨意呼叫原生 `window.speechSynthesis`。
   - 任何新播放請求觸發前，必須先終止 (`cancel()`) 當前正在進行或排隊中的發音，確保發音不重疊。

2. **發音緩衝與 1 秒鎖定機制**：
   - 點擊發音按鈕後，UI 立即呈現「⏳ 準備發音...」載入狀態。
   - 精確延遲 **1000ms (1秒)** 後再觸發合成語音，並在此期間暫時禁用按鈕，避免使用者連續狂點造成 Web Speech API 佇列卡死。

3. **標準語音參數**：
   - 語系：`lang: 'en-US'`
   - 語速：`rate: 0.85`（清晰教學語速，利於初學者與高中生辨析音節）
   - 音調：`pitch: 1.0`

---

## 五、網站錯誤中學習與防範知識庫 (Error Learning & Prevention Knowledge)

> **最高指導原則：每次問題修復後，必須第一時間將根本原因、修復方法與防範對策沉澱為具體條文規則寫入本文件，確保相同或類似錯誤後續「絕對不再發生」。**

| 常見錯誤案例 | 根本原因 (Root Cause) | 預防與解決對策 (Prevention & Fix) |
| :--- | :--- | :--- |
| **1. File System Timeout (180s)** | 離線腳本批次寫入數百萬字元之靜態 YAML/HTML，造成檔案監控與同步佇列阻塞。 | **全面移除離線檔案生成**；改用記憶體資料模組與動態路由即時處理，嚴禁磁碟 IO 垃圾。 |
| **2. ENOENT /package.json** | 指令或工具於容器非專案目錄執行，或路徑誤用根目錄 `/` 開頭。 | 始終錨定 `process.cwd()` 或專案相對路徑，避免在根路徑執行檔案操作。 |
| **3. Node ESM Module Resolution 失敗** | 原生 Node ESM 無法自動推導 `.ts` 副檔名或缺少套件 default export。 | 使用 Next.js 打包或 Bun 原生載入器；模組引用使用標準相對路徑。 |
| **4. Dev Server 記憶體偏高或卡死** | 一次性大量載入巨量單字清單並無分頁渲染，導致 V8 Heap 膨脹。 | 在報表與練習模式引入**單元劃分（每 20 字一單元）**與虛擬渲染，提供即時空狀態處理。 |
| **5. 頁面崩潰缺乏自癒引導** | 發生未捕獲異常時頁面呈現空白或死循環。 | 建立全域 `app/error.tsx` 與 `app/not-found.tsx`，提供診斷訊息、快速重試與「返回首頁」自癒按鈕。 |
| **6. Dev Server 啟動與健康檢查逾時** | 背景診斷指令無超時限制或未及時終止殘留進程，造成冷啟動狀態交錯與連接阻塞。 | 1. 任何健康檢查指令必加明確超時參數（如 `curl -m 5`）。<br>2. 嚴禁留下無人管理的背景任務（及時清理 Task）。<br>3. 冷啟動等待期間避免重複觸發多重重啟信號。 |
| **7. 重複組件檔案分歧 (Ghost Files)** | 存在多個同名或功能重疊之組件檔案（如 `app/components/` 與 `components/` 雙軌並存），維護時容易改錯或邏輯脫節。 | **單一真實來源原則 (Single Source of Truth)**：統一由 `components/` 集中管理；舊目錄僅能使用單行 `export * from '@/components/...'` 轉發，嚴禁存放兩套相仿程式碼。 |
| **8. JSX / TSX 語法閉合破損 (Syntax Defect)** | 在多層巢狀 `.map()` 或條件渲染區段進行編輯時，缺漏對應之閉合括號 `)`、`}` 或標籤，導致 Next.js SWC 編譯崩潰。 | 任何程式碼異動均須保持完整語法塊對稱性，編輯前後必須核對括號層級與閉合結構，避免引發 500 SSR 伺服器錯誤。 |
| **9. 單一超長組件維護陷阱** | 單一檔案超過 500+ 行且混雜音訊管理、狀態機、多重視窗與卡片視圖，改動時極易引發連鎖回退錯誤。 | **全面模組化與物件化**：將音訊封裝為 Service 物件、狀態抽取為 Enum、視窗與卡片切為獨立小組件（如 `quick-practice/` 目錄），高內聚低耦合。 |
| **10. 狀態機未定義邊界行為** | 快速練習或步驟引導使用 Magic Number 判斷，在邊界或未載入完成時引發未定義狀態。 | 統一使用 TypeScript `enum`（如 `PracticeStep`）與完整狀態機轉移保護，禁止使用不透明數字作為流程核心。 |
| **11. 容器冷啟動依賴檢查期 (Cold Start Lifecycle)** | 容器休眠喚醒時，control plane 需 15-20 秒執行 `bun install` 依賴驗證後才啟動 `npm run dev`，若在此期間存取會短暫出現未啟動狀態。 | 診斷時先確認進程樹狀態（`bun install` -> `npm run dev` -> `next-server`），待其安裝完成後預熱關鍵路由（`curl -m 15`），驗證回傳 200 後方可交付。 |
| **12. Array.map 參數陷阱與資料膨脹 (Array Map Trapping)** | `.map(func)` 會自動將 `(item, index, array)` 三個參數傳遞給回呼函數。若函數具備選用參數（如 `(w, batch, level)`），第三個參數會被帶入原陣列自身，導致所有物件的 `level` 屬性被賦予完整陣列，引發遞迴嵌套，生成 20 萬行龐大資料檔並造成 Next.js 編譯死鎖與伺服器啟動逾時。 | 1. 嚴禁在 `.map()` 直接傳遞多參數函數；一律明確宣告箭頭函式：`.map(w => processWord(w, ...))`。<br>2. 模組生成腳本中禁止在 Top-Level 無條件執行磁碟寫入，必須以 `if (import.meta.main)` 保護，防止被 `import` 時無意觸發重複建置。<br>3. 任何資料檔生成後，必須比對行數規格（通常每 100 字約 4,000 行），若超出立即警示中斷。 |
| **13. 非重讀前綴誤套閉音節 (Unstressed Prefix R001 Fallacy)** | 表面看似閉音節之非重讀音節（如 `account` 之 `ac-`、`admit` 之 `ad-`、`apply` 之 `ap-`）被機械式誤判為「閉音節 (R001) 【適用】發短母音」，與實際輕母音 `/ə/` 或 `/ɪ/` 相悖。 | **重音與前綴優先判定法則**：<br>1. 多音節單字中，凡處於非重讀音節且音標發輕母音 `/ə/` 或 `/ɪ/` 者（包含 `ac-`, `ad-`, `af-`, `al-`, `ap-`, `as-`, `at-`, `con-`, `com-`, `de-`, `re-`, `ex-`），**嚴禁判定為 R001 【適用】發短母音**。<br>2. 規則主導權轉移：此類音節必須歸入 `前綴弱化 (R012)` 或 `非重音母音弱化 (R008)`，狀態為【適用】；若以 R001 檢視，必須明確標記為【不適用 (弱化轉移)】。<br>3. 雙子音如 `cc`, `pp`, `tt` 在非重讀前綴中發單音 /k/, /p/, /t/，不得誤導母音判定為重音短母音。 |
| **14. Standalone Output 與 AI Studio 部署打包** | 部署時 control plane 依賴 Next.js Standalone 產物（`.next/standalone` 與 `.next/static`）進行打包 (`standalone-app.tar.gz`)。若未啟用 `output: 'standalone'`，部署日誌會報錯 `Build artifacts are empty`。 | 1. `next.config.ts` 中必須保持 `output: 'standalone'`。<br>2. `package.json` 中的 `build` 指令維持 `NODE_ENV=production next build`。<br>3. 遇到伺服器熱重載快取時，執行 `restart_dev_server` 清理快取即可正常運作。 |
| **15. 發音無聲與瀏覽器 Web Speech 限制 (Audio Loss & Dual-Engine Fallback)** | 部分瀏覽器（或 iframe 沙盒）因手勢過期（setTimeout 過久）、無安裝語音庫或隊列卡死導致 `speechSynthesis` 靜音無聲。 | 升級為**雙引擎播放機制 (`AudioManager`)**：優先載入真人標準美式英語音訊串流，若離線或受阻自動回退 Web Speech API 並執行 `speechSynthesis.resume()`，確保發音 100% 清晰發聲。 |
| **16. 熱重載快取鎖定與冷啟動延遲 (HMR Cache & Dev Server Warmup)** | 大量靜態檔案或大規模 TSX 模組編譯在 Next.js dev 模式下產生快取累積，使伺服器在重構後短暫未響應。 | 1. 任何大規模模組改動後自動執行 `restart_dev_server` 清理快取。<br>2. 啟動後強制執行多路由預熱檢測 (`curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/`)，確認回傳 200 後方可交付。 |
| **17. 雙軌架構同步維護缺漏 (Dual-Track Drift)** | Next.js 動態頁面與 `public/` 靜態 HTML 分開維護時，可能因漏改某一側導致兩邊功能或外觀不同步。 | 採用「核心資料與樣式單一真實來源」：靜態端直接參照共用之規則庫 (`rules-data.js`) 與批次資料檔 (`public/data/*.js`)，避免重複硬編碼。 |
| **18. not-found.tsx 動態配置衝突 (Not-Found Dynamic Collision)** | `app/not-found.tsx` 若設定 `export const dynamic = 'force-dynamic'`，會導致 Next.js 在建置階段收集頁面資料時拋出 `Cannot find module for page: /_not-found` 及 `routes-manifest.json` ENOENT 錯誤。 | `app/not-found.tsx` 應保持純標準 Client/Server 組件結構，嚴禁宣告 `force-dynamic`，確保靜態建置與路由清單收集順暢。 |
| **19. 生產建置與 Dev Server 輸出目錄競態衝突 (Build-Dev Cache Collision)** | 在 AI Studio 或容器環境部署時，dev server (`next dev`) 於背景運行，同時 control plane 執行 `npm run build`。雙方若皆共用預設之 `.next` 目錄，`next build` 清理並重建目錄時，dev server 收到預覽請求會拋出 `ENOENT: routes-manifest.json` 並併行寫入，導致 JSON 清單損毀並引發 `SyntaxError: Unexpected non-whitespace character after JSON` 建置崩潰。 | 1. 在 `next.config.ts` 中依 Phase/環境分流輸出目錄：開發階段 (`PHASE_DEVELOPMENT_SERVER` / `NODE_ENV=development`) 設定 `distDir: '.next-dev'`，生產建置維持 `distDir: '.next'`。<br>2. 確保 `.gitignore` 納入 `.next-dev/`，徹底隔離開發伺服器快取與生產打包產物，消除並行寫入與競態死鎖。 |
| **20. 離線網頁出不來與腳本跨頁面相容性缺失 (Offline Common.js DOM Coupling & Iframe Sandbox)** | 1. `common.js` 未具備防禦性檢查，在獨立批次報表頁面中嘗試綁定不存在的 DOM 控制元件 (`dom.batchSelect`、`dom.wordsTableBody`)，引發 TypeError 中斷執行。<br>2. `common.js` 之 `init()` 在頁面載入時無條件重置 `window.EPRS_CURRENT_BATCH = null`，將報表頁面已預載之批次資料抹除。<br>3. AI Studio 容器預覽之 iframe 沙盒阻擋 `target="_blank"` 彈出新視窗，且缺乏 `/offline` 應用內動態專屬頁面。 | 1. **全域腳本頁面環境適應 (Page Context Guard)**：在 `common.js` 中嚴格區分 SPA 總入口與獨立報表頁面，僅在入口頁綁定批次切換與多單元控制；報表頁僅注入 `window.EPRS_COMMON` 工具函式且嚴禁抹除既有 `EPRS_CURRENT_BATCH`。<br>2. **應用內 `/offline` 專屬專區**：建立 `app/offline/page.tsx` 路由，提供「📱 內嵌離線網站預覽 (iframe)」、「📑 24 批次獨立離線報表清單」與「📖 13 大規則庫」，避免依賴外部彈出視窗。<br>3. **靜態與動態雙向互通**：各報表與離線入口提供直接回到主系統與 SPA 之導航連結，確保離線與線上全情境 100% 正常開啟。 |
| **21. Cloud Run 部署容器啟動找不到 server.js (Cannot find module /workspace/server.js)** | Cloud Run 部署容器執行 `npm start` 預設執行 `node server.js`，若根目錄缺少 `server.js` 或僅配置 `next start`，在 Standalone 打包環境下會拋出 `Cannot find module '/workspace/server.js'` (exit status 1)。 | 1. 在專案根目錄建立自適應 `server.js`，優先引導至 `.next/standalone/server.js`，若無則回退至標準 Next.js 伺服器啟動。<br>2. `package.json` 中的 `start` 指令明確指向 `"node server.js"`。<br>3. 確保 `server.js` 能自動適應 Cloud Run 注入之 `PORT` 環境變數。 |

---

## 十、系統高可用性防禦與穩定維運準則 (System High-Availability & Robustness Framework)

為徹底消除「容易出錯、重載卡死、模組脫節」之現象，全專案確立以下六大防禦措施：

### 1. 單一真實來源 (Single Source of Truth)
- 自然發音 13 大規則與發音推導資料一律集中定義於 `@/lib/` 與 `public/data/` 規範模組，組件嚴禁在內部自造資料或規則推導分支。

### 2. 多層次防禦驗證 (Multi-Layer Verification Gate)
- 每次代碼異動後，必須依序通過：
  1. `lint_applet`：語法與靜態型別無錯誤。
  2. `compile_applet`：Next.js 生產建置打包無阻礙。
  3. `Server Warmup (curl 200)`：雙軌路由（主頁 `/` 與離線頁 `/offline.html`）皆回傳 HTTP 200。

### 3. 音訊容錯雙引擎 (Audio Resilience)
- 避免單純依賴瀏覽器 `SpeechSynthesis`。真人音訊串流與本機 Web Speech API 雙軌互補，並加上 1 秒狀態鎖防止連鎖崩潰。

### 4. 變更隔離與版本鎖定 (Change Isolation & Version Locking)
- 已通過驗證之批次（如 Batch 01~12）嚴格凍結；新功能或修改僅在當前目標範圍內測試，未經明確確認絕不批量回溯覆寫歷史批次。

### 5. 零未受管背景任務 (Zero Orphan Background Tasks)
- 嚴禁殘留無超時設定之背景程序；任何健康檢查均附帶明確超時機制（`curl -m 5`），確保容器資源維持輕量敏捷。

### 6. 靜態與動態雙保險 (Static & Dynamic Dual Insurance)
- `public/offline.html` 提供 100% 離線可用之純靜態網站，即使伺服器處於極端網路或冷啟動狀態，使用者仍可藉由靜態端順暢查詢與練習。

---

## 六、規則沉澱與執行動態規範 (Rule Codification Protocol)

1. **修復即入規（Mandatory Codification on Fix）**：
   - 每次修復問題後，必須立即在 `AGENTS.md` 建立對應規則條目，包含「錯誤現象」、「根本原因」與「具體防範措施」。
   - 未完成規則沉澱的修復不視為完成任務。

2. **模組優先原則（Modularity Over Monoliths）**：
   - 所有新功能或重構一律採用模組化、物件化、職責分離架構，嚴禁將大量異質邏輯塞入單一組件中。

3. **零重複原則（DRY - Don't Repeat Yourself）**：
   - 徹底消除重複邏輯與分歧組件，重複功能以共用工具庫、服務物件或共用組件集中收斂。

---

## 七、版本號管理與階段性規則套用規範 (Versioning & Staged Rule Adoption Protocol)

1. **每一次產出必帶版本號 (Mandatory Versioning on Every Output)**：
   - 所有產出（包含記憶體資料庫模組 `@/lib/seniorBatch*Data`、推導腳本、UI 頁面頂端徽章、匯出檔案 CSV / Excel）均必須明確標註所屬**版本號**（例如 `Engine v1.6`、`Dataset v1.5.11`）。
   - 產出檔案開頭必須具備標準註解標籤：`// EPRS Dataset Version: vX.Y.Z | Generated: YYYY-MM-DD`。

2. **變更需求隔離原則（Isolation of Completed Batches）**：
   - 當發音推導邏輯、規則分類或結構需求產生變更時，**嚴格禁止立即覆寫或回溯套用至其他已完成之批次**（如已審核之 Batch 01~10）。
   - 已完成的批次內容一律凍結於其通過審核的版本號狀態，避免引發連鎖回退或非預期之改動。

3. **確認套用關卡與版本推進（Confirmation Gate & Version Bump）**：
   - 新增或變更之規則僅於當前測試或指定批次呈現，並標示版本號或候選狀態。
   - **必須等待使用者明確下達「確認套用規則」後**，方能根據所核定之新版本號，統一針對舊有批次進行回溯升級與更新。
   - 全面更新並核對無誤後，始可根據新版本規格繼續推進下一批次單字。

---

## 八、資料生成與 UI 顯示雙軌版本控制架構 (Dual-Track Version Control Architecture)

為解決發音推導規則迭代與前端展示排版演進互相影響之痛點，系統建立「資料生成規則 (Data Spec)」與「UI 顯示規範 (UI Spec)」獨立雙軌版本控制機制，並以 `@/lib/versionConfig.ts` 為唯一真實來源 (Single Source of Truth)：

### 1. 資料生成規則版本控制 (Data Generation Spec - `DATA_SPEC_VERSION`)
- **管控範圍**：
  - 自然發音 13 大規則定義與判定條件 (`R001` ~ `R013`)。
  - 音節切分演算法、重讀/弱化判定優先權（如 `R012 非重讀前綴弱化` 優先於 `R001 閉音節`）。
  - 歷史音變與外來借詞例外字庫 (`R010`)、靜符子音簡化 (`R009`)。
  - 單字推導物件資料結構 (`BatchWord`、`SeniorBatchWord` 欄位與結構定義)。
- **版號規範**：遵循語意化版本（Semantic Versioning，如 `v1.5.0` -> `v1.6.0`）。當規則邏輯演進時發布 `Candidate (rc)`，經核定後晉級為 `Gold`。

### 2. UI 顯示規範版本控制 (UI Display Spec - `UI_SPEC_VERSION`)
- **管控範圍**：
  - 儀表板與獨立推導報表排版結構、欄位寬度與中英文間距。
  - 動態字級縮放系統（100% ~ 300% 響應式換行與最小單元保護）。
  - A4 橫向列印最佳化樣式（`@media print` 分頁保護、字級固定 8.5pt~9pt、隱藏導航控制項）。
  - 全域音訊互斥管理器 (`AudioManager` 1 秒鎖定防狂點、0.85 教學語速)。
  - 快速練習模組（每單元 20 字結構、五步發音引導卡片）。
- **版號規範**：UI 介面調整或列印樣式優化獨立推進（如 `v1.2.0` -> `v1.3.0`），不影響底層單字發音推導資料結構。

### 3. 雙軌版本中心與批次追溯矩陣 (Version Center & Traceability Matrix)
- 系統於主頁面與獨立報表頂端提供「雙軌版本控制中心」互動彈窗 (`VersionControlModal`)。
- 清楚揭示各批次（Batch 01 ~ Batch 12）當前綁定之 `EngineVersion`、`DatasetVersion` 與 `UiSpecVersion`，落實完全可追溯性與變更隔離。

---

## 九、public 目錄靜態網站預製、離線可用性與啟動保證規範 (Static Site Pre-generation & Startup Availability Protocol)

為提升系統響應效能、落實完全離線自主運作，並杜絕重複動態計算與磁碟阻塞，制定以下靜態網站核心治理規範：

### 1. 預製靜態網站於 `public/` 目錄與 100% 相對路徑原則
- **靜態內容預製**：系統各批次單字推導報表、13 大核心自然發音規則庫、搜尋過濾與語音朗讀功能，均預先建置為純靜態 HTML/CSS/JS 檔案存放於 `public/` 目錄（如 `public/index.html`、`public/index1200.html`），無須每次動態耗時運算產生。
- **100% 相對路徑與離線可用性**：所有靜態檔案內部之資源參照、樣式、腳本與超連結一律嚴格採用相對路徑（`./`），嚴禁依賴外部 CDN 或絕對網址。使用者直接複製或下載整個 `public/` 目錄，即可在無網路連線環境下直接雙擊開啟並離線完整使用。

### 2. 靜態檔案增量更新與確認更新機制 (Lazy Static Update & Confirmation Gate)
- **非必要不重複更新**：靜態檔案無須在每次微調或日常查詢時全量覆寫。
- **新版本套用最新檔案**：產生新版本推導規則或新單字批次時，僅需套用並生成當前最新批次之靜態檔案。
- **全量更新確認關卡**：若需對既有歷史批次的靜態檔案進行全量覆寫更新，**必須先提示並取得使用者明確再次確認後始得執行**，以杜絕重複工作與編譯死鎖。

### 3. 靜態網站優先啟動與可用性保證 (Static-First System Startup & High Availability)
- **系統啟動可用性**：系統啟動時必須確保 `public/` 目錄內的靜態網站具備完整可用性，包含首頁索引、批次切換、單字檢索、發音鎖定機制（1 秒緩衝保護）、字級縮放與 A4 橫向列印排版均能正常運作。
- **雙軌兼容**：Next.js 動態伺服器路由與 `public/` 靜態檔案共存互補，提供動態互動與靜態離線雙重保障。


