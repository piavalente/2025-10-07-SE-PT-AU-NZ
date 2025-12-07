/*Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

function ucFirstLetters(city) {
    let capitalized = city
        .split(" ")                //become ('los', 'angeles')
        .map(word => word[0].toUpperCase() + word.slice(1)) //word[0] is the fist letter of the word
        .join(" ");
    return "Welcome to " + capitalized + "!"
}

console.log(ucFirstLetters("los angeles")) //Los Angeles
console.log(ucFirstLetters("san francisco")) //San Francisco

//Different kinds of string
console.log("los angeles".length);  //11
console.log("san francisco golden gate bridge".length); //32
console.log("san francisco golden gate bridge".indexOf("bridge"));  //26
console.log("los angeles".substring(4)); //angeles
console.log("san francisco".toUpperCase()); //SAN FRANCISCO
console.log("san francisco" + " golden state warriors");    //san francisco golden state warriors

console.log("los angeles".startsWith('los'));   //true
console.log("los angeles".endsWith('angels'));  //false
console.log("san francisco golden gate bridge".split(' ')); //'san' 'francisco' 'golden'
console.log("san francisco".slice(4,10));   //franci
console.log("san francisco golden gate bridge".replace('bridge','park'))    //san francisco golden gate park
console.log("los        angeles     ".trim());


