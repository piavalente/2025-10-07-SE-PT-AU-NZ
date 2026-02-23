function isOdd(number) {
  return number % 2;
}
// returns true if number is odd, false otherwise

function getListOfOddNumbers(number) {
  if (number % 2) console.log("Number is odd");
  else console.log("Number is even");
}

getListOfOddNumbers(3);
getListOfOddNumbers(5);
getListOfOddNumbers(2);
