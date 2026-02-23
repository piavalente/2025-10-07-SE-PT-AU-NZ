const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
//user.sayHi() // called directly, works! Hi, John

setTimeout(user.sayHi, 2000); // passed as reference, fails! Hi, undefined. do solution 1 here.
