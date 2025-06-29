import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Schedule from '../pages/Schedule.vue'
import Theme from '../pages/Theme.vue'
import Posts from '../pages/Posts.vue'
import Album from '../pages/Album.vue'
import Community from '../pages/Community.vue'

const postModules = import.meta.glob('../pages/posts/*.vue')

const postRoutes = Object.keys(postModules).map((path) => {
  const name = path.split('/').pop().replace('.vue', '')
  return {
    path: `/posts/${name}`,
    name: `Post${name}`,
    component: postModules[path],
  }
})

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', name: 'Schedule', component: Schedule },
  { path: '/theme', component: Theme },
  { path: '/posts', component: Posts },
  { path: '/album', component: Album },
  { path: '/community', component: Community },
  ...postRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
