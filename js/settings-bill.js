function SettingLogic(){
  var callsTotalThree = 0;
  var smsTotalThree = 0;

  var callCost =0;
  var smsCost = 0;
  var warningLevels = 0;
  var criticalLevels = 0;
  var allTotalCallSettings = 0;

  //var billPrice = checkedBillTotal.value;
  function callCostValue(updateCallValue){
    callCost = parseFloat(updateCallValue)
  }

  function smsCostValue(updateSmsValue){
    smsCost = parseFloat(updateSmsValue)
  }

  function warningLevel(updatedWarningValue){
    warningLevels = parseFloat(updatedWarningValue)
  }

  function criticalLevel(updateCriticalValue){
    criticalLevels = parseFloat(updateCriticalValue)
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

  function forCallValues(){

    return callsTotalThree.toFixed(2);
  }

  function forSmsValues(){
    return smsTotalThree.toFixed(2);
  }

  function forWarningValue(){
    return warningLevels;
  }

  function forCriticalValue(){
    return criticalLevels;
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
var mySettings = SettingLogic();
