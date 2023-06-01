import Calculator from "./calculator.js";
// Instantiate a new calculator
const calculator = new Calculator();

// In your main script file, add event listeners to the buttons and update the display

const numberButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.functions');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const display = document.querySelector('.display__content');
const backspaceButton = document.querySelector('.percent');

backspaceButton.addEventListener('click', button => {
  calculator.backspace();
  display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
});

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    display.innerText = calculator.getDisplayNumber(calculator.previousOperand);
  });
});

equalsButton.addEventListener('click', button => {
  calculator.calculate();
  display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
});

clearButton.addEventListener('click', button => {
  calculator.clear();
  display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
});

//console.log(calculator);

// Keyboard support
window.addEventListener('keydown', function(e) {
  if (!isNaN(e.key)) {
    // The key is a number
    calculator.appendNumber(e.key);
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    // The key is an operation
    calculator.chooseOperation(e.key);
    display.innerText = calculator.getDisplayNumber(calculator.previousOperand);
  } else if (e.key === "Enter" || e.key === "=") {
    // The key is enter or equal, so perform the calculation
    e.preventDefault(); // To prevent form submission if the calculator is in a form
    calculator.calculate();
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  } else if (e.key === "Delete") {
    // The key is backspace or delete, so clear the current input
    calculator.clear();
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  } else if (e.key === ".") {
    // The key is a decimal point
    calculator.appendNumber(e.key);
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  } else if (e.key === "Escape") {
    // The key is an escape
    calculator.clear()
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand)
  } else if (e.key === "Backspace") {
    calculator.backspace();
    display.innerText = calculator.getDisplayNumber(calculator.currentOperand);
  }
});
