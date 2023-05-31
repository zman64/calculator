export default class Calculator {
    constructor() {
      this.clear();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = null;
    }
  
    appendNumber(number) {
      if (this.currentOperand === 'Error: Division by zero' ) {
          this.clear();
      }
      this.currentOperand = `${this.currentOperand}${number}`;
    }
  
    chooseOperation(operation) {
      // If there's an error message displayed, clear it
      if (this.currentOperand === 'Error: Division by zero') {
          this.clear();
      }
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.calculate();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  
    divide(num1, num2) {
      if (num2 == 0) {
          return 'Error: Division by zero';
      } else {
          return num1 / num2;
      }
    }
  
    calculate() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = this.divide(prev, current);
          break;
        default:
          return;
      }
      // Check if division by zero occured
      if (computation === 'Error: Division by zero') {
          this.clear();
          this.currentOperand = computation;
      } else {
          this.currentOperand = computation;
          this.operation = null;
          this.previousOperand = '';
      }
    }
  
    getDisplayNumber(number) {
      return number.toString();
    }
  }

  //module.exports = Calculator;