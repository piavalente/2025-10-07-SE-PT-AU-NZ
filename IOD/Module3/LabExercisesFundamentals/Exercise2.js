/*Which of the below are not giving the right answer? Why are they not correct? How can we
fix them?*/
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
//My initial answers:
let addition = three + four         //5
let multiplication = three * four   //12
let division = three / four         //0.75
let subtraction = three - four      //-1
let lessThan1 = three < four        //true
let lessThan2 = thirty < four       //false


//Correct answers:
console.log(addition)               //Addition cannot be made as + turns numbers into strings. answer is 34
console.log(multiplication) 
console.log(division)       
console.log(subtraction)   
console.log(lessThan1)      
console.log(lessThan2)              //false if it is a number
                                    //true if it is a string
                                    //"30" < "4" is a string. lexicographical is applied. "3" < "4"

    
