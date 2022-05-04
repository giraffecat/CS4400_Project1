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
    path: '/customermenu',
    name: 'CustomerMenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerMenu.vue')
  },
  {
    path: '/managermenu',
    name: 'ManagerMenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManagerMenu.vue')
  },
  {
    path: '/viewstats',
    name: 'ViewStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewStats.vue')
  },
  {
    path: '/manageusers',
    name: 'ManageUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManageUsers.vue')
  },
  {
    path: '/employeeStats',
    name: 'EmployeeStats',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeStats.vue')
  },
  {
    path: '/createCorp',
    name: 'CreateCorp',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCorp.vue')
  },
  {
    path: '/createBank',
    name: 'CreateBank',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBank.vue')
  },
  {
    path: '/createEmployee',
    name: 'CreateEmployee',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEmployee.vue')
  },
  {
    path: '/createCustomer',
    name: 'CreateCustomer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCustomer.vue')
  },
  {
    path: '/stopRole',
    name: 'StopRole',
    component: () => import(/* webpackChunkName: "about" */ '../views/StopRole.vue')
  },
  {
    path: '/hireWorker',
    name: 'HireWorker',
    component: () => import(/* webpackChunkName: "about" */ '../views/HireWorker.vue')
  },
  {
    path: '/replaceManager',
    name: 'ReplaceManager',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReplaceManager.vue')
  },
  {
    path: '/customerManageAccount',
    name: 'CustomerManageAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerManageAccount.vue')
  },
  {
    path: '/adminManageAccount',
    name: 'AdminManageAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminManageAccount.vue')
  },
  {
    path: '/createfee',
    name: 'CreateFee',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateFee.vue')
  },
  {
    path: '/adminManageOverdraft',
    name: 'AdminManageOverdraft',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminManageOverdraft.vue')
  },
  {
    path: '/customerManageOverdraft',
    name: 'CustomerManageOverdraft',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerManageOverdraft.vue')
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deposit.vue')
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Withdrawal.vue')
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transfer.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/PayEmployee.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
