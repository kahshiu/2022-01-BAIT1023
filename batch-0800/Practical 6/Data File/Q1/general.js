function dtFormat(dt) {
    /*MM
Jan - 0
Feb - 1
Mac - 2 ...
*/
    var mmNum = dt.getMonth();
    var ddNum = dt.getDate();
    var yyyyNum = dt.getFullYear();
    var miNum = dt.getMinutes();
    var hhNum = dt.getHours();
    var ssNum = dt.getSeconds();
    
    var mmString = [
        'Jan', // index 0
        'Feb', // index 1
        'Mar', // INDEX 2
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    var mmString2 = mmString[mmNum];

    // show hour + minute, WONG YAN ZHI 
    // format: Mar 19, 2022: hh: mm
    var dtString = mmString2 
        + " " + ddNum.toString() 
        + ", " + yyyyNum.toString() 
        + ": " + hhNum.toString() 
        + ": " + miNum.toString() 
        + ": " + ssNum.toString();
    var dtString2 = ddNum.toString() + "/" + (mmNum+1).toString() + "/" + yyyyNum.toString();

    return [dtString, dtString2];
}

function calcAmount(quantity, price){
    var quantityNo = Number(quantity);
    var priceNo = Number(price);
    return quantityNo * priceNo;
}

function totalAmount(rowTotal){
    var total = 0;

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
    return total;
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
        elPrice.value = '';
        elQuantity.disabled = true;
        elAmount.value = "0";
    }

    var total = totalAmount(3);
    var elTot = document.getElementById("totalAmount")
    elTot.value = total.toFixed(2);
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
    var total = totalAmount(3);
    var elTot = document.getElementById("totalAmount")
    elTot.value = total.toFixed(2);
}

function cancelorder () {
    var isCancel = confirm("Are you sure to cancel order?")
    if(isCancel){
        window.location.reload();
    } else {

    }
}


window.onload = function() {
    var elDt = document.getElementById("date");
    var fmt = dtFormat(new Date());
    elDt.value = fmt[1];

    var elCust = document.getElementById("customerName");
    elCust.focus();
}


var form = document.getElementById("book");
form.onsubmit = function(e){
    this.checkValidity();

    e.preventDefault();
    var total = totalAmount(3)
    if(total > 0 ){
        var isSubmit = confirm("Are you sure you wd like to submit book order?")
        if(isSubmit) {
            // submit data;
            form.submit();
            var custName = document.getElementById("customerName")
            alert(custName.value + " your order has been successfully submitted. You will receive order in 10 day.");
            window.print();
        } else {
            return false;
        }
    } else {
        alert("Invalid total amount");
        return false;
    }
}