var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio");
var callsTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector('.totalTwo');

//Reference for the BillTemplate
var radioDisplay = document.querySelector('.radioDisplay');
var BillTemplate = document.querySelector('.insertDataTemplate').innerHTML;
var compiledTemplate = Handlebars.compile(BillTemplate);
//get a reference to the add button
var radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
// 

var radioInstance = LogicBill();


//add an event listener for when the add button is pressed
document.addEventListener('DOMContentLoaded', function () {
    var data = {
        callTotal: (0.00).toFixed(2),
        smsTotal: (0.00).toFixed(2),
        grandTotal: (0.00).toFixed(2)
    };
    var compiledData = compiledTemplate(data);
    radioDisplay.innerHTML = compiledData;
});

radioTotalAddBtn.addEventListener('click', function () {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;
        radioInstance.calculations(billItemType);
    }

    var data = {
        callTotal: radioInstance.callsValues(),
        smsTotal: radioInstance.smsValues(),
        grandTotal: radioInstance.allValues()
    }
    var compiledDataTwo = compiledTemplate(data);
    radioDisplay.innerHTML = compiledDataTwo;

    var totalsTwo = radioInstance.allValues();

    if (totalsTwo > 30 && totalsTwo <= 50) {
        totalTwo.classList.add("warning");
    } else if (totalsTwo > 50) {
        totalTwo.classList.add("danger");
    }
});