import Vue from 'vue'
import Router from 'vue-router'
import { FunctionList, Student } from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: FunctionList
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    }
  ]
})
