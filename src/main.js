import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash'
import actions from '../src/shared/actions'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

let instance = null
function render(props = {}) {
  const { container } = props
  if (!_.isEmpty(props)) {
    // 注入监听函数
    actions.setActions(props)
  }

  instance = new Vue({
    router,
    store: store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#root') : '#root')
  // 将是否独立运行注入vuex
  store.dispatch('qiankun/changeIsIndependent', !window.__POWERED_BY_QIANKUN__)
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('bootstrap')
}
export async function mount(props) {
  console.log('mount')
  render(props)
}
export async function unmount() {
  console.log('unmount')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
