var billTypeTextElem = document.querySelector(".billTypeText");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalBillOne = document.querySelector(".totalBillOne");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

//Reference for the handlabar that will display
var display = document.querySelector('.displayField');
// reference to the handlebar that will insert and be compiled 
var BillTemplate = document.querySelector('.insertDataTemplate').innerHTML;
//compiling the template
var compiledTemplate = Handlebars.compile(BillTemplate);

var textbilling = TextBill()



document.addEventListener('DOMContentLoaded', function () {
    var insertData = {
        callTotal: 0.00.toFixed(2),
        smsTotal: 0.00.toFixed(2),
        grandTotal: 0.00.toFixed(2)
    };
    var compiledData = compiledTemplate(insertData);
    display.innerHTML = compiledData;
});

textTotalAddBtn.addEventListener('click', function () {

    textbilling.calculate(billTypeTextElem.value);
    var insertData = {
        callTotal: textbilling.callsValue(),
        smsTotal: textbilling.smsValue(),
        grandTotal: textbilling.totalValue().toFixed(2)
    };
    var compiledData = compiledTemplate(insertData);
    display.innerHTML = compiledData;
    totalBillOne,innerHTML = textbilling.totalValue();

    // console.log(display.innerHTML);


    var totalCost = textbilling.totalValue();


    if(totalCost > 30 & totalCost < 50){totalBillOne.classList.add("warning");}
    else if (totalCost > 50){totalBillOne.classList.add("danger");}

    

    // if (totalCost >=50) {
    //     totalBillOne.classList.add('crimson');
    // } else if (totalCost >= 30) {
    //     totalBillOne.classList.add('orange');
    // }
    totalBillOne = totalCost;
    console.log(totalBillOne)
    console.log(totalCost)
});