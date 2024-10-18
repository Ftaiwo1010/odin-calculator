let firstNumber  = '';
let secondNumber = '';
let operator = '';
let displayValue = '';
let result = '';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        return 'LOL';
    } else {
        a / b;
    }
}



function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}


function updateDisplay(value) {
    display.textContent = value;
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
       
        const number = button.dataset.number;
        const op = button.dataset.operator;

        if (number) {
            if (operator) {
                secondNumber += number;
                displayValue = secondNumber;
            } else {
                firstNumber += number;    
                displayValue = firstNumber;
            }
    
            updateDisplay(displayValue);
         } 


         if (op) {
            operator = op;
            displayValue = '';
        }
    

       if (button.id === 'equal') {
          result = operate(operator, firstNumber, secondNumber);
          updateDisplay(result);

          firstNumber = result.toString();
          secondNumber = '';
          operator = '';
       }     


       if (button.id === 'clear') {
          firstNumber = '';
          secondNumber = '';
          operator = '';
          displayValue = '';
          updateDisplay(''); 
       }
        
    });
});




