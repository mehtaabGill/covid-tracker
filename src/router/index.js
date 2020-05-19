import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* SIMPLE ROUTE TO FORWARD ALL REQUESTS TO '/' */
router.beforeEach((to, from, next) => {
  if(to.path !== '/') next({name:'Home'});
  else next();
})

export default router
