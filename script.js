const firstNumber = parseFloat(prompt("Enter the First Number"));
const operators = prompt("Enter the Operators +,-,/,*?");
const secondNumber = parseFloat(prompt("Enter the Second Number"));
let results = 0;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("what you typed in  is not a Number. refresh the page and try again");
} else {
  if (operators == "*") {
    results = firstNumber * secondNumber;
  } else if (operators == "-") {
    results = firstNumber - secondNumber;
  } else if (operators == "+") {
    results = firstNumber + secondNumber;
  } else if (operators == "/") {
    results = firstNumber / secondNumber;
  }
  alert(firstNumber + operators + secondNumber + "=" + results)
}

console.log(results);