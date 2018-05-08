
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once dfone looping over all the entries - display the total onto the screen in the billTotal element
//link the function to a click event on the calculate button



function calculateBill(billtypes){
   var billTotal = 0;
  var billItems = billtypes.split(",");
  // a variable for the total phone bill.
  //loop over all the bill items
  for (var i=0;i<billItems.length;i++){

      var billItem = billItems[i].trim();

      if (billItem === "call"){
          billTotal += 2.75;
      }

      if (billItem === "sms"){
          billTotal += 0.75;
      }

    }

return billTotal.toFixed(2);
}
