
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
        case "+":
            return add(arg1,arg2);

        case "-":
           return subtract(arg1,arg2);

        case "x":
           
           return multiply(arg1,arg2)
        
        case "%":
         
           return divide(arg1,arg2)

        default: 
        return "Something must have gone wrong in the operate function"
        
    }
}

function setDisplay(value){
    display.textContent = value;
}

function getDisplay(){
    return Number(display.textContent)
}
//-------------------------------------------------variables to update display

let firstNumber;
let secondNumber;
let operator;
let display=document.querySelector(".display");


//------------------------------------------------functions that populate display when number buttons are pressed

function concatDisplayValue(){
    if(secondNumber==undefined && firstNumber!=undefined){
        display.textContent= this.textContent; 
        secondNumber = Number(display.textContent);  
    }else{display.textContent+=this.textContent;}
}

const numbers = document.querySelectorAll(".numb");
numbers.forEach(button=>{button.addEventListener("click",concatDisplayValue)})

//----------------------------------------------

function useOperand(){

    if(firstNumber == undefined){
        firstNumber =  getDisplay();
        operator = this.textContent;

    }else{
        if(secondNumber!=undefined){execute();}
        operator = this.textContent;    
    }
       
}

const operators = document.querySelectorAll(".operator");
operators.forEach(button=>{button.addEventListener("click",useOperand)})

//---------------------------------------------

function execute(){
    secondNumber= Number(display.textContent);
    let result= operate(operator,firstNumber, secondNumber)
    setDisplay(result)
    firstNumber= result;
    secondNumber = undefined;
}

//--------------------------------------------------

const equals = document.querySelector(".equals");
equals.addEventListener("click", execute);
