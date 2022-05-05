import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import global from './global.vue'

const app = createApp(App)

app.use(router)
.use(ElementPlus)
.mount('#app')

app.config.globalProperties.axios= axios //全局配置axios
app.config.globalProperties.global = global

