

function TextBill(){

    var callsTotal = 0;
    var smsTotal = 0;

    function calculate(billType){
      if(billType == "call"){
        callsTotal += 2.75;
      }
      else if(billType == "sms"){
        smsTotal += 0.75
      }
    }

  function smsValue(){
      return smsTotal.toFixed(2);
    }

  function callsValue(){
      return callsTotal.toFixed(2);
    }

  function totalValue(){
      var totalBill = callsTotal + smsTotal;
      return totalBill = callsTotal + smsTotal;
      }
      

    return {
      // calls,
      // smsBill,
      calculate,
      smsValue,
      callsValue,
      totalValue,
      // colorChanging
    }
  }

//----------------DOM-----------------



