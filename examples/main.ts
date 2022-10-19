import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import kittyui from "kitty-ui"
import { Button } from 'kitty-ui'
app.use(kittyui)
app.use(Button)
console.log(kittyui);

app.mount('#app') 