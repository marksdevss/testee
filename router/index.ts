import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ProductsView from '@/views/ProductsView.vue';
import InscricaoView from '@/views/InscricaoView.vue';
import LoginView from '@/views/LoginView.vue'
import App2 from '@/App2.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactView
    },
    {
      path:'/previas',
      name:'previas',
      component: ProductsView
    },
    {
      path:'/inscricao',
      name:'inscricao',
      component:InscricaoView
    },
    {
      path: '/login',
      name: 'login',
      component:LoginView
    },

    {
      path:'/app2',
      name: 'app2',
      component:App2,
      meta: { newWindow: true } 

    }
  ]
})

export default router
