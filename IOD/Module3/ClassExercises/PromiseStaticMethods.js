let promise1 = new Promise((resolve,reject) => {
    resolve(true);
});

let promise2 = new Promise((resolve, reject) => {
    reject(false);
})

let promise3 = new Promise((resolve, reject) => {


//promise all rejects if any of the promise has negative outcome
Promise.all([promise1, promise2]).then((outcomes)=> {
    console.log("Promise all");
    console.log(outcomes);
})
.catch((result) => {
    console.log("promise all");
    console.log(result);
})


Promise.allSettled([promise1, promise2])
.then((outcomes) => {
    console.log("promise all settled");
    console.log(outcomes);
})
.catch((result) => {
    console.log("promise all settled");
    console.log(result);
});

Promise.race([promise3, promise4])
.then((outcomes)=> {
    console.log("promise race")
    console.log(outcomes);
})
.catch((result) => {
    console.log("promise all")

})
