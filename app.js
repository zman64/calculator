class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.currentInput = '';
        this.operator = null;
        this.firstInput = null;
    }

    updateDisplay() {
        this.displayElement.textContent = this.currentInput;
    }

    appendNumber(number) {
        this.currentInput = this.currentInput.toString() + number.toString();
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentInput === '') return;
        if (this.firstInput !== null) {
            this.compute();
        }
        this.operator = operation;
        this.firstInput = this.currentInput;
        this.currentInput = '';
    }
    
    compute() {
        let result;
        const prev = parseFloat(this.firstInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operator) {
            case '+':
                result = current + prev;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = current * prev;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = result;
        this.operator = null;
        this.firstInput = null;
        this.updateDisplay();
    }

    clear() {
        this.currentInput = '';
        this.operator = null;
        this.firstInput = null;
        this.updateDisplay();
    }
}

// Instantiate a new calculator
const display = document.querySelector('.display__content');
const calculator = new Calculator(display);

const digits = document.querySelectorAll('.digit');
const functions = document.querySelectorAll('.functions');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
    });
});

document.querySelectorAll('.functions').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

document.querySelector('.clear').addEventListener('click', () => {
    calculator.clear();
})
// add(...arr) {
//         return arr.reduce((total, currentItem) => {
//             return total + currentItem;
//         }, 0)
//     }

//     subtract(...arr) {
//         return arr.reduce((total, currentItem) => {
//             return total - currentItem;
//         })
//     }

//     multiply(...arr) {
//         return arr.reduce((total, currentItem) => {
//             return total * currentItem
//         }, 0)
//     }

//     divide(...arr) {
//         return arr.reduce((total, currentItem) => {
//             return total / currentItem
//         });
//     }
