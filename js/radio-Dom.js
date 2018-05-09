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
  //if (checkedRadioBtn){
      var billItemType = billItemTypeRadioElem.value
      // billItemType will be 'call' or 'sms'
  //}
  if (billItemType === "call"){
      callsTotalTwo += 2.75;
  }
  else if (billItemType === "sms"){
      smsTotalTwo += 0.75;
  }
    // logicBill.callsFunc(billItemType)
    // logicBill.SMSes(billItemType)
    //update the totals that is displayed on the screen.
    callsTotalTwoElem.innerHTML =  callsTotalTwo.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalTwo.toFixed(2);
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
