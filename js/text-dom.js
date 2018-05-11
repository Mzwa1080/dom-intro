var billTypeTextElem = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

var textbilling = TextBill()

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    // update the correct total
    textbilling.calls(billTypeEntered);
    textbilling.smsBill(billTypeEntered);
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textbilling.callsValue();
    smsTotalElem.innerHTML = textbilling.smsValue();
    var totalCost = textbilling.totalValue();
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
