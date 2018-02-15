// Synchronous behavior 
 /* console.log("a");
console.log("b");
console.log("c"); */

// Asycnhronous behavior 
// setTimeout{function, delay} //run the function after the delay time

 /* setTimeout(() => console.log("a"), 5000);
console.log('here');
setTimeout(() => console.log('now'), 1000);
setTimeout(() => console.log('now again'), 500); */

//async behavior ////pyramid of doom 
 /* setTimeout(() => {
    console.log('a');
    setTimeout(() => {
        console.log('now');
        setTimeout(() => {
            console.log('now again');
        }, 500);
    }, 1000);
}, 5000); */

// asych behavior with promises

function delay(ms) {
   return new Promise((resolve, reject)=> {
       setTimeout(() => resolve(),ms);
   });
}
const printA = () => {
    console.log('a');
    return delay (1000)
}
const printNow = () => {
    console.log('now');
    return delay (1000)
}
const printAgain = () => console.log('now again');

delay(5000)
.then (printA)
.then (printNow)
.then(printAgain);



/*
   .then(() => {
       console.log('a'); 
       return delay(1000);
    })
    .then(() => {
        console.log('now') 
        return delay(500);
    })
    .then (() => console.log('now again'));
    */