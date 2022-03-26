
function dtFormat(dt) {
    var hhNum = dt.getHours();
    var miNum = dt.getMinutes();
    var ssNum = dt.getSeconds();
    var mmNum = dt.getMonth();
    var ddNum = dt.getDate();
    var yyyyNum = dt.getFullYear();
    /*
    Jan -- 0
    Feb -- 1
    Mac -- 2
    ...
    Dec -- 11
    */
    var mmShort = [
        'Jan', // 0
        'Feb', // index 1
        'Mac', // index 2
        'Apr', // index 3...
    ]
    

    var format1 = ddNum.toString() 
      + "/" + mmNum.toString() 
      + "/" + yyyyNum.toString()
    
    //MAN KEI: hh:mm:ss, 5min
    var format2 = mmShort[mmNum] +
        " " + ddNum.toString() +
        ", " + yyyyNum.toString() +
        ", " + hhNum.toString() +
        ": " + miNum.toString() +
        ": " + ssNum.toString() 
    return [format1, format2];
}

function calcAmount(priceString, quantityString){
    var priceNo = Number(priceString); // cast value (a string) to number
    var quantityNo = Number(quantityString);
    return quantityNo * priceNo; // return result to caller, in number format
}

function calcTotal(totalRows){
    var total = 0;
    for(var i=1; i<=totalRows; i++){
        var istring = i.toString()
        var el=document.getElementById("Amount"+istring); // get amount to add
        total = total + Number(el.value)
    }
    return total;
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
    var total = calcTotal(3)
    document.getElementById("totalAmount").value = total.toFixed(2);
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
    var total = calcTotal(3)
    document.getElementById("totalAmount").value = total.toFixed(2);
}

window.onload = function() {
    var fmt = dtFormat(new Date())
    document.getElementById("date").value = fmt[0]; // if this is form control: textbox, select, radio, checkbox
    document.getElementById("xxx").innerHTML = "asdfdsaf" // if this is regular html element
    document.getElementById("customerName").focus();
}

document.getElementById("book").onsubmit = function(e){
    this.checkValidity();
    var totalAmount = document.getElementById("totalAmount").value;
    var totalNum = Number(totalAmount);
    if(totalNum > 0){
        var isSubmit = confirm("Are you sure you would like to submit the book order?");
        if(isSubmit){
            // assume submission here.
            var message = document.getElementById("customerName").value + ",  your order is successful....";
            alert(message);
            window.print();

        } else {
            return false;
        }

    } else {
        alert("Total Amount is invalid");
        return false;
    }
}


function cancelorder (){
    var isCancel = confirm("Are you sure you want to cancel this order?");
    if(isCancel) {
        //window.close();
        window.location.reload();
    } else {

    }
}


//qustions
/*
1,2,3,4, confirm/ alertbox
minkit, suyin, nicholas, teoh yong sen

alert, confirm, cancel
*/