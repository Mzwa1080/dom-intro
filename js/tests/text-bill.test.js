describe('The text-bill function', function() {
  it('should display "R5.5" as a total of both CALLS & SMSes if user entered two CALLS and one SMS. ',
    function() {
      var textbill = TextBillTotal();

      textbill.calc('call');
      textbill.calc('call');
      textbill.calc('sms');
      assert.equal(textbill.callTotal(), 5.5);
      assert.equal(textbill.smsTotal(), 0.75);
      assert.equal(textbill.total(), 6.25);

    });


  it('should display "R2.25" as a total of SMSes if user entered three SMSes.  ',
    function() {
      var textbill = TextBillTotal();

      textbill.calc('sms');
      textbill.calc('sms');
      textbill.calc('sms');
      assert.equal("R" + textbill.callTotal(), "R0.00");
      assert.equal("R" + textbill.smsTotal(), "R2.25");
      assert.equal("R" + textbill.total(), 'R2.25');

    });

});
