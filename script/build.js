const exec = require('child_process').exec 
console.log('进入components...')
exec('cd packages/components && npm run build', function(error){
    if(error) {
        console.error('error: ' + error);
        return;
    }
    
    console.log('打包完成components...')
   
});