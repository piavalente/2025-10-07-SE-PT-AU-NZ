function TopFunction(x) {
  return function subFunction(y) {
    return x + y;
  };
}

function printName() {
  console.log("Prints a name");
}

function delayPrintLines() {
  setTimeout(() => console.log("printing..."), 2000);
}

function FunctionCaller(originalFunc) {
  console.log(`originalFunc.name ${originalFunc.name}`);
  originalFunc();
}

FunctionCaller(printName); //decorated print name
FunctionCaller(delayPrintLines);
