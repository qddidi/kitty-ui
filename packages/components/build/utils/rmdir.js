let fs = require('fs')
const path = require('path')
module.exports = function _deleteDir(url) {
    var files = [];
    if (fs.existsSync(url)) {
        //判断给定的路径是否存在
        files = fs.readdirSync(url); //返回文件和子目录的数组
        files.forEach(function (file, index) {
            var curPath = path.join(url, file);
            if (fs.statSync(curPath).isDirectory()) {
                //同步读取文件夹文件，如果是文件夹，则函数回调
                _deleteDir(curPath);
            } else {
                fs.unlinkSync(curPath); //是指定文件，则删除
            }
        });
        //fs.rmdirSync(url); //清除文件夹
        console.log('success','清除目录', url);
    } else {
        //没有目录，新建目录
        
        fs.mkdirSync(url)
        console.log('success','新建目录', url);
        
    }
}
