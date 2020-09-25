import Vue from 'vue'
import App from './App.vue'
import ViewerSync from './plugins/ViewerSync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ViewerSync, {
  el: '#viewer'
})
Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')