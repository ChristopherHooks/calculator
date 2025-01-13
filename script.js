function add(num1, num2) {
    operator = '+'
    return num1 + num2;
}

function subtract(num1, num2) {
    operator = '-'
    return num1 - num2;
}

function divide(num1, num2) {
    operator = '%'
    return num1 / num2;
}

function multiply(num1, num2) {
    operator = 'x'
    return num1 * num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            display.value = (num1 + num2);
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

let num1;
let num2;
let operator = null;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator) {
            display.value += button.textContent;
        } else {
            display.value = '';
            display.value += button.textContent;
            num2 = display.value;
        }

        console.log(button);
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        num1 = display.value;
        operator = button.textContent;
        console.log(num1);
        console.log(operator);
    });
});

equal.addEventListener('click', () => {
    operate(num1, num2, operator);
});

clear.addEventListener('click', () => {
    display.value = '';
    operator = null;
});