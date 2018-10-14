var Bacon = require("baconjs");
Bacon

.interval(1000)
.map(()=>new Date())
.interval(1000)
.take(5)
.onValue((currentDate)=>console.log(currentDate));