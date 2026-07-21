

/* Variable and Function Dictionary:

- let d – Variable that references the input obtained from the user.
- const deleteButton – Variable that references the deleteBtn element from the HTML file.
- appendToDisplay() – Function that stores the value entered by the user.
- clearDisplay() – Function that clears the user input.
- evaluateExpression() – Function that evaluates the mathematical expression.
- const exp – Variable that contains the value of d.value (the user input).
- let result – Variable that stores the result of the mathematical expression, including addition, subtraction, division, and multiplication.
- let number – Array that contains the values of the user input. It separates the string into individual elements so the mathematical expression can be calculated correctly.

Heres a link that explains my code: 
https://docs.google.com/document/d/1SOROSroDin9YZHpOYXlYM7m8wuW8aItrz4qSoQdPOzs/edit?usp=sharing
*/


let d;

window.addEventListener("DOMContentLoaded", () => {
    d = document.getElementById("display");
    
const deletebutton = document.getElementById("deleteBtn");

deletebutton.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

function appendToDisplay(value) {
    d.value += value;
}

function clearDisplay() {
    d.value = "";
}

function evaluateExpression() {

    const exp = d.value;
    let result;
    let number;

    if (/\+/.test(exp)) {
        number = exp.split("+");
        result = parseFloat(number[0]) + parseFloat(number[1]);
    } 
    
    else if (/\-/.test(exp)) {
        number = exp.split("-");
        result = parseFloat(number[0]) - parseFloat(number[1]);
    } 
    
    else if (/\*/.test(exp)) {
        number = exp.split("*");
        result = parseFloat(number[0]) * parseFloat(number[1]);
    } 
    
    else if (/\//.test(exp)) {
        number = exp.split("/");
        if (number[1] === "0") {
            result = "Error";
        } else {
            result = parseFloat(number[0]) / parseFloat(number[1]);
        }
    }

        d.value = result;
}

