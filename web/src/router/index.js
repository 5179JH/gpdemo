import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const HomeMessage = () => import('../views/home/HomeMessage')
const About = () => import('../views/about/About')
const Api = () => import('../views/api/Api')
const Introduction = () => import('../views/introduction/Introduction')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/api',
    component: Api
  },
  {
    path: '/introduction',
    component: Introduction
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
