let first = "";
let second = "";
let operator = "";

function calculateResult() {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);
  let result = 0;

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  return result.toString();
}

function press(value) {
  //looked up how this was done
  const display = document.getElementById("inputBox");

  // C
  if (value === "C") {
    first = "";
    second = "";
    operator = "";
    display.value = "";
    return;
  }

  // Operators
  if ("+-*/".includes(value)) {
    if (!first) return;
    if (second) first = calculateResult();
    operator = value;
    second = "";
    display.value = first + operator;
    return;
  }

  // Equals
  if (value === "=" && first && operator && second) {
    first = calculateResult();
    operator = "";
    second = "";
    display.value = first;
    return;
  }

  // Numbers
  if (!operator) {
    first += value;
    display.value = first;
  } else {
    second += value;
    display.value = first + operator + second;
  }
}

// DELETE - not operational

// PERCENTAGE - not operational

// DECIMAL - not operational
