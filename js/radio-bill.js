function LogicBill() {
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var lastTotal = 0;

  function SMSes(billItemType) {
    if (billItemType === "sms") {
      smsTotalTwo += 0.75;
    }
    return smsTotalTwo;
  }
  // update the correct total
  function callsFunc(billItemType) {
    if (billItemType === "call") {
      callsTotalTwo += 2.75
    }
  }

  function calculations(billItemType) {
    if (billItemType == "call") {
      callsTotalTwo += 2.75;
    } else if (billItemType == "sms") {
      smsTotalTwo += 0.75;
    }
  }

  function smsValues() {
    return smsTotalTwo.toFixed(2);
  }

  function callsValues() {
    return callsTotalTwo.toFixed(2);
  }

  function allValues() {
    return lastTotal = (callsTotalTwo + smsTotalTwo).toFixed(2);
  }

  return {
    calculations,
    SMSes,
    callsFunc,
    smsValues,
    callsValues,
    callsValues,
    allValues
  }

}