import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'


const app = createApp(App)

Axios.defaults.baseURL = 'https://www.escook.cn'
/* 挂载全局对象 start */
app.config.globalProperties.$http = Axios
/* 挂载全局对象 end */
app.use(ElementPlus)
app.mount('#app')