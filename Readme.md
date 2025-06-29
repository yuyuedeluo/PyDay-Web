# 如何在 `src/pages/Posts.vue` 新增新元件

在 **PyDay 專案**中於 `src/pages/posts` 資料夾內新增並顯示新互動卡片元件的完整流程：

---

## 1️⃣ 建立新的元件檔案

在 `src/pages/posts` 下建立新的 Vue 檔案，例如：

```
PostX.vue
```

必須填入元件基本結構：

```vue
<script>
export default {
  order: ,
  title: '',
  description: ''
}
</script>

<template>
</template>
```

---

## 2️⃣ 確保對應的圖片準備完成

將要顯示於卡片封面的圖片(.png)放入：

```
src/assets/posts_img/
```

名稱需與元件檔案名稱對應，例如：

```
PostX.png
```

若沒有對應顯示於卡片封面的圖片，則使用預設圖片作為封面：

```
src/assets/posts_img/default.png
```

---

## 3️⃣ Posts.vue 自動加載原理

專案內的 `Posts.vue` 使用 `import.meta.glob` 自動讀取 `src/pages/posts` 下的所有元件，
無需手動修改匯入，只要建立檔案即可自動讀取並在頁面產生對應卡片。

---

4️⃣ 卡片顯示名稱與描述來源
目前系統會自動從每個 `posts/*.vue` 檔案中的 `export default` 讀取 `title` 與 `description` 作為卡片標題與描述。
在每個元件中請使用以下格式：

```vue
<script>
export default {
  order: 4, // 用於排序，數字越小越前面
  title: 'PyDay 活動記錄', // 卡片顯示名稱
  description: '完整活動精彩照片與紀錄' // 卡片顯示描述
}
</script>
```
若未設定 `title` 或 `description`，系統會使用檔案名稱作為預設標題，顯示預設描述文字。


---

## 5️⃣ 頁面顯示與點擊跳轉

完成以上步驟後：

網頁在 `/posts` 頁面自動產生新卡片元件對應的卡片。
點擊卡片即可跳轉顯示該元件頁面內容。

無需額外修改 `router/index.js`。

---

## 6️⃣ 建議：

之後檔名可以時間命名，便於管理。
`order`可以是小數，易於排序。
---
