// get a reference to the textbox where the bill type is to be entered
 var billTypeTextElement = document.querySelector(".billTypeText");
 var callTotalElement = document.querySelector(".callTotalOne");
 var  smsTotalElement = document.querySelector(".smsTotalOne");
 var  finalCostElement = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
//These variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
// get the value entered in the billType textfield
    var billTypeText = billTypeTextElement.value.trim();
// update the correct total
    if (billTypeText === "call"){
        callsTotal += 2.75;
    }

    else if (billTypeText === "sms"){
        smsTotal += 0.75;
    }

//update the totals that is displayed on the screen.
    callTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    finalCostElement.innerHTML = totalCost.toFixed(2);
    var totalCost = callsTotal + smsTotal;

//color the total based on the criteria
   if (totalCost >=50){
// adding the danger class will make the text red
       finalCostElement.classList.add("danger");
   }
   else if (totalCost >= 30){
       finalCostElement.classList.add("warning");
   }
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
