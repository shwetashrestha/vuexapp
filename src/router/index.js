import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import StudentsComponent from '@/components/StudentsComponent'


Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudentsComponent',
      component: StudentsComponent
    }
  ]
})
