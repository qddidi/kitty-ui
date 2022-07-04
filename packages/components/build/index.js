const exec = require('child_process').exec 
exec('rollup -c', function(error){
    if(error) {
        console.error('error: ' + error);
        return;
    }
 });