import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      number: "1",
      previous: "/",
      next: "/doctor"
    },
  },
  {
    path: '/doctor',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Doctor.vue')
    },
    meta: {
      number: "2",
      previous: "/",
      next: "/appointments",
    },
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: function () {
      return import('../views/Appointments.vue')
    },
    meta: {
      number: "3",
      previous: "/doctor",
      next: "/appointments",
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
