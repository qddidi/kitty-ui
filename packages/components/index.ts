import * as components from './src/index'
import { withInstall } from '@kitty-ui/utils';
export * from './src/index'
export default {
    install: () => {
        for (const comkey in components) {
            withInstall((components as any)[comkey])
        }

    }
}
