/*Use the following variables to understand how JavaScript stores objects by reference.

a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports];   //task (d)

moreSports.push("Rugby");
moreSports.unshift("Basketball");

console.log(teamSports);//remains the same when printed
console.log(moreSports);//added basketball and rugby)

//b)Create a new dog2 variable equal to dog1 and give it a new value

let dog1 = {name: "Bingo"};
let dog2 = dog1;
dog1.name = "Spot";
console.log(dog2.name); //answer should be Spot

//c)Create a new cat2 variable equal to cat1 and change its name property
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1};   //task (d)          
cat2.name = "Jabba";    // Modify the copy

console.log(cat1.name); // Fluffy
console.log(cat2.name); // Jabba


/*d)Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?

a) No and Yes change. I used the spread operator [...] to create a new array(moreSports). 
It only modified the teamSports 
b) Yes. Because I modified the name inside th object
c) Yes. Changing cat1.name also changes cat2.name. cat2 points to the same object*/

/*Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

