import Calculator from "./calculator.js";
// Instantiate a new calculator
const calculator = new Calculator();

// In your main script file, add event listeners to the buttons and update the display

const numberButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.functions');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const display = document.querySelector('.display__content');

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

