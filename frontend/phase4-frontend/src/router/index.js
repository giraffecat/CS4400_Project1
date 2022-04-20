import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adminmenu',
    name: 'AdminMenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminMenu.vue')
  },
  {
    path: '/viewstats',
    name: 'ViewStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewStats.vue')
  },
  {
    path: '/employeeStats',
    name: 'EmployeeStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeStats.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
