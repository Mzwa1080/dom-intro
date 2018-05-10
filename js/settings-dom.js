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
  mySettings.callCostValue(callCostSetting.value);
  mySettings.smsCostValue(smsCostSetting.value);
  mySettings.warningLevel(warningLevelSetting.value)
  mySettings.criticalLevel(criticalLevelSetting.value)

  if(totalAddBtnThree.disabled){
        totalAddBtnThree.disabled = false;
    }
    callTotalSetting.innerHTML = mySettings.forCallValues();
    smsTotalSetting.innerHTML = mySettings.forSmsValues();
    var totalCostTwo = mySettings.forTotal();
    totalSettings.innerHTML = totalCostTwo.toFixed(2);

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

   if (totalCostTwo > mySettings.forWarningValue()) {
        //console.log("found");
          totalSettings.classList.add("warning");
   }

   if(totalCostTwo >= mySettings.forCriticalValue()){
     //console.log('found2')
        totalSettings.classList.add('danger')
          totalAddBtnThree.disabled= true;
   }
//after updating and upping the critical and warning
   if(totalCostTwo < mySettings.forCriticalValue()){
        totalSettings.classList.remove('danger');
   }

   if(totalCostTwo < mySettings.forWarningValue()){
        totalSettings.classList.remove('warning')
   }
}
//add an event listener for when the add button is pressed
totalAddBtnThree.addEventListener('click', billTotal);

updateSettingsBtn.addEventListener('click', updateSettings);
