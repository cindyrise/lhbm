import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/helloWorld'
import Home from '@/pages/home/index'
import BackTpl from '@/tpls/backTpl'
import FrontTpl from '@/tpls/frontTpl'

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
      }]
    }
  ]
})
