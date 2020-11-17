// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'
import { Popup, CreateStudent, EditStudent, DeleteStudent, Test } from './components'
import { storeOptions } from './store/StoreOption'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component(Popup.name, Popup)
Vue.component(CreateStudent.name, CreateStudent)
Vue.component(EditStudent.name, EditStudent)
Vue.component(DeleteStudent.name, DeleteStudent)
Vue.component(Test.name, Test)

const store = new Vuex.Store(storeOptions)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
