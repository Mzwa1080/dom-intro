function LogicBill(){
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var lastTotal = 0;

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

  var instance = LogicBill();
