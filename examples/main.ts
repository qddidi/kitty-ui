import { createApp } from 'vue'
import App from './app.vue'
//import 'kitty-ui/es/style.css';
const app = createApp(App)
import { Icon } from 'kitty-ui'
app.use(Icon)
app.mount('#app') 