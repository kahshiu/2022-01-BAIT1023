function calcAmount(priceString, quantityString){
    var priceNo = Number(priceString); // cast value (a string) to number
    var quantityNo = Number(quantityString);
    return quantityNo * priceNo; // return result to caller, in number format
}

// NOTE: el is current html element that trigger this function
// NOTE: rowno: row number: 1,2,3
function display(el, rowNo) {
    var selectedValue = el.value; // option's value 
    var selectedIndex = el.selectedIndex; 
    // selected index: 
    // 0: Select an item,
    // 1:HTML and CSS,
    // 2,3...
    var rowString = rowNo.toString();

    var priceElem = document.getElementById("Price"+rowString);
    var quantityElem = document.getElementById("Quantity"+rowString);
    var amountElem = document.getElementById("Amount"+rowString);
    
    if(selectedIndex > 0){
        priceElem.value = selectedValue;
        quantityElem.disabled = false;

        var amt = calcAmount(priceElem.value,quantityElem.value);
        amountElem.value = amt.toFixed(2); // note: To add decimal point 2
    } else {
        priceElem.value = "";
        quantityElem.disabled = true;
        amountElem.value = "0.00";
    }
    
}

function sub(el, rowNo) {
    var selectedValue = el.value; // option's value 
    var selectedIndex = el.selectedIndex; 
    // selected index: 
    // 0: Select an item,
    // 1:HTML and CSS,
    // 2,3...
    var rowString = rowNo.toString();

    var priceElem = document.getElementById("Price"+rowString);
    var quantityElem = document.getElementById("Quantity"+rowString);
    var amountElem = document.getElementById("Amount"+rowString);
    
    if(selectedIndex > 0){
        //priceElem.value = selectedValue;
        //quantityElem.disabled = false;

        var amt = calcAmount(priceElem.value,quantityElem.value);
        amountElem.value = amt.toFixed(2); // note: To add decimal point 2
    } else {
        //priceElem.value = "";
        //quantityElem.disabled = true;
        amountElem.value = "0.00";
    }
    
}