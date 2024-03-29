import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // 全局样式
import '@/assets/icons' // icon
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 开发环境支持mock
// process.env.NODE_ENV === 'development' && require('@/mock/index.js')

// 声明一个loading对象
Vue.prototype.openLoading = function() {
  const loading = this.$loading({
    lock: true, // 是否锁屏
    text: '正在加载 ...', // 加载动画的文字
    spinner: 'el-icon-loading', // 引入的loading图标
    background: 'rgba(0, 0, 0, 0.8)', // 背景颜色
    target: '.sub-main', // 需要遮罩的区域
    body: true,
    customClass: 'mask' // 遮罩层新增类名
  })
  setTimeout(function () { // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
    loading.close() // 关闭遮罩层
  }, 5000)
  return loading
}
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
    // element-ui
    el.children[0].focus()
    // 元素有变化，如show或者父元素变化可以加延时或判断
    setTimeout(_ => {
      el.children[0].focus()
    })
  }
})
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
