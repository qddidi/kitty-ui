import cpy from 'cpy'
import { resolve } from 'path'
import { promises as fs } from "fs"
import less from "less"
import glob from "fast-glob"
const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../lib')
//es文件目录
const targetEs = resolve(__dirname, '../es')



const buildLess = async () => {
    //直接将less文件复制到打包后目录
    await cpy(`${sourceDir}/**/*.less`, targetLib)
    await cpy(`${sourceDir}/**/*.less`, targetEs)

    //获取打包后.less文件目录(lib和es一样)
    const lessFils = await glob("**/*.less", { cwd: targetLib, onlyFiles: true })

    //遍历含有less的目录
    for (let path in lessFils) {
        const lessPathLib = `${targetLib}/${lessFils[path]}`
        const lessPathEs = `${targetEs}/${lessFils[path]}`

        //获取less文件字符串
        const lessCode = await fs.readFile(lessPathLib, 'utf-8')
        //将less解析成css
        const code = await less.render(lessCode)

        //拿到.css后缀path
        const cssPathLib = lessPathLib.replace('.less', '.css')
        const cssPathEs = lessPathEs.replace('.less', '.css')

        //将css写入对应目录
        await fs.writeFile(cssPathLib, code.css)
        await fs.writeFile(cssPathEs, code.css)
    }



}
buildLess()
