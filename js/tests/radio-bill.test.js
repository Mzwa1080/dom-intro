describe('The radio-bill function', function(){
    it('should return total a total of 2 clicked SMSes, expected cost R1.50', function(){
        var showValues = LogicBill();
        showValues.SMSes('sms');
        showValues.SMSes('sms');

        assert.equal(showValues.smsValues(), 1.50);
    })

    it('should return total a total of 2 clicked CALLS, the expected amount is R5.50', function(){
        var showValues = LogicBill();
        showValues.callsFunc('call');
        showValues.callsFunc('call');
        assert.equal(showValues.callsValues(), 5.50);
    })


    it('should return total a total for both 2 CALLS & 2 SMSes combined and the expected amount is R7.00', function(){
        var showValues = LogicBill();
        showValues.callsFunc('call');
        showValues.callsFunc('call');
        showValues.SMSes('sms')
        showValues.SMSes('sms')
        //console.log(showValues.allValues())
        assert.equal(7, showValues.allValues() );
    });

    it('should return nothing if there\'s no call or sms clicked', function(){
        var showValues = LogicBill();

        //console.log(showValues.allValues())
        assert.equal(0, showValues.allValues() );
    });
});
