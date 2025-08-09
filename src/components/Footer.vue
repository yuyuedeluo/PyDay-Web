<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 PyDay 活動網頁｜所有權保留</p>
      <p>聯絡信箱：<a href="mailto:pyday@example.com">pyday@example.com</a></p>
      <p>GitHub：<a href="https://github.com/your-repo" target="_blank" rel="noopener">前往查看</a></p>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  /* ❗不要 position: fixed/absolute/relative */
  background:#1e1e1e;
  color:#fff;
  text-align:center;
  padding:1rem 0;
  border-top:2px solid #444;
  width: 100%;
}
.footer-content{ max-width: 960px; margin: 0 auto; padding: 0 16px; }
.footer a{ color:#42b983; text-decoration:none; }
.footer a:hover{ text-decoration:underline; }
</style>
