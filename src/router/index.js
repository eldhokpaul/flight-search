import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Layout'),
    children: [
      {
        name: 'Search',
        path: '',
        component: () => import('@/views/flight/FlightsHome'),
      },
      {
        name: 'Results',
        path: '/results/:origin/:destination/:departureDate/:returnDate/:classType',
        props: true,
        component: () => import('@/views/flight/FlightSearch'),
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/Error")
      }]
  },
  {
    path: "*",
    redirect: "/404"
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
