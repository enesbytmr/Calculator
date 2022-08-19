let currentValue = "";
let operator = "";
let previousValue = "";
let cNum =""
const display = document.getElementById("display");
const allButtons = document.querySelectorAll(".button");

const clear = document.querySelector("#clearBtn");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const deleteBtn = document.querySelector('#delete')

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

//buttons

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

clear.addEventListener('click',()=>{
    currentValue = ''
    previousValue = ''
    operator = ''
    currentScreen.innerText=""
    previousScreen.innerText= ""
})

deleteBtn.addEventListener('click',()=>{
    currentValue = currentValue.substring(0, currentValue.length - 1);
    currentScreen.innerHTML =currentValue


})

let handleNumber = (num) =>{
    if(currentValue.length <= 15){
    currentValue += num;}
    else{
        currentScreen.innerText = "error"
    }
}

let handleOperator =(op) => {
    operator = op;
    previousScreen.textContent = currentValue + " "+ operator
    previousValue = currentValue;
    currentValue = ""
    currentScreen.innerText= ""
    
}

equal.addEventListener('click' ,()=>{ 
    currentValue = Number(currentValue);
    previousValue =Number(previousValue);
    operate()})

const add = (num1, num2) => {
    
    cNum= num1 + num2
    previousScreen.innerText="";
    currentScreen.innerText=cNum;
};

const subtract = (num1, num2) => {
    cNum = num2 - num1 
    previousScreen.innerText="";
    currentScreen.innerText=cNum;
};

const multiply = (num1, num2) => {
    cNum = num1 * num2
    previousScreen.innerText="";
    currentScreen.innerText=cNum;
};

const divide = (num1, num2) => {
  cNum = num1 / num2
  previousScreen.innerText="";
  currentScreen.innerText=cNum;

};

const operate = () => {
    
    if(operator == '+'){
        add(currentValue,previousValue)
    }else if(operator == '-'){
        subtract(currentValue,previousValue);
    }else if(operator=='*'){
        multiply(currentValue,previousValue);
    }else if(operator== '/'){
        divide(currentValue,previousValue);
    }
    currentValue = ""
    previousValue = ""
    
};
