describe("The Bill with settings function", function(){
  it('should return the amount of 3 CALLS clicked, and the expected amount is R8.25', function(){
    var requiredBill = settingLogic()
    requiredBill.callCostValue(2.75)

    requiredBill.forCalls('call');
    requiredBill.forCalls('call');
    requiredBill.forCalls('call');
    assert.equal(requiredBill.forCallValues(), 8.25);
  })
})
