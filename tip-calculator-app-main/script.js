
// Porcentage numbers 
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyFive = document.querySelector(".twenty-five");
const fifty = document.querySelector(".fifty");
const custom = document.querySelector(".custom");

// Displays
const tipAmount = document.querySelector(".tip-amount-value");
const tipPerson = document.querySelector(".tip-total-value");

// inputs
let billValue = document.getElementById("bill-value");
let numPeople = document.querySelector("#num-people");

// Buttom
let reset = document.querySelector(".reset-btn");

// let valueBill = ;
// let people = ;

// let tipPerPerson;
// let totalPerPerson;

five.addEventListener("click", function() {

    let tipPerPerson = (parseFloat(billValue.value) * (5 / 100)) / parseInt(numPeople.value);    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (tipPerPerson + parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})

ten.addEventListener("click", function() {

    let tipPerPerson = (parseFloat(billValue.value) * (10 / 100)) / parseInt(numPeople.value);    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (tipPerPerson + parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})
fifteen.addEventListener("click", function() {

    let tipPerPerson = (parseFloat(billValue.value) * (15 / 100)) / parseInt(numPeople.value);    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (tipPerPerson + parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})
twentyFive.addEventListener("click", function() {

    let tipPerPerson = (parseFloat(billValue.value) * (25 / 100)) / parseInt(numPeople.value);    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (tipPerPerson + parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})
fifty.addEventListener("click", function() {

    let tipPerPerson = (parseFloat(billValue.value) * (50 / 100)) / parseInt(numPeople.value);    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (tipPerPerson + parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})

custom.addEventListener("click", function() {

    let tipPerPerson = 0;    
    tipAmount.textContent = "$" + tipPerPerson;   

    let totalPerPerson = (parseFloat(billValue.value)) / parseInt(numPeople.value);    
    tipPerson.textContent = "$" + totalPerPerson;    
    
})

reset.addEventListener("click", function() {

    billValue.value = "";
    numPeople.value = "";

    tipAmount.textContent = "";
    tipPerson.textContent = "";

})














