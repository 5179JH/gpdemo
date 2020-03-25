import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'

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
    component: Home
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
