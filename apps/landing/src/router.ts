import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/Main.vue";
import About from "@/components/About.vue";


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { title: 'Главная' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'О нас' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
    return { top: 0 }
  }
})

export default router