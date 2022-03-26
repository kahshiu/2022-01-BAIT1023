
// NOTE: remember html element's value is always in string form
function calcAmount(priceString, quantityString){
  var priceNo = Number(priceString);
  var quantNo = Number(quantityString);
  return quantNo * priceNo;
}

// NOTE: find the elements and total up their value
function calcTotal() {
  var rowNo = 3;
  var total = 0;
  
  for(var i = 1; i<=rowNo; i++){
    var iString = i.toString();
    var el = document.getElementById("Amount"+iString);
    var vNum = Number(el.value);
    total = total + vNum;
  }
  return total;
}


// NOTE: el is the one element that triggered "display"
// rowno is row no of table 1,2,3
// function is triggered by book name dropdown
// **press F12 to launch developer tools in chrome
function display(el, rowno){
  var selectedIndex = el.selectedIndex;
  var selectedValue = el.value;
  var rowString = rowno.toString();
  
  var elPrice = document.getElementById("Price" + rowString);
  var elQuantity = document.getElementById("Quantity" + rowString);
  var elAmount = document.getElementById("Amount" + rowString);

  // 0: select an item
  // 1: html + css
  // 2: javascript ...
  if(selectedIndex > 0) {
    elPrice.value = selectedValue;
    elQuantity.disabled = false;
    var total = calcAmount(elPrice.value, elQuantity.value);
    elAmount.value = total.toFixed(2); // NOTE: convert to 2 decimal value
    
  } else {
    elPrice.value = "";
    elQuantity.disabled = true;
    elAmount.value = "0.00"
  }

  var total = calcTotal();
  document.getElementById("totalAmount").value = total.toString();
}

// NOTE: triggered by quantity
function sub(el, rowno){
  var selectedIndex = el.selectedIndex; // quantity index
  //var selectedValue = el.value; // quantity value
  var rowString = rowno.toString();
  
  var elPrice = document.getElementById("Price" + rowString);
  var elQuantity = document.getElementById("Quantity" + rowString);
  var elAmount = document.getElementById("Amount" + rowString);

  // now referring to quantity index
  // 0: 0
  // 1: 1
  // 2: 2 ...
  if(selectedIndex > 0) {
    //elPrice.value = selectedValue;
    //elQuantity.disabled = false;
    var total = calcAmount(elPrice.value, elQuantity.value);
    elAmount.value = total.toFixed(2); // NOTE: convert to 2 decimal value
    
  } else {
    //elPrice.value = "";
    //elQuantity.disabled = true;
    elAmount.value = "0.00"
  }

  var total = calcTotal();
  document.getElementById("totalAmount").value = total.toString();
}

window.onload = function() {
  // Question1: YEN KHANG
  // set today's date to document.getElementById("date")
  // set cursor to focus within document.getElementById("customerName")




}

document.getElementById("book").onsubmit = function() {
  // question3: LEE YIN HAO 
  // confirm, alert, 
  var amount =0 // how to get amount?
  if(total>0){
    // confirm
    var isSubmit = false; // how to grab user feedback?
    if(isSubmit){}
    else {}
  }
  else {}
}

  
function cancelorder () {
  // question 5: HAN EASON
  var isCancel = false; // how to grab user feedback? to cancel or not?
  if(isCancel){}
  else {}
  
}
