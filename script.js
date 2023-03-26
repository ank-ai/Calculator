
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
    }else if(display.textContent=="Divide by zero? Don't be a hero..."){
        display.textContent="";
        display.textContent+=this.textContent;
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
    if(operator==undefined || firstNumber ==undefined || secondNumber==undefined){return}       //cornder case
    secondNumber= Number(display.textContent);
    if(secondNumber==0 && operator=="%"){
        setDisplay("Divide by zero? Don't be a hero...")
        firstNumber= undefined;
        secondNumber=undefined;
        return;
    }
    let result= Number(operate(operator,firstNumber, secondNumber).toFixed(3))
    setDisplay(result)
    firstNumber= result;
    secondNumber = undefined;
    display.classList.add("blink")
}

//-------------------------------------------------- equals and clear buttons

const equals = document.querySelector(".equals");
equals.addEventListener("click", execute);

const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    display.textContent="";
    firstNumber= undefined;
    secondNumber=undefined;
})

const undo = document.querySelector(".undo")

undo.addEventListener("click",()=>{
    display.textContent=display.textContent.slice(0,display.textContent.length-1)
    firstNumber=Number(display.textContent)
})

const bod = document.querySelector("body");

//make html elements so concatDisplayValue can work



bod.addEventListener("keydown",function(e){
    for(let i=0; i<10;i++){
    
        if(e.code.includes(i)){
            if(secondNumber==undefined && firstNumber!=undefined){
                display.textContent= i; 
                secondNumber = Number(display.textContent);  
            }else if(display.textContent=="Divide by zero? Don't be a hero..."){
                display.textContent="";
                display.textContent+=i;
            }else{display.textContent+=i;}
        }
    }
})

