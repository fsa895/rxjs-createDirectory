let fs = require('fs');

let address = '/tmp/a/b';
let splitting = address.split('/');
console.log(splitting);

var store = '';

for (let counter=1;  counter<splitting.length; counter +=1 ){
    store = store +'/'+ splitting[counter];
    console.log(store);
    
    if (!fs.existsSync(store)){
        fs.mkdirSync(store);
    }
    else{
        console.log('directory already exists.')
    }

}




// var dir = './tmp/a';

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }
// else{
//     console.log('directory already exists.')
// }