//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

function calculateBtnClicked(){
  // get the string entered in the textArea
  var billString = billStringElement.value;
    var roundedBillTotal= calculateBill(billString);

  //round to two decimals

  billTotalElement.innerHTML =roundedBillTotal;
// change color when amount hits 20-30 cost
  if ( roundedBillTotal >= 20){
    billTotalElement.classList.add("warning");
  }

  if ( roundedBillTotal < 20){
    billTotalElement.classList.remove("warning");
  }
// change color when amount hits 20-30 cost
      if(roundedBillTotal > 30  ){
    billTotalElement.classList.add("danger");
  }

  if(roundedBillTotal < 30  ){
  billTotalElement.classList.remove("danger");
 //return billTotalElement.classList.add("warning");
}

}
// add event listener
calculateBtn.addEventListener('click', calculateBtnClicked);
