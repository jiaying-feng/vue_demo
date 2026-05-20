import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// 在main.ts中注册pinia
const pinia = createPinia()
// 拆解 createApp(App).mount('#app') // 链式
const app = createApp(App) // 创建根组件
app.use(pinia)
// 挂载样式
app.mount('#app')