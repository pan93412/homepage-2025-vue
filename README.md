# Pan's Homepage v3

原有的 [homepage-plain](https://github.com/pan93412/homepage-plain) 是使用純 HTML 撰寫的（Vite 只負責對 JavaScript 的 ES Module 做 bundling）。在擴展時遇到這些問題：

- 要維護兩個版本的 HTML（`index.html` 和 `index.zh-TW.html`）。純文字改動的話還可以手動複製貼上，但如果有很大的結構改變，就只能用 AI 重新翻譯 `index.zh-TW.html`，導致內容不一致。
- 沒有元件機制，如果有重複的類似項目，就只能複製貼上。小規模下還好，但內容一多容易漏掉樣式。
- Tailwind CSS 的設計系統比自己定義的還好，如果要套用 Tailwind CSS 的話，HTML 這種不易 DRY 的環境不友善
- HTML 同時兼顧排版和內容兩個部分，導致新的經歷或者是項目在增加下沒有這麼容易。

因此，我這次改用 Nuxt.js 來重寫網頁。比起純粹的 HTML，它可以善用 Vue 元件化的優勢；比起純粹的 Vue CSR，Nuxt.js 支援 SSR，在 SEO 表現上可以和原本一樣好，也可以視需要切換成 SSG 純靜態輸出。

同時也試試看 Vue.js 開發。我平時使用 React.js 比較多，但 Vue.js 據說效能和一部分開發體驗上比較好，在小規模專案開發下確實很值得試試。

## 特點

- 使用 vue-i18n 來做國際化，使用者可以手動切換語言。
- 每個網站區塊都是一個元件，在程式碼結構上會更為清晰。
- 使用 JavaScript 物件來定義經歷、簡報等內容，減少需要動到 template 的時機。
- 支援 Table of Contents 來快速跳轉，以及知道自己在哪個區域。
- 全站盡量在編譯階段就完成，JavaScript 只有增強用途（如在 ToC 中標明目前閱讀區塊），且在停用情況下可以正常運作。

在網站內容方面：

- 重新組織內容架構，閱讀上應該會更為容易。
- 將之前寫的 CV 整合到網站上，讓經歷更完整。
- 比起 v2，所有經歷都補上相應的 context，讓內容更像是一個 CV。
- 增加「推薦連結」區塊來放分潤連結。

## 開發

```bash
pnpm install
pnpm dev
```

Linting 與格式化：

```bash
pnpm lint
pnpm format
```

CI 會在 pull request 時執行以下檢查：

- **Lint & Format**：擋掉 lint 和 format 沒過的程式碼。
- **Docker Build**：確認 Dockerfile 可以正常編譯通過。

### Git Hooks

專案使用 Husky 管理 Git hooks：

- **pre-commit**：自動執行 `pnpm format && pnpm lint`，確保提交前格式與風格正確。
- **commit-msg**：透過 Commitlint 檢查 commit message 是否符合 [Conventional Commits](https://www.conventionalcommits.org/) 規範。

### 依賴更新

依賴更新的完整流程（含 Nix、pnpm、Nuxt nightly、GitHub Actions）記錄在 [AGENTS.md](AGENTS.md)，可以由 Claude Code 或 Codex 來做自動依賴更新。

## 部署

主站部署在 <https://pan93.com>，部署在 [NCSE 台灣機房](https://ncse.tw/zh/)、使用 [Zeabur](https://zeabur.com) 做 CI/CD 和部署，搭配 [Bunny CDN](https://bunny.net) 做加速。

實際部署透過 Docker，Zeabur 會自動偵測並以 `Dockerfile` 建置映像檔：

```bash
docker build -t homepage .
docker run -p 8080:8080 homepage
```

Dockerfile 採用兩階段建置（`node:24-alpine`）：第一階段安裝依賴並以 `NITRO_PRESET=node-server` 建置 SSR 產物，第二階段只複製 `.output/` 以縮小映像檔大小。

若需要在本機直接建置並啟動（不透過 Docker）：

```bash
pnpm build
node .output/server/index.mjs
```

若需要純靜態部署（SSG），可改用 `generate`：

```bash
pnpm generate
# 靜態檔案在 .output/public/
```

## 授權條款

程式碼本身以 Apache 2.0 授權，內容引用建議先和作者討論！
