import * as components from './src/index'
export * from './src/index'
import { App } from 'vue'
export default {
    install: (app: App) => {
        for (const comkey in components) {
            app.use((components as any)[comkey])
            //  app.component((components as any)[comkey].name, (components as any)[comkey])
        }
    }
}
