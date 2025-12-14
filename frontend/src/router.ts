import { createRouter, createWebHistory } from 'vue-router'
import Lesson from './pages/Lesson.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/lesson/1' },
    { path: '/lesson/:id', component: Lesson }
  ]
})
