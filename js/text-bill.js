// // get a reference to the textbox where the bill type is to be entered
// var billTypeTextElem = document.querySelector(".billTypeText");
// var callsTotalElem = document.querySelector(".callTotalOne");
// var smsTotalElem = document.querySelector(".smsTotalOne");
// var totalCostElem = document.querySelector(".totalOne");
// //get a reference to the add button
// var myAddedBtn = document.querySelector(".addToBillBtn");
// //create a variable that will keep track of the total bill
// // these variables are global and defined outside of the Add button event listener.
//


function TextBill(){

    var callsTotal = 0;
    var smsTotal = 0;
    var totalBill = 0;

// do myOwn calculations
  function calls(billType){
    if(billType ==="call"){
        callsTotal += 2.75;
      }
    }

    function smsBill(billType){
     if(billType ==="sms"){
        smsTotal += 0.75;
        }
      }

  function smsValue(){
      return smsTotal;
    }

  function callsValue(){
      return callsTotal ;
    }

  function totalValue(smsTotal, callsTotal){

      return totalBill = callsTotal + smsTotal;
      }
      // function returnTotal(){
      //   return totalBill;
      // }

    return {
      calls,
      smsBill,
      smsValue,
      callsValue,
      totalValue
    }
  }
