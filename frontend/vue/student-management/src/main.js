// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'
import {Popup, CreateStudent} from './components'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {apiService} from './service'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component(Popup.name, Popup)
Vue.component(CreateStudent.name, CreateStudent)

const store = new Vuex.Store({
  state: {
    students: []
  },
  mutations: {
    setStudents (state, students) {
      state.students = students
    },
    addStudent (state, student) {
      state.students.push(student)
    }
  },
  actions: {
    getAllStudents (state) {
      apiService.getAllStudents(
        (success) => {
          if (success.status === 200) {
            let data = success.body
            console.log(data)
            state.commit('setStudents', data)
          }
        },
        (error) => {
          console.log(error)
        }
      )
    },
    addStudent (state, student) {
      apiService.createStudent(student,
        (success) => {
          if(success.status === 201) {
            let createdStudent = success.body
            state.commit('addStudent' , createdStudent)
          }
        },
        (error) => {
          console.log(error)
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
