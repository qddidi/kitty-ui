import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import libcss from "vite-plugin-libcss"
export default defineConfig(
    {
        build: {
            target:'modules',
            outDir:"es",
            //压缩
            minify:false,
            rollupOptions: {
                //external:['node_modules'],
                input:['src/index.ts'],
                output:[
                    {
                        format:'es',
                        //不用打包成.mjs
                        entryFileNames:'[name].js',
                        //让打包目录和我们目录对应
                        //preserveModules:false,
                        //配置打包根目录
                        preserveModulesRoot:'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats:['es']
            }
        },
        plugins:[
            vue(),
            dts(),
            libcss()
            
        ]
    }
)