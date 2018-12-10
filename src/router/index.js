import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import IndustryDynamics from '@/pages/Navigation/IndustryDynamics'
import Celebrity from '@/pages/Navigation/Celebrity'
import Branch from '@/pages/Navigation/Branch'
import Notice from '@/pages/Navigation/Notice'
import Love from '@/pages/Navigation/Love'
import Vedioes from '@/pages/Navigation/Vedioes'
import Culture from '@/pages/Navigation/Culture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/IndustryDynamics',
      name: 'IndustryDynamics',
      component: IndustryDynamics
    },{
      path: '/Celebrity',
      name: 'Celebrity',
      component: Celebrity
    },{
      path: '/Branch',
      name: 'Branch',
      component: Branch
    },{
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },{
      path: '/Love',
      name: 'Love',
      component: Love
    },{
      path: '/Vedioes',
      name: 'Vedioes',
      component: Vedioes
    },{
      path: '/Culture',
      name: 'Culture',
      component: Culture
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return {x:0 ,y :0}
  }
})
