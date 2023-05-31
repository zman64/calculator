// calculator.test.js
const Calculator = require('./app');  // Assuming calculator.js is the file that contains our Calculator class

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('appendNumber appends a number to the current input', () => {
    calculator.appendNumber(7);
    expect(calculator.currentInput).toBe('7');
  });

  test('chooseOperation sets the operation', () => {
    calculator.chooseOperation('+');
    expect(calculator.operator).toBe('+');
  });

  test('compute performs the operation', () => {
    calculator.appendNumber(5);
    calculator.chooseOperation('+');
    calculator.appendNumber(2);
    calculator.compute();
    expect(calculator.currentInput).toBe(7);
  });

  test('clear resets all values', () => {
    calculator.appendNumber(5);
    calculator.chooseOperation('+');
    calculator.appendNumber(2);
    calculator.clear();
    expect(calculator.currentInput).toBe('');
    expect(calculator.operator).toBe(null);
    expect(calculator.firstInput).toBe(null);
  });
});
