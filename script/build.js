const exec = require('child_process').exec
//打包@kitty-ui/components包
exec('cd packages/components && pnpm run build && mversion patch', function (error) {
    if (error) {
        console.error('error: ' + error);
        return;
    }

    console.log('success:','打包完成kitty-ui...')
   

});

 //打包@kitty-ui/utils包
 exec('cd packages/utils && pnpm run build && mversion patch', function (error) {
    if (error) {
        console.error('error: ' + error);
        return;
    }

    console.log('success','打包完成@components/utils...')

});
