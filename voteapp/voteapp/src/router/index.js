import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import PlayGround from '@/components/PlayGround'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
   
    {
      path:'/playground/:teamname/:people',
      name:'playground',
      component:PlayGround
    }
  ]
})
