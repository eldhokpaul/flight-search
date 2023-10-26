import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Layout'),
    children: [
    {
      name: 'Search',
      path: '',
      component: () => import('@/views/home/HomePage'),
    },
    {
      name: 'Results',
      path: '/results/:origin/:destination/:departureDate/:returnDate',
      component: () => import('@/views/home/FlightSearch'),
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
