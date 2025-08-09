<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="navbar-left">
        <img class="logo" src="./assets/logo.png" />
      </div>
      <nav class="navbar-right">
        <router-link to="/">首頁HOME</router-link> |
        <router-link to="/schedule">日程SCHEDULE</router-link> |
        <router-link to="/theme">主題THEME</router-link> |
        <router-link to="/posts">貼文POSTS</router-link> |
        <router-link to="/album">相簿ALBUM</router-link> |
        <router-link to="/community">社群COMMUNITY</router-link>
      </nav>
    </header>

    <div class="banner">
      <img src="./assets/banner.png" alt="Banner" />
    </div>

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* 🔷 整體布局 */
.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto; /* header / main / footer */
}

/* 🔷 導覽列 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  padding: 0.5rem 1rem;
  height: 80px;
  border-bottom: 2px solid #444;
}
.logo {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
}
.navbar-left { display: flex; align-items: center; }
.navbar-right a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
.navbar-right a:hover { color: #89e2b0; }

/* 🔶 橫幅圖片 */
.banner {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 550px;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 48%;
  display: block;
  border-bottom: 2px solid #444;
}

/* 🔶 內容區域 */
.main-content {
  margin-top: 630px; /* 避開 banner */
  width: 80%;
  padding: 1rem 2rem;
  background-color: #181818;
  border-left: 2px solid #444;
  border-right: 2px solid #444;
  justify-self: center;
}

/* Footer（不再 fixed）*/
footer {
  background: #1e1e1e;
  border-top: 2px solid #444;
  text-align: center;
  padding: 1rem 0;
}
</style>
