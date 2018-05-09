function logicBill(){
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var lastTotal = 0;

  //var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  // function forValue(checkedRadioBtn){
  //   if (checkedRadioBtn){
  //       var billItemType = checkedRadioBtn.value;
  //       // billItemType will be 'call' or 'sms'
  //   }
  // }

  function SMSes(billItemType){
    if (billItemType === "sms"){
        smsTotalTwo += 0.75;
    }
    return smsTotalTwo;
  }
    // update the correct total
    function callsFunc(billItemType){
      if (billItemType === "call"){
          callsTotalTwo += 2.75
      }
    }


    function smsValues(){
      return smsTotalTwo.toFixed(2);
    }

    function callsValues(){
      return callsTotalTwo.toFixed(2);
    }

    function allValues(){
      return lastTotal =(callsTotalTwo + smsTotalTwo).toFixed(2);
    }

    return{
    //  forValue,
      SMSes,
      callsFunc,
      smsValues,
      callsValues,
      callsValues,
      allValues
    }

}

  var instance = logicBill();


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
