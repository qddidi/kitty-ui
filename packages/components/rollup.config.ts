import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
//import { dirname, resolve } from 'path'
import fs from 'fs'

const files = fs.readdirSync(__dirname)

const comName = files.filter((item) => {
    return (item.indexOf('.') == -1 && item != 'node_modules'&&item != 'build')
})
const buildConfig = comName.map(name => {
    return {
        // 生成 .d.ts 类型声明文件
        input: `./${name}/src/types.ts`,
        output: {
            file: `../kittyui/dist/types/${name}/index.d.ts`,
            format: 'es',
        },
        plugins: [dts()],
    }
});
export default [{
    // 入口
    input: './index.ts',
    // 出口
    output: [
        {
            file: '../../dist/kittui/index.js',
            // 配置打包模块化的方式 es:ESM  cjs:CommonJS
            format: 'es'
        }
    ],
    // 插件
    plugins: [
        typescript(),
        vue(),
        postcss()
    ]
},
...buildConfig
]

