const exec = require('child_process').exec
const resolve = require('path').resolve
const rmdir = require('./utils/rmdir')
const fs = require('fs')
//没有dist文件夹则创建
if (!fs.existsSync(resolve(__dirname, '../../dist'))) {
    fs.mkdirSync(resolve(__dirname, '../../dist'))
    console.log('success','dist文件创建成功')
}
//清除原有kittyui下的文件
rmdir(resolve(__dirname, '../../dist/kittyui'))

//将组件components的package.json复制到需要发布的文件下
fs.readFile(resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    let tempkg = JSON.parse(data)
    tempkg.name = 'kitty-ui'
    let writepkg = JSON.stringify(tempkg)
    fs.writeFileSync(resolve(__dirname, '../../dist/kittyui/package.json'), writepkg);
    console.log('success:', 'package.json复制成功')
})

exec('rollup -c', function (error) {
    if (error) {
        console.error('error: ' + error);
        return;
    }
    console.log('success:', 'kitty-ui打包成功')
});