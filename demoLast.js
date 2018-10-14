//import {last} from 'rxjs-compat/operators';
const Rx = require('rxjs-compat');
const ts = require('rxjs-compat/operators/last.js');

Observable = Rx.Observable;

const observable = Observable.from([1,2,3,4,5])
    .pipe(ts.last())
    .subscribe(value => console.log(value))