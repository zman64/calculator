// calculator.test.js
import Calculator from "./calculator.js";  // Assuming calculator.js is the file that contains our Calculator class

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('appendNumber appends a number to the current input', () => {
    calculator.appendNumber(7);
    expect(calculator.currentOperand).toBe('7');
  });

  test('chooseOperation sets the operation', () => {
    calculator.appendNumber(5);
    calculator.chooseOperation('+');
    expect(calculator.operation).toBe('+');
  });

  test('compute performs the operation', () => {
    calculator.appendNumber(5);
    calculator.chooseOperation('+');
    calculator.appendNumber(2);
    calculator.calculate();
    expect(calculator.currentOperand).toBe(7);
  });

  test('clear resets all values', () => {
    calculator.appendNumber(5);
    calculator.chooseOperation('+');
    calculator.appendNumber(2);
    calculator.clear();
    expect(calculator.currentOperand).toBe('');
    expect(calculator.operation).toBe(null);
    expect(calculator.previousOperand).toBe('');
  });
});
