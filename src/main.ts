import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { Button, Layout, Icon, Table } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Table)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
