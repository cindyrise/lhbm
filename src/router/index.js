import Vue from 'vue'
import Router from 'vue-router'
//前端路由设置
import FrontTpl from '@/tpls/frontTpl'
import Home from '@/pages/front/home/index'

//后端路由设置
import BackTpl from '@/tpls/backTpl'
import HelloWorld from '@/components/helloWorld'
import AdSet from '@/pages/back/adSet/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: FrontTpl,
      children: [{
        path: '/',
        name: 'home',
        component: Home,
      }]
    },
    {
      path: '/back',
      component: BackTpl,
      children: [{
        path: '/hello',
        name: 'test',
        component: HelloWorld,
      },
      {
        path: '/back/adset',
        name: 'ad',
        component: AdSet,
      },
      {
        path: '/bb',
        name: 'AdSet',
        component: AdSet,
      },
    ]
    }
  ]
})
