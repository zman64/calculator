// const digit1 = document.querySelector('.digit-1');
// const digit2 = document.querySelector('.digit-2');
// const digit3 = document.querySelector('.digit-3');
// const digit4 = document.querySelector('.digit-4');
// const digit5 = document.querySelector('.digit-5');
// const digit6 = document.querySelector('.digit-6');
// const digit7 = document.querySelector('.digit-7');
// const digit8 = document.querySelector('.digit-8');
// const digit9 = document.querySelector('.digit-9');
// const digit0 = document.querySelector('.digit-0');

const digits = document.querySelectorAll('.digit');
const functions = document.querySelectorAll('.functions');
const display = document.querySelector('.display__content');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let input1 = 0;
let input2 = 0;
let operateString;
let calculatedValue = 0;
display.textContent = 0;
let isFunctionClicked = false;
let hitTwice = false;
let isEqualsClicked = false;

digits.forEach(digit => {
    digit.addEventListener('click', function (e) {
        if (isFunctionClicked) {
            // display.textContent = null;
            input2 += e.target.value
            input2 = input2.replace(/^0+/, '');
            display.textContent = input2;
            // isFunctionClicked = false;
            hitTwice = true;
        }  else {
            // if(isEqualsClicked) display.te
            console.log(input1)
            input1 += e.target.value;
            input1 = input1.replace(/^0+/, '');
            display.textContent = input1;
            isFunctionClicked = false;
        }
    })
})

functions.forEach(operator => {
    operator.addEventListener('click', function (e) {
        isFunctionClicked = true;
        // display.textContent = input1;
        let symbol = e.target.value;
        if (symbol === '+') {
            operateString = add;

        } else if (symbol === '-') {
            operateString = 'subtract';
        }

        if (hitTwice) {
            // isFunctionClicked = false;
            input2 = parseInt(input2);
            input1 = parseInt(input1);
            console.log(input1);
            console.log(input2);
            calculatedValue = operate(operateString, input1, input2);
            display.textContent = calculatedValue;
            input1 = calculatedValue;
            input2 = 0;

        }
    })
})

equals.addEventListener('click', function (e) {
    hitTwice = false;
    if (isFunctionClicked) {
        input2 = parseInt(input2);
        input1 = parseInt(input1);
        calculatedValue = operate(operateString, input1, input2);
        isFunctionClicked = false;
        input1 = parseInt(calculatedValue);
        input2 = 0;
        display.textContent = calculatedValue;
        calculatedValue = 0;
        return;
    } else {
        input1 = 0;
        input2 = 0;
        isFunctionClicked = false;
    }
    input1 = 0;


})

clear.addEventListener('click', function (e) {
    hitTwice = false;
    isFunctionClicked = false;
    display.textContent = 0;
    input1 = 0;
    input2 = 0;
})



function add(...arr) {
    return arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0)
}

function subtract(...arr) {
    return arr.reduce((total, currentItem) => {
        return total - currentItem;
    })
}

function multiply(...arr) {
    return arr.reduce((total, currentItem) => {
        return total * currentItem
    }, 0)
}

function divide(...arr) {
    return arr.reduce((total, currentItem) => {
        return total / currentItem
    });
}

function operate(operator, ...numbers) {
    // operator = \operator\
    return operator(...numbers)
}

// function popDisplay() {

// }




