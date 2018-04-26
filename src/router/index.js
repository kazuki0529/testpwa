import Vue from 'vue'
import Router from 'vue-router'
import MyMap from '@/components/MyMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyMap',
      component: MyMap
    }
  ]
})
