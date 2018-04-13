//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once dfone looping over all the entries - display the total onto the screen in the billTotal element
//link the function to a click event on the calculate button
function calculateBtnClicked(){

  //Now we must get the string entered in the textarea
  var billString = billStringElement.value;
  //split the string
  var billItems = billString.split(",");
  // Since I don't know a variable for the "total phone bill" it'll be zero.
  var billTotal = 0;
  //BillItem Looping ---
  for (var i=0;i<billItems.length;i++){

      var billItem = billItems[i].trim();

      if (billItem === "call"){
          billTotal += 2.75;
      }

      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }

  //round to two decimals
  var roundedBillTotal = billTotal.toFixed(2);
  billTotalElement.innerHTML = roundedBillTotal;
// change color when amount reaches about R15-R25
  if (roundedBillTotal >=30){
    billTotalElement.classList.add("danger")
  }
// change color when amount reaches R15-R30
     else if(roundedBillTotal >= 20){
    billTotalElement.classList.add("warning")
  }
}
// add event listener
calculateBtnElement.addEventListener('click', calculateBtnClicked);
