const Rx = require('rxjs');
const {scan, filter, map, pluck, concatAll} = require('rxjs/operators');
const fs = require('fs');

function checkingdirectory(path){
    return Rx.Observable.create(subject => {
        fs.stat(path, (err,stat) => {     
            if(err){console.log(err);subject.next(err)}
            else {console.log(stat); subject.next(stat)}
            subject.complete();
        })
    })
}


function createdir(path){
    return Rx.Observable.create(subject => {
        fs.mkdir(path,err => {
            if(err){console.log('path erro ',err); subject.error(err) }
            else{console.log('path correct: ',path); subject.next()}
            subject.complete();
        })
    })
}

function makeRecursive(path){
    return Rx.from(path.split('/')).pipe(
        scan(function(acc,curr) { return acc+'/'+curr}),
        filter(x => x !== ''),
        map(checkingdirectory),
        concatAll(),
        filter(r => r.code === 'ENOENT'),
        pluck('path'),
        map(createdir),
        concatAll()
    )
}

makeRecursive('saif/a').subscribe(
    console.log('Directory Created')
);