describe("The Bill with settings function", function(){
  it('should return the amount of 3 CALLS clicked, and the expected amount is R8.25', function(){
    var requiredBill = settingLogic()
    requiredBill.callCostValue(2.75)
    requiredBill.forCalls('call');
    requiredBill.forCalls('call');
    requiredBill.forCalls('call');
    assert.equal(requiredBill.forCallValues(), 8.25);
  })

  it('should return the amount of 7 SMSes clicked, and the expected amount is R4.50', function(){
    var requiredBill = settingLogic()
    requiredBill.smsCostValue(0.75)
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    assert.equal(requiredBill.forSmsValues(), 4.50);
  })

  it('should return the total amount of 2 SMSes clicked and 4 calls, and the expected amount is R12.50', function(){
    var requiredBill = settingLogic()
    requiredBill.smsCostValue(0.75)
    requiredBill.callCostValue(2.75)
    requiredBill.forSMSes('sms');
    requiredBill.forSMSes('sms');
    requiredBill.forCalls('call')
    requiredBill.forCalls('call')
    requiredBill.forCalls('call')
    requiredBill.forCalls('call')
    assert.equal(requiredBill.forTotal(), 12.50);
  })

  it('should return NOTHING if neither SMS or CALL is clicked', function(){
    var requiredBill = settingLogic()

    assert.equal(requiredBill.forTotal(), 0.00);
  })
})
