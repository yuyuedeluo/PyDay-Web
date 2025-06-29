<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

// 使用 onMounted + async 初始化 posts
const posts = ref([])

onMounted(async () => {
  const modules = import.meta.glob('./posts/*.vue')

  const loadedPosts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      // 載入模組，每個都有 default export，且包含 order、title 和 description
      const mod = await loader()
      const name = path.split('/').pop().replace('.vue', '')
      // 如果模組沒有 default，則返回預設值
      return {
        name,
        order: mod.default.order ?? 0,
        title: mod.default.title ?? name,
        description: mod.default.description ?? `這是 ${name} 的描述`,
      }
    })
  )

// 預設使用 order 排序，小到大（數字小的排前面）
  posts.value = loadedPosts.sort((a, b) => a.order - b.order)
})

const getImage = (postName) => {
  return new URL(`./posts_img/${postName}.png`, import.meta.url).href
}
const defaultImage = new URL('./posts_img/default.png', import.meta.url).href
// 處理圖片錯誤，顯示預設圖片
const handleImageError = (event) => {
  event.target.src = defaultImage
}

const goToPost = (postName) => {
  router.push(`/posts/${postName}`)
}
</script>

<template>
  <div class="posts-container">
    <div 
      v-for="post in posts"
      :key="post.name"
      class="post-card"
      @click="goToPost(post.name)"
    >
      <img 
        :src="getImage(post.name)" 
        alt="Post Image"
        @error="handleImageError"
      />
      <div class="post-text"> 
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

@media (max-width: 1050px) {
  .posts-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .posts-container {
    grid-template-columns: 1fr;
  }
}

.post-card {
  background: #42b983;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 5 / 4;
  transition: transform 0.3s ease, background 0.3s ease;
}

.post-card:hover {
  background: #389e70;
  transform: scale(1.02);
}

.post-text {
  padding: 0.5rem 1rem; 
  display: flex;
  flex-direction: column;
  justify-content: center; /* 置中內容 */
  flex-grow: 1;
}

.post-text h3 {
  font-size: 1.4rem;
  margin: 0.25rem 0;
  color: white;
  text-align: center;
}

.post-text p {
  color: rgb(234, 234, 234);
  font-size: 0.9rem;
  text-align: center;    
}

.post-card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 8px;
}

</style>