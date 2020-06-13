import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Components
import Home from './components/Home'
import Writes from './components/Writes'
import Reads from './components/Reads'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue);

const routes = [
  { path: '', component: Home },
  { path: '/writes', component: Writes },
  { path: '/reads', component: Reads }
]
const router = new VueRouter(
  {
    mode: 'history',
    routes: routes
  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
