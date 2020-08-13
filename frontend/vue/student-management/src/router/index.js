import Vue from 'vue'
import Router from 'vue-router'
import { HelloWorld, FunctionList, Student } from '../components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
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
