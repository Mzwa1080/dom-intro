// document.addEventListener("DOMcontentLoaded", function(){



// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");


    var callsTotal = 0;
    var smsTotal = 0;

 // var  textBill = TextBill();

 function textBillTotal(){

    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();

    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2)
    smsTotalElem.innerHTML = smsTotal.toFixed(2)
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
  if (totalCost >= 50){
  // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
  }
  if (totalCost >= 30){
    totalCostElem.classList.add("warning");
  }
}


textTotalAddBtn.addEventListener('click', textBillTotal);
// })
