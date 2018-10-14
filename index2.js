const Rx = require('rxjs-compat');
Observable = Rx.Observable;
const fs = require('fs');


Rx.Observable.from("siaf/a/b/c/e/f".split('/')
  .filter(x => x !== ''))
  .scan(function(acc,curr) {return acc+'/'+curr})
  .skipWhile(x => fs.stat(x,(exists)=>
      {console.log('Directory already exists: ',exists)}
  ))
  .subscribe(x => {
    console.log('hello: ',x);   
    fs.mkdir(x, function(err) { 
        console.log('already exists');
  });
  })


// Rx.Observable.from("siaf/a/b".split('/')
//   .filter(x => x !== ''))
//   .scan(function(acc,curr) {return acc+'/'+curr})
//   .filter(x => {return fs.existsSync()})
//   .subscribe(x => {
//     console.log('hello: ',x);   
//     fs.mkdir(x, function(err) { 
//         console.log('already exists');
//   });
//   })





//    THIS DIRECTORY IS WORKING ,BUT NOT COMPLETELY RXJS
// Rx.Observable.from("tmp/a/b".split('/')
//   .filter(x => x !== ''))
//   .scan(function(acc,curr) {return acc+'/'+curr})
//   .filter(x => {return !fs.existsSync(x) })
//   .subscribe(x => {
//     fs.mkdirSync(x);
//   },
//   err => console.error(err)
//   )


// Observable.from('./saif/a/b'.split('/')
//     .filter(x => x !== '')
//     .reduce(function (a, b) {
//         b = a + '/' + b
//         a = b
//         console.log('Value A: ', a);
//         console.log('Value B: ',b); 
//         if (!fs.existsSync(a)){
//                 fs.mkdirSync(a);
//             }
//             else{
//                 console.log('directory already exists.')
//             }

//         return a;
//     }));

// Correct way of making directory
// const Rx = require('rxjs');
// const {scan, filter, map, pluck, concatAll} = require('rxjs/operators');
// const fs = require('fs');

// function checkingdirectory(path){
//     return Rx.Observable.create(subject => {
//         fs.stat(path, (err,stat) => {     
//             if(err){console.log(err);subject.next(err)}
//             else {console.log(stat); subject.next(stat)}
//             subject.complete();
//         })
//     })
// }


// function createdir(path){
//     return Rx.Observable.create(subject => {
//         fs.mkdir(path,err => {
//             if(err){console.log('path erro ',err); subject.error(err) }
//             else{console.log('path correct: ',path); subject.next()}
//             subject.complete();
//         })
//     })
// }

// function makeRecursive(path){
//     return Rx.from(path.split('/')).pipe(
//         scan(function(acc,curr) { return acc+'/'+curr}),
//         filter(x => x !== ''),
//         map(checkingdirectory),
//         concatAll(),
//         filter(r => r.code === 'ENOENT'),
//         pluck('path'),
//         map(createdir),
//         concatAll()
//     )
// }

// makeRecursive('saif/a').subscribe(
//     console.log('Directory Created')
// );

