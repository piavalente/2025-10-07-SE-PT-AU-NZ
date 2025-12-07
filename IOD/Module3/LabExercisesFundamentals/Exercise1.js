//What are the results of these expressions? (answer first, then use console.log() to check)

//My initial answers:
"" + 1 + 0              // answer is 10 because + triggers concatenation so 1+0 becomes 10
"" - 1 + 0              // answer is -1 because this becomes (0-1)+0
true + false            // false
!true                   // false
6 / "3"                 // 2
"2" * "3"               // 6
4 + 5 + "px"            // 9px
"$" + 4 + 5             //$45 $ is a string so both 4 and 5 will be a string
"4" - 2                 //42 because 4 is a string then concatenates with 2
"4px" - 2               //4px - 2 because 4px is a string
" -9 " + 5              // -95 because -9 is a string the concatenates with 5
" -9 " - 5              // Nan?
null + 1                // 1 beacause null has no value. null is 0
undefined + 1           // Nan because no value has been assigned
undefined == null       // true
undefined === null      // true because strict equality
" \t \n" - 2            // i don't get this???


//Correct answers:
console.log("" + 1 + 0 );
console.log("" - 1 + 0 );
console.log(true + false);  // asking for boolean value 1
console.log(!true );        // boolean value - 2
console.log(6 / "3"  );
console.log("2" * "3"  );
console.log(4 + 5 + "px");   
console.log("$" + 4 + 5 );
console.log("4" - 2);       // answer is 2 - * / converts strings to numbers
console.log("4px" - 2);     // answer is NaN. 4px cant be converted to a number
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null); 
console.log(undefined === null); //false because it is STRICTLY not equal
console.log(" \t \n" - 2);       //answer is -2. \t is tab and \n is new line