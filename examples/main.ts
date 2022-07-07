import {createApp} from 'vue'
import App from './app.vue'
//import 'kitty-ui/es/style.css';
const app = createApp(App)
import {Button} from 'kitty-ui'
app.use(Button)
app.mount('#app') 