# Pan's Homepage v3

原有的 [homepage-plain](https://github.com/pan93412/homepage-plain) 是使用純 HTML 撰寫的（Vite 只負責對 JavaScript 的 ES Module 做 bundling）。在擴展時遇到這些問題：

- 要維護兩個版本的 HTML（`index.html` 和 `index.zh-TW.html`）。純文字改動的話還可以手動複製貼上，但如果有很大的結構改變，就只能用 AI 重新翻譯 `index.zh-TW.html`，導致內容不一致。
- 沒有元件機制，如果有重複的類似項目，就只能複製貼上。小規模下還好，但內容一多容易漏掉樣式。
- Tailwind CSS 的設計系統比自己定義的還好，如果要套用 Tailwind CSS 的話，HTML 這種不易 DRY 的環境不友善
- HTML 同時兼顧排版和內容兩個部分，導致新的經歷或者是項目在增加下沒有這麼容易。

因此，我這次改用 Nuxt.js 來重寫網頁。比起純粹的 HTML，它可以善用 Vue 元件化的優勢；但比起純粹的 Vue CSR，Nuxt.js 可以把整個頁面預先處理成靜態 HTML（SSG），所以在 SEO 表現上可以和原本一樣好。

同時也試試看 Vue.js 開發。我平時使用 React.js 比較多，但 Vue.js 據說效能和一部分開發體驗上比較好，在小規模專案開發下確實很值得試試。

## 特點

- 使用 vue-i18n 來做國際化。它會根據 `Accept-Language` 標頭指向對應語言的頁面，瀏覽體驗會好很多。
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

Linting:

```bash
pnpm lint
pnpm format
```

CI 會擋掉 lint 和 format 沒過的程式碼。

## 部署

網站同時部署在兩個地方：

- Vercel 主站：<https://pan93.com>
- Zeabur + Bunny CDN：<https://homepage-plain.pan93.com>

可以參考 Dockerfile 的實作。

因為網站是純靜態內容，不涉及伺服器元素，故產生靜態 HTML 來部署：

```bash
pnpm generate
pnpx serve .output/public
```

我也有配一個重新導向規則，主要是把舊網站的 `index.zh-TW.html` 導向到 `/zh` 上。這部分只有寫成 `vercel.json`，`_redirects` 因為沒有這個需求，所以沒有撰寫。

## 授權條款

程式碼本身以 Apache 2.0 授權，內容引用建議先和作者討論！
