import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from 'vt-loading'
import Confirm from 'vt-confirm'
import Alert from 'vt-alert'
import Field from 'vt-field'
import Inputs from 'vt-input'
import Validator from 'vt-validator'
import Upload from 'vt-upload'
import { Tables, Column } from 'vt-table'
import { Selects, Options } from 'vt-select'
import { Dropdown, DropdownMenu, DropdownItem } from 'vt-dropdown'
import { Menus, Submenu, Item } from 'vt-menu'
import Button from 'vt-button'
import Radio from 'vt-radio'
import Checkbox from 'vt-checkbox'
import Pagination from 'vt-pagination'
import dialog from 'components/dialog'
import http from 'vue-http'
import store from './store'

Vue.component('Alert', Alert)
Vue.component('Loading', Loading)
Vue.component('Confirm', Confirm)
Vue.component('Field', Field)
Vue.component('Tables', Tables)
Vue.component('Column', Column)
Vue.component('Inputs', Inputs)
Vue.component('Selects', Selects)
Vue.component('Options', Options)
Vue.component('Validator', Validator)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)
Vue.component('Upload', Upload)

Vue.component('Menus', Menus)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', Item)

Vue.component('Buttons', Button)
Vue.component('Dialog', dialog)
Vue.component('Checkbox', Checkbox)
Vue.component('Radio', Radio)
Vue.component('Pagination', Pagination)

Vue.use(http, {
  headers: {
    'Content-Type': 'application/json'
  },
  root: process.env.API_ROOT,
  timeout: 150000,
  loading: bool => {
    Vue.loading(bool)
  },
  error: text => {
    Vue.loading(false)
    Vue.alert({ title: '错误', text })
  }
})

export default new Vue({
  store,
  router,
  ...App
}).$mount('#app')

// 处理跨组件通信
Vue.prototype.$event = new Vue()
