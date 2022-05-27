const digit1 = document.querySelector('.digit-1');
const display = document.querySelector('.display__content');


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

digit1.addEventListener('click', function(e){
    console.log(e.target.value);
    display.textContent += e.target.value
})