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



function updateSettings(){
  //console.log(callCostSetting.value)
  mySettings.callCostValue(callCostSetting.value);
  mySettings.smsCostValue(smsCostSetting.value);
  mySettings.warningLevel(warningLevelSetting.value)
  mySettings.criticalLevel(criticalLevelSetting.value)
  // console.log(forWarningValue(warningLevelSetting.value));
  // mySettings.forCriticalValue(criticalLevelSetting.value)

  if(totalAddBtnThree.disabled){
        totalAddBtnThree.disabled = false;
    }
}


function billTotal(){
  //To get the bill type to add from the radio button
  var checkedBillTotal = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedBillTotal){
        mySettings.forCalls(checkedBillTotal.value)
        mySettings.forSMSes(checkedBillTotal.value);
    }

    callTotalSetting.innerHTML = mySettings.forCallValues();
    smsTotalSetting.innerHTML = mySettings.forSmsValues();
    var totalCostTwo = mySettings.forTotal();
    totalSettings.innerHTML = totalCostTwo.toFixed(2);

   if (totalCostTwo >mySettings.forWarningValue()) {
        console.log("found");
          totalSettings.classList.add("warning");
   }

   if(totalCostTwo >= mySettings.forCriticalValue()){
     console.log('found2')
        totalSettings.classList.add('danger')
          totalAddBtnThree.disabled= true;
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
