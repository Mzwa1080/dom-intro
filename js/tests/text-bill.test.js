describe("The TextBill function", function(){
  it("if you put 3 CALL as string only and it should return value of CALLS only expected to be R8.25", function(){
      var displayTheValue = TextBill();
          displayTheValue.calls('call');
          displayTheValue.calls('call');
          displayTheValue.calls('call');
          assert.equal(displayTheValue.callsValue(),8.25);
        });

  it("if you put 4 SMSes as string only and it should return value of SMS only expected to be R3.00", function(){
        var displayTheValue = TextBill();
            displayTheValue.smsBill('sms');
            displayTheValue.smsBill('sms');
            displayTheValue.smsBill('sms');
            displayTheValue.smsBill('sms');
            assert.equal(displayTheValue.smsValue(),3.00);
        });

  it("if you put 3 SMS string and 2 CALLS it should return TOTAL value of SMSes and CALLS, expected to be R7.75", function(){
        var displayTheValue = TextBill();
          displayTheValue.smsBill('sms');
          displayTheValue.smsBill('sms');
          displayTheValue.smsBill('sms');
          displayTheValue.calls('calls');
          displayTheValue.calls('calls');
          // assert.equal(displayTheValue.callsValue(), 5.50)
          // assert.equal(displayTheValue.smsValue(), 2.25)
          assert.equal(displayTheValue.totalValue(callsTotal, smsTotal), 7.75);
      });

});
