import Vue from 'vue'
import Router from 'vue-router'
import MiningJS from '@/components/MiningJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MiningJS',
      name: 'MiningJS',
      component: MiningJS
    }
  ]
})
