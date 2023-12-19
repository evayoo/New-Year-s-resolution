import { createPinia } from 'pinia'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')


// refactor, or put the example 
// before the mount, say 
// define route components.. 


