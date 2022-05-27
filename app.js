function add(...arr) {
    return arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0)
}

function subtract(...arr) {
    return arr.reduce((total, currentItem) => {
        return total - currentItem;
    }, 0)
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