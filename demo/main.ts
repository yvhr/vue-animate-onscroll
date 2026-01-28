import { createApp } from 'vue'
import VueAnimateOnScroll from '../src/index'
import App from './App.vue'

const app = createApp(App)
app.use(VueAnimateOnScroll)
app.mount('#app')
