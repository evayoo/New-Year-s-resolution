import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import SignUpForm from './components/SignupForm.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/Login.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
        },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpForm
        },
        {
          path: '/login',
          name: 'login',
          component: Login
          },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

//process.env.BASE_URL