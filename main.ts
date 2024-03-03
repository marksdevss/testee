import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import App2 from './App2.vue'

const app = createApp(App)

const app2 = createApp(App2)

app.use(router)

app.mount('#app')

app.mount('#app2')
