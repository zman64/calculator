const digit1 = document.querySelector('.digit-1');
const digit2 = document.querySelector('.digit-2');
const digit3 = document.querySelector('.digit-3');
const digit4 = document.querySelector('.digit-4');
const digit5 = document.querySelector('.digit-5');
const digit6 = document.querySelector('.digit-6');
const digit7 = document.querySelector('.digit-7');
const digit8 = document.querySelector('.digit-8');
const digit9 = document.querySelector('.digit-9');
const digit0 = document.querySelector('.digit-0');

const digit = document.querySelectorAll('.digit')
console.log(digit)
const display = document.querySelector('.display__content');
const clear = document.querySelector('.clear');

let displayValue = 0;

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
    return operator(...numbers)
}

function popDisplay() {

}

for(let i = 0; i < 10; i++){
    `digit${i}`.addEventListener('click', function(e){
    display.textContent += e.target.value;
    displayValue += e.target.value;
    })
}

// digit1.addEventListener('click', function(e){
//     // console.log(e.target.value);
//     display.textContent += e.target.value;
//     displayValue += e.target.value;
// });

clear.addEventListener('click', function(e){
    display.textContent = '';
    displayValue = 0;
})