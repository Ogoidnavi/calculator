function appendNumber(num)
{

}

function handleKeyboardInput()
{
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key == '=' || e.key == 'Enter') evaluate();
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }

function add(a, b) {
    return a + b
}
  
function subtract(a, b) {
    return a - b
}
  
function multiply(a, b) {
    return a * b
}
  
function divide(a, b) {
    return a / b
}

function operate(operator, a, b)
{
    a = Number(a);
    b = Number(b);
    switch(operator)
    {
      case '+':
        return add(a,b);
      case '−':
        return subtract(a,b);
      case '÷':
        if(b === 0) 
        {
            return null;
        }
        else
        {
            return divide(a,b);
        }
      case '×':
        return multiply(a,b);
      default:
        return null;
    }
}