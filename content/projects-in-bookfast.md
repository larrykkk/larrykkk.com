---
createdAt: 2025-04-07 22:31:00
url: projects-in-bookfast
tags:
  - 工作
---

## 開發 2.0 電商系統，負責首頁以及搜尋介面以及功能開發
[https://ec.bookfastpos.com/X815ybnbOG/](https://ec.bookfastpos.com/X815ybnbOG/) (demo 網站，若失效請參考下圖)

## Tech Stack
- Vue 2
- Nuxt 2
- Vuex 3
- Vuetify 2

### Mobile 介面
![Image](https://github.com/user-attachments/assets/6fa745d9-a6d9-4110-9bb1-44a33048281c)

### PC 介面
![Image](https://github.com/user-attachments/assets/8806ac83-c5cb-431a-a78d-2c026be88247)

## 複雜度

在這個專案中，我負責開發的是一個健身類 SaaS 平台的首頁頁面，設計上支援完整的手機與桌機雙版本設計，乍看是個畫面豐富、互動感強烈的行銷頁，但如果你是一位前端工程師，就知道這其實是一次非常扎實的前端架構挑戰。

以下是我想讓你知道的——這不是單純的美化，而是技術與體驗的深度整合：

### 🧩 一頁兩版，結構雙軌：Responsive Design 的真正挑戰
不是把畫面「縮小」就叫做手機版。這個首頁在設計階段就是針對 Mobile 和 Desktop 採用完全不同的 UI 結構：

手機版：強調「上下導覽」與單手操作，例如漢堡選單、橫向滑動課程卡片、垂直資訊排列。

桌機版：運用更多「水平空間」、區塊對齊、資訊密度高，需要明確的視覺階層。

這意味著，我不只是「響應式調整」畫面，而是針對不同裝置開發了兩套 UI 邏輯與互動行為。每一個畫面區塊都需要在 CSS / Media Query 中建立細緻的 breakpoints，並控制元件的可見性、行為與狀態切換。

### 📦 可組合的動態元件架構：維護性與彈性缺一不可
首頁中有大量的「課程資訊卡片」、「教練推薦」、「時段選單」等等，這些不是單純的靜態內容，而是：

動態資料綁定後端 API

每張卡片支援不同的樣式變化與狀態顯示

可配置（例如未來可能會新增場館、課程分類）

為了讓整體系統具有擴展性，我採用Component-based 架構進行拆分，每個元件都支援 slot / props 傳入不同資料，實作上使用像是 v-for 搭配 v-bind 進行資料注入，同時支援 Skeleton Loading 狀態與 Error Handling 機制。


