function add(a,b){
    return a + b;
};

function subtraction(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

function operate(x,y){
    result = add(x,y);
    return result;
};

let displayValue;
const numbers = document.querySelectorAll(".numbers");
console.log(numbers)
const number = numbers.forEach(number => {
    number.addEventListener('click',() =>{
        displayValue = parseFloat(number.id);
        display.textContent = displayValue;
    });
});
