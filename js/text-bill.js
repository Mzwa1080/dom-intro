
//create a variable that will keep track of the total bill
// these variables are global and defined outside of the Add button event listener.



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
      return smsTotal.toFixed(2);
    }

  function callsValue(){
      return callsTotal.toFixed(2) ;
    }

  function totalValue(){

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

 var  textBill =TextBill();

//----------------DOM-----------------
