function add(arg1, arg2){
    return arg1+arg2;
}

function subtract(arg1,arg2){
    return arg1-arg2;
}

function multiply(arg1, arg2){
    return arg1*arg2;
}

function divide(arg1, arg2){
    return arg1/arg2;
}

function operate(operator,arg1,arg2){
    switch (operator){
        case "add":
            return add(arg1,arg2);

        case "subtract":
            return subtract(arg1,arg2);

        case "multiply":
            return multiply(arg1,arg2);
        
        case "divide":
            return divide(arg1,arg2);

        default: 
        return "Something must have gone wrong in the operate function"
        
    }
}

//-------------------------------------------------variables to update display

let firstNumber;
let operator;
let secondNumber;

//-------------



