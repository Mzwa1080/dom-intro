// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotal = 0;
var smsTotal = 0;


function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
    //var  forSure = 8;

    textBill.calls(billTypeEntered);
    textBill.smsBill(billTypeEntered)
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textBill.callsValue();
    smsTotalElem.innerHTML = textBill.smsValue();
    var totalCost = textBill.totalValue();
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);
