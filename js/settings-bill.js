var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
//console.log(billItemTypeWithSettingsElem )
var callTotalSetting= document.querySelector(".callTotalSettings");
var  smsTotalSetting = document.querySelector(".smsTotalSettings");
var  totalSettings = document.querySelector(".totalSettings");

//---get a reference to the add button---
var totalAddBtnThree = document.querySelector(".addedBtn");
var updateSettingsBtn = document.querySelector('.updateSettings')
//---for the fields---
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');


//create a variable that will keep track of the total bill
// these variables are global and defined outside of the Add button event listener.


//for the field



function settingLogic(){
  var callsTotalThree = 0;
  var smsTotalThree = 0;


  var callCost =0;
  var smsCost = 0;
  var warningLevel = 0;
  var criticalLevel = 0;
  var allTotalCallSettings = 0;

  //var billPrice = checkedBillTotal.value;

  function callCostValue(updateCallValue){
    callCost = parseFloat(updateCallValue)
  }

  function smsCostValue(updateSmsValue){
    smsCost = parseFloat(updateSmsValue)
  }

  function warningLevel(updatedWarningValue){
    warningLevel = parseFloat(updatedWarningValue)
  }

  function criticalLevel(updateCriticalValue){
    criticalLevel = parseFloat(updateCriticalValue)
  }

  function forCalls(billPrice){
    if (billPrice === "call"){
        callsTotalThree += callCost
        //console.log(callsTotalThree)

    }
  }

  function forSMSes(billPrice){
    if (billPrice === "sms"){
        smsTotalThree += smsCost;
    }
  }


//--------return the functions declared from the top----
  function forCallValues(){
    console.log(callsTotalThree)
    return callsTotalThree.toFixed(2);
  }

  function forSmsValues(){
    return smsTotalThree.toFixed(2);
  }

  function forWarningValue(){
    return warningLevel;
  }

  function forCriticalValue(){
    return criticalLevel;
  }
  //------function of total that will add the sms3s and call's function.
  function forTotal(){
    var finalBill = callsTotalThree + smsTotalThree;
    return finalBill = callsTotalThree + smsTotalThree;
  }

  return{
    forCalls,
    forSMSes,
    forCallValues,
    forSmsValues,
    callCostValue,
    smsCostValue,
    warningLevel,
    forWarningValue,
    criticalLevel,
    forCriticalValue,
    forTotal
  }
}

var mySettings = settingLogic();

function updateSettings(){
  //console.log(callCostSetting.value)
  mySettings.callCostValue(callCostSetting.value);
  mySettings.smsCostValue(smsCostSetting.value);
  mySettings.forWarningValue(warningLevelSetting.value)
  mySettings.forCriticalValue(criticalLevelSetting.value)



}




function billTotal(){
  //To get the bill type to add from the radio button
  var checkedBillTotal = document.querySelector("input[name='billItemTypeWithSettings']:checked");
//if (checkedBillTotal){
//     var billPrice = checkedBillTotal.value;
//   //  console.log(billPrice);
//     // billPrice will be 'call' or 'sms'
// //}
// // update the correct total
//     if (billPrice === "call"){
//         callsTotalThree += callCost
//     }
//
//     if (billPrice === "sms"){
//         smsTotalThree += smsCost;
//     }
    //console.log(checkedBillTotal.value)
      mySettings.forCalls(checkedBillTotal.value)
      mySettings.forSMSes(checkedBillTotal.value);
      mySettings.forWarningValue(checkedBillTotal.value)
      mySettings.forCriticalValue(checkedBillTotal.value)
    //totalSettings.classList.remove("danger");
    //console.log(smsCost);
    //update the totals that is displayed on the screen.
    callTotalSetting.innerHTML = mySettings.forCallValues();
    smsTotalSetting.innerHTML = mySettings.forSmsValues();
    var totalCostTwo = mySettings.forTotal();
    totalSettings.innerHTML = totalCostTwo.toFixed(2);

   if (totalCostTwo >  mySettings.forWarningValue() && totalCostTwo < mySettings.forCriticalValue()){
       totalSettings.classList.add("warning");
   }

   // if (totalCostTwo <  mySettings.forWarningValue()){
   //     totalSettings.classList.remove("warning");
   // }
   //
   //  else if (totalCostTwo >= mySettings.forCriticalValue()){
   //     totalSettings.classList.add("danger");
   //     //totalAddBtnThree.disabled = true;
   // };

    // if(totalAddBtnThree.disabled){
    //       totalAddBtnThree.disabled = false;
    //   }
}
//add an event listener for when the add button is pressed
totalAddBtnThree.addEventListener('click', billTotal);

//
// function updateSettings(){
//   var updatedCall = callCostSetting.value;
//   //console.log(updatedCall);
//   var updatedSms = smsCostSetting.value;
//   //console.log(updatedSms);
//   var updatedWarning = warningLevelSetting.value;
//   var updatedCritic = criticalLevelSetting.value;
//   var criticalCost = parseFloat(updatedCritic)
//   var warning = parseFloat(updatedWarning);
//
//   if(totalAddBtnThree.disabled){
//     totalAddBtnThree.disabled = false;
//   }
//
//   if(updatedCall != ''){
//     callCost = parseFloat(updatedCall)
//   }
//   if(updatedSms != ''){
//     smsCost = parseFloat(updatedSms)
//   }
//   //console.log(smsTotal);
//
//   if(updatedWarning != ''){
//     warningLevel =updatedWarning
//   }
//   if(updatedCritic != ''){
//     criticalLevel = criticalCost
//   }
//
// //  console.log(criticalLevel);
// }
updateSettingsBtn.addEventListener('click', updateSettings);
