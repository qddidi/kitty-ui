import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'


export default [{
    // 入口
    input: './index.ts',
    // 出口
    output: [
        {
            file: '../dist/kittyui/index.js',
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
{
    // 生成 根目录类型声明文件
    input: `./index.d.ts`,
    output: {
        file: `../dist/kittyui/index.d.ts`,
        format: 'es',
    },
    plugins: [typescript(), vue(), postcss(), dts()],
}
]

