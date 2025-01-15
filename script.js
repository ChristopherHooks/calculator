function add(num1, num2) {
    let result = (num1 + num2);
    if (result % 1 === 0) {
        display.value = result;
    } else {
        display.value = result.toFixed(2);
    }
}

function subtract(num1, num2) {
    let result = (num1 - num2);
    if (result % 1 === 0) {
        display.value = result;
    } else {
        display.value = result.toFixed(2);
    }
}

function divide(num1, num2) {
    let result;
    if (num2 === 0) {
        display.value = "Nice try, dingus!"
        clearAll();
    } else {
        result = (num1 / num2);
    }
    if (result % 1 === 0) {
        display.value = result;
    } else {
        display.value = result.toFixed(2);
    }
}

function multiply(num1, num2) {
    let result = (num1 * num2);
    if (result % 1 === 0) {
        display.value = result;
    } else {
        display.value = result.toFixed(2);
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '%':
            return divide(num1, num2);
            break;
        default:
        // code block
    }
}

function clearAll() {
    num1 = 0;
    num2 = 0;
    operator = null;
    display.value = '';
    hasDecimal = false;
}

let num1;
let num2;
let operator = null;
let hasDecimal = false;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const undo = document.querySelector('#undo');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator) {
            if (button.textContent === '.' && hasDecimal) return;
            if (button.textContent === '.') hasDecimal = true;
            display.value += button.textContent;
        } else {
            if (display.value === '' || display.value === num1.toString()) {
                display.value = '';
            }
            if (button.textContent === '.' && hasDecimal) return;
            if (button.textContent === '.') hasDecimal = true;
            display.value += button.textContent;
            num2 = parseFloat(display.value);
        }
    });
});


operators.forEach(button => {
    button.addEventListener('click', () => {
        if (!display.value) {
            num1 = 0;
        } else {
            num1 = parseFloat(display.value);
        }
        operator = button.textContent;
        hasDecimal = false;
    });
});

equal.addEventListener('click', () => {
    operate(num1, num2, operator);
    hasDecimal = false;
});

clear.addEventListener('click', () => {
    clearAll()
});

undo.addEventListener('click', () => {
    display.value = '';
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Numbers and decimal point
    if (!isNaN(key) || key === '.') {
        const button = Array.from(numbers).find(btn => btn.textContent === key);
        if (button) button.click();
    }

    // Operators
    if (['+', '-', '*', '/'].includes(key)) {
        let operatorKey = key === '*' ? 'x' : key === '/' ? '%' : key;
        const button = Array.from(operators).find(btn => btn.textContent === operatorKey);
        if (button) button.click();
    }

    // Enter key for "="
    if (key === 'Enter') {
        equal.click();
    }

    // Backspace for "undo"
    if (key === 'Backspace') {
        undo.click();
    }

    // Escape key for "clear"
    if (key === 'Escape') {
        clear.click();
    }
});

