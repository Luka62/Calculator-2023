let firstNumber = null;
let operator = null;
let secondNumber = null;

function inputNumber(number) {
    const result = document.getElementById('result');
    if (result.value === '0' || operator !== null) {
        result.value = number;
    } else {
        result.value += number;
    }
    if (operator === null) {
        firstNumber = Number(result.value);
    } else {
        secondNumber = Number(result.value);
    }
}

function setOperator(op) {
    const result = document.getElementById('result');
    if (operator !== null && secondNumber !== null) {
        calculate();
    }
    operator = op;
    result.value = '0';
}

function calculate() {
    const result = document.getElementById('result');
    switch (operator) {
        case '+':
      result.value = firstNumber + secondNumber;
      break;
    case '-':
      result.value = firstNumber - secondNumber;
      break;
    case '*':
      result.value = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber === 0) {
        result.value = 'Error: Cannot divide by zero';
      } else {
        result.value = firstNumber / secondNumber;
      }
      break;
    default:
      result.value = 'Error: Invalid operator';
      break;
    }
    firstNumber = Number(result.value);
    operator = null;
    secondNumber = null;
}

function clearInput() {
    const result = document.getElementById('result');
    result.value = '0';
    firstNumber = null;
    operator = null;
    secondNumber = null;
}