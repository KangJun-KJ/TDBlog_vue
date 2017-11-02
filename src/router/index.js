import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '@/components/module/desktop/desktop'
import Login from '@/components/module/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Desktop
    },
    {
    	path:'/login',
    	name:"login",
    	component:Login
    }
  ]
})
