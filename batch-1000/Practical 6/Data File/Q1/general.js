﻿function calcAmount(priceString,quantityString){
    var priceNum = Number(priceString); // convert string to number
    var quantityNum = Number(quantityString);
    return priceNum * quantityNum; // return numbers
}

function calcTotal(totalRows) {
    var total = 0;
    
    for(var i=1; i<=totalRows; i++){
        var el = document.getElementById("Amount"+i.toString()) // grab amount textbox
        var amount = Number(el.value)
        total = total + amount;
    }

    return total;
    
}

//NOTE: triggered by bookname select dropdown
// el refers to element triggering action. NOTE "this" on html
// rowno is hardcoded and passed in from html
function display(el, rowno){
    var selectedIndex = el.selectedIndex; // selectedIndex 0,1,2,3
    var selectedValue = el.value; // value of selected option

    var rowString = rowno.toString(); // rowno: number to string
    var elPrice = document.getElementById("Price" + rowString); // grab html element to manipulate later
    var elQuantity = document.getElementById("Quantity" + rowString);
    var elAmount = document.getElementById("Amount" + rowString);

    // index 0:"select an item", no value
    if(selectedIndex > 0){
        elPrice.value = selectedValue;
        elQuantity.disabled = false;

        var amt = calcAmount(elPrice.value, elQuantity.value);
        elAmount.value = amt.toFixed(2); // setting decimal to 2 points
    } else {
        elPrice.value = "";
        elQuantity.disabled = true;
        elAmount.value = "0.00";
    }

    var total = calcTotal(3);
    var elTot = document.getElementById("totalAmount");
    elTot.value = total.toFixed(2);
}


//NOTE: triggered by quantity select dropdown
function sub(el, rowno){
    var selectedIndex = el.selectedIndex;
    // var selectedValue = el.value;

    var rowString = rowno.toString();
    var elPrice = document.getElementById("Price" + rowString);
    var elQuantity = document.getElementById("Quantity" + rowString);
    var elAmount = document.getElementById("Amount" + rowString);


    // index 0, quantity 0; index1, quantity1
    if(selectedIndex > 0){
        //elPrice.value = selectedValue;
        //elQuantity.disabled = false;

        var amt = calcAmount(elPrice.value, elQuantity.value);
        elAmount.value = amt.toFixed(2);
    } else {
        //elPrice.value = "";
        //elQuantity.disabled = true;
        elAmount.value = "0.00";
    }

    
    var total = calcTotal(3);
    var elTot = document.getElementById("totalAmount");
    elTot.value = total.toFixed(2);
}