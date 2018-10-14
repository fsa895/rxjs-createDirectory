var Rx = require('@reactivex/rxjs');
Observable = Rx.Observable;

var myArray = [1,2,3];
var intervalBetweenItens = 100;

// Observable.of(intervalBetweenItens ,myArray);

Observable.from(myArray).map(x => {return x})
.subscribe(x => console.log(x));