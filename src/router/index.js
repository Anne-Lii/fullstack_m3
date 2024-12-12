import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Info from '../views/Info.vue'
import Fish from '../views/Fish.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },
    {
      path: '/fish',
      name: 'Fish',
      component: Fish,
    }
  ],
})

export default router
