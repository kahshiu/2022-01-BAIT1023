function calcAmount(priceString,quantityString){
    var priceNum = Number(priceString);
    var quantityNum = Number(quantityString);
    return priceNum * quantityNum;
}

//NOTE: triggered by bookname select dropdown
function display(el, rowno){
    var selectedIndex = el.selectedIndex;
    var selectedValue = el.value;

    var rowString = rowno.toString();
    var elPrice = document.getElementById("Price" + rowString);
    var elQuantity = document.getElementById("Quantity" + rowString);
    var elAmount = document.getElementById("Amount" + rowString);

    if(selectedIndex > 0){
        elPrice.value = selectedValue;
        elQuantity.disabled = false;

        var amt = calcAmount(elPrice.value, elQuantity.value);
        elAmount.value = amt.toFixed(2);
    } else {
        elPrice.value = "";
        elQuantity.disabled = true;
        elAmount.value = "0";
    }
}


//NOTE: triggered by quantity select dropdown
function sub(el, rowno){
    var selectedIndex = el.selectedIndex;
    var selectedValue = el.value;

    var rowString = rowno.toString();
    var elPrice = document.getElementById("Price" + rowString);
    var elQuantity = document.getElementById("Quantity" + rowString);
    var elAmount = document.getElementById("Amount" + rowString);

    if(selectedIndex > 0){
        //elPrice.value = selectedValue;
        //elQuantity.disabled = false;

        var amt = calcAmount(elPrice.value, elQuantity.value);
        elAmount.value = amt.toFixed(2);
    } else {
        //elPrice.value = "";
        //elQuantity.disabled = true;
        elAmount.value = "0";
    }
}