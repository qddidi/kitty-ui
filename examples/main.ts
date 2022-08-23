import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import kittyui from "kitty-ui"
app.use(kittyui)
app.mount('#app') 