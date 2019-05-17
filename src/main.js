// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置MintUI
import MintUI from 'mint-ui'
// 定义moment全局日期过滤器
import Moment from 'moment'
// 引入css
import 'mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/global.css'

// 引入自己的ul和li组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'

// 配置axios 调接口
import Axios from 'axios'
// 配置公共url
Axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$axios = Axios

// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '玩命加载中...'
  })
  return config
})
// 配置请求拦截器，关闭loading图标
Axios.interceptors.response.use(function (response) {
  // response.config 类似上面 config
  MintUI.Indicator.close()
  return response
})

// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)

// 设置中文显示
Moment.locale('zh-cn')
// 过滤器
// Vue.filter('converTime', function (data, formatStr) {
//   return Moment(data).format(formatStr)
// })

// 相对时间
Vue.filter('converTime', function (data) {
  return Moment(data).fromNow()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
