function display(el, rowNo) {
    var value = el.value;
    var index = el.selectedIndex;
    var valueNum = Number(value);

    var priceElem = document.getElementById("Price"+rowNo);
    var quantityElem = document.getElementById("Quantity"+rowNo);
    var amountElem = document.getElementById("Amount"+rowNo);
    
    var qValue = quantityElem.value;
    var qValueNum = Number(qValue);

    if(index > 0){
        priceElem.value = value;
        quantityElem.disabled = false;
        amountElem.value = valueNum*qValueNum;
    } else {
        priceElem.value = "value";
        quantityElem.disabled = true;
        amountElem.value = 0;
    }
    
}