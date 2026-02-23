let string1 = "apple";
let string2 = "banana";

if (string1 > string2) console.log("string1 is greater");

//lowercase have bigger value//
console.log("A".codePointAt(0)); //65
console.log("b".codePointAt(0));
console.log("C".codePointAt(0));

for (
  let k = 97;
  k <= 133;
  k++ //each iteration will keep on increasing until it reaches 91
)
  console.log(String.fromCodePoint(k));
