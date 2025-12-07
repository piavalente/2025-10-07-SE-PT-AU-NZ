/* Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.*/


/* a)The function should remove all dashes, and uppercase the first letter of each word after a
dash. */

function camelCase(cssProp) {
    let words = cssProp.split('-'); //breaks the string and coverts it into array
    let result = words[0];  //isolate the first words: margin, background, display
    for (let i = 1; i < words.length; i++) {
        let capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
        result = result + capitalizedWord;
    }
    
    return result;
}

console.log(camelCase('margin-left'));        
console.log(camelCase('background-image'));   
console.log(camelCase('display')); 

//b) Create variants of the camelCase function that use different types of for loops, and
//for..of
const style = ['margin-left', 'background-image', 'display'];
    for (const style1 of style) {
        console.log(style1)
    }

//for..in
const style2 = {margin: "margin-left", image: "background-image", display: "display"};
    for (const key in style2) {
        console.log (key + ":" + style2[key]);
    }

//c) With or without the conditional operator

//with conditional operator
function camelCase2(cssProp) {
    let words = cssPropProp.split('-');
    let result = words[0]
    
    for (let i = 0; 1 < words.length; i++) {
        result +=(i === 0) 
            ? words[i]  //returned if true
            : words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
}


          
