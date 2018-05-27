import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/test'
import Title1 from '@/view/Title1'
import Title2 from '@/view/Title2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: Test,
      children: [{
      	path:'title1',
      	name:'title1',
      	component: Title1
      },
      {
      	path:'title2',
      	name:'title2',
      	component: Title2
      }]
    }]
})
