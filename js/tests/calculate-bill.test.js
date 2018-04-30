describe('the Calculate bill function', function(){
  it('should return the Calls made only R8.25', function(){

    assert.equal("R" + calculateBill('call,call,call'), 'R8.25');
  });

  it('should return the SMSes made only R4.50', function(){

    assert.equal("R" + calculateBill('sms,sms,sms,sms,sms,sms'), 'R4.50');
  });
  it('should return the of both the Calls and SMSes combined is R10.00', function(){

    assert.equal("R" + calculateBill('call,call,sms,sms,call,sms'), 'R10.50');
  });
});
