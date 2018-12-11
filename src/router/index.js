import Vue from 'vue'
import Router from 'vue-router'
// 官网首页
import Index from '@/pages/index/index'
// 主页 teb8个家族小图标页面
//家族
import home from '@/pages/Navigation/home'
//家族动态  产业
import IndustryDynamics from '@/pages/Navigation/IndustryDynamics'
//家族公告
import Notice from '@/pages/Navigation/Notice'
//家族动公益
import Love from '@/pages/Navigation/Love'
import Vedioes from '@/pages/Navigation/Vedioes'
//家族动名人 分支  下级还有tab
import Celebrity from '@/pages/Navigation/Celebrity'
import Branch from '@/pages/Navigation/Branch'
//家族文化 下级还有tab
import Culture from '@/pages/Navigation/Culture'
//祖先人物详情
import Profile from '@/pages/Profile/Profile'
//文章详情
import Article from '@/pages/Profile/Article'
import ArticleIndex from '@/pages/Profile/ArticleIndex'

//慈善人员
import Csperson from '@/pages/Navigation/Csperson'
import Csort from '@/pages/Navigation/components/Csort'
//字派
import ZiPai from '@/pages/Navigation/ZiPai'

Vue.use(Router)

export default new Router({
  routes: [
     { path: '', redirect: '/Index' },
     { path: '/Index', component: Index }
     ,{
       path:'/home',component: home,
       children:[{
          path:'/home',
          component: IndustryDynamics
       },
       {
        path:'/Celebrity',
        component: Celebrity
        },
        {
         path:'/Vedioes',
         component: Vedioes
       },
       {
        path:'/Branch',
        component: Branch
      },
      {
       path:'/Notice',
       component: Notice
       },
       {
        path:'/Love',
        component: Love
      },
      {
       path:'/Culture',
         component: Culture
         },
         {
          path:'/IndustryDynamics',
          component: IndustryDynamics
        }
    ]
     },
     { path: '/Profile', component: Profile },
     { path: '/Csperson', component: Csperson },
     { path: '/Csort', component: Csort },
     { path: '/Article', component: Article },
     { path: '/ArticleIndex', component: ArticleIndex },
     { path: '/ZiPai', component: ZiPai },
     
  ],
  scrollBehavior(to,from,savedPosition){
    return {x:0 ,y :0}
  }
})
