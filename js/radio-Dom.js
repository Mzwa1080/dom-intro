var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var callsTotalTwoElem = document.querySelector(".callTotalTwo");
var  smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var  totalCostTwoElem = document.querySelector(".totalTwo");

//get a reference to the add button
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalTwo = 0;
var smsTotalTwo = 0;


function radioBillTotal(){
  //To get the bill type to add from the radio button


  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'
  }
    logicBill.callsFunc(billItemType)
    logicBill.SMSes(billItemType)
    //update the totals that is displayed on the screen.
    callsTotalTwoElem.innerHTML = logicBill.callsValues();
    smsTotalTwoElem.innerHTML = logicBill.smsValues();
    var totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalCostTwoElem.innerHTML = totalCostTwo.toFixed(2);

   if (totalCostTwo >= 50){

       totalCostTwoElem.classList.add("danger");
   }
    else if (totalCostTwo >= 30){
       totalCostTwoElem.classList.add("warning");
   }
}
//add an event listener for when the add button is pressed
radioTotalAddBtn.addEventListener('click', radioBillTotal);
