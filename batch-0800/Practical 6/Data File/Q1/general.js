function calcAmount(quantity, price){
    var quantityNo = Number(quantity);
    var priceNo = Number(price);
    return quantityNo * priceNo;
}

function totalAmount(rowTotal){
    var total = 0;
    var elTot = document.getElementById("totalAmount")

    for(var i=1; i<=rowTotal; i++){
        var rowString = i.toString();
        var elPrice = document.getElementById("Price"+rowString);
        var elQuantity = document.getElementById("Quantity"+rowString);
        // var elAmount = document.getElementById("Amount"+rowString);
        var amt = calcAmount(
            elQuantity.value, 
            elPrice.value, 
        );
        total = total + amt;
    }
    
    elTot.value = total.toFixed(2);
}

function display(el, rowno){
    var selectedValue = el.value;
    var selectedIndex = el.selectedIndex;
    var rowString = rowno.toString();

    var elPrice = document.getElementById("Price"+rowString);
    var elQuantity = document.getElementById("Quantity"+rowString);
    var elAmount = document.getElementById("Amount"+rowString);

    if(selectedIndex > 0){
        elPrice.value = selectedValue;
        elQuantity.disabled = false;
        elAmount.value = calcAmount(
            elQuantity.value, 
            selectedValue
        ).toFixed(2);
    } else {
        elQuantity.disabled = true;
        elAmount.value = "0";
    }
    totalAmount(3);
}

//  NOTE: for quantity select dropdown
function sub(el, rowno){
    var selectedValue = el.value;
    var selectedIndex = el.selectedIndex;
    var rowString = rowno.toString();

    var elPrice = document.getElementById("Price"+rowString);
    var elQuantity = document.getElementById("Quantity"+rowString);
    var elAmount = document.getElementById("Amount"+rowString);

    if(selectedIndex > 0){
        //elPrice.value = selectedValue;
        //elQuantity.disabled = false;
        elAmount.value = calcAmount(
            selectedValue,
            elPrice.value
        ).toFixed(2);
    } else {
        //elQuantity.disabled = true;
        elAmount.value = "0";
    }
    totalAmount(3);
}
