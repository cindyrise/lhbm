import Vue from 'vue'
import Router from 'vue-router'
//前端路由设置
import FrontTpl from '@/tpls/frontTpl'
import Home from '@/pages/front/home/index'
import Auth from '@/pages/auth/index'
//后端路由设置
import BackTpl from '@/tpls/backTpl'
import HelloWorld from '@/components/helloWorld'
import AdSet from '@/pages/back/adSet/index'
import IconSet from '@/pages/back/iconSet/index'
import SiteSet from '@/pages/back/siteSet/index'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: FrontTpl,
      children: [{
        path: '/home',
        name: 'home',
        component: Home,
      }]
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/back',
      component: BackTpl,
      children: [
      {
        path: '/back/adset',
        name: 'ad',
        component: AdSet,
      },
      ,
      {
        path: '/back/iconset',
        name: 'icon',
        component: IconSet,
      },
      ,
      {
        path: '/back/siteset',
        name: 'site',
        component: SiteSet,
      }
    ]
    }
  ]
})
