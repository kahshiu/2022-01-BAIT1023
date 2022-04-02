function dtFormat(dt) {
    var mmNum = dt.getMonth();
    var ddNum = dt.getDate();
    var yyyyNum = dt.getFullYear();
    var hhNum= dt.getHours();
    var miNum= dt.getMinutes();
    var ssNum=dt.getSeconds();
    /*
    Jan -- 0
    Feb -- 1
    Mac -- 2
    */
    var mmShort = [
    'Jan', //index: 0
    'Feb', //index: 1
    'Mac', //index: 2
    'Apr', //index: 3
    'May', //index: 4
    'Jun', //index: 5 ...
    ]
    
    var mmString = mmShort[mmNum];
    var format1 = mmString 
      + " " + ddNum.toString() 
      + ", " + yyyyNum.toString()
      + ", " + hhNum.toString()
      + ": " + miNum.toString()
      + ": " + ssNum.toString();
      // SIOK HUI: print details of time hh:mm:ss
    var format2 = ddNum.toString() + "/" + (mmNum + 1).toString()+ "/" + yyyyNum.toString()
    return [format1, format2];
}


function calcAmount(priceString,quantityString){
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
// el refers to element triggering action (bookname dropdown). NOTE "this" on html
// rowno is hardcoded and passed in from html
function display(el, rowno){
    var selectedIndex = el.selectedIndex; // selectedIndex 0,1,2,3
    var selectedValue = el.value; // value of selected option on books

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
        elQuantity.disabled = true; //disable quantity
        elAmount.value = "0.00";
    }

    var total = calcTotal(3);
    var elTot = document.getElementById("totalAmount");
    elTot.value = total.toFixed(2); // decimal point of 2
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


/* 
Questions
1. how to assign event handler on form
2. how to submit a form
3. how to prevent a form from submitted

4. confirm box, how to capture user input, true/ false
5. alert box

6. reload page
7. print page

8. set focus to elelemtn



====================
1. SHIA CHAI FEN
2. TEE PEI WEN
3. WONG WEI HAO
4. JASON LEE
5. JOSHUA KOH
6.KHOO QI SOON
7. LAI CHEE SHENG
8. CHIU YI SOH
*/

const x = dtFormat(new Date());
document.getElementById("date").value = x[1]
//document.getElementById("customerName").value = "hello123"
document.getElementById("book").onsubmit = function (){
    this.checkValidity();

    var elName = document.getElementById("customerName");
    var elTot = document.getElementById("totalAmount");
    var totAmount = Number(elTot.value);

    if(totAmount > 0){
        // proceed with submission
        var is_submit = confirm("Are you sure you would like to submit the book order?");
        if(is_submit) {
            var message = elName.value + ", your order is submitted...";
            alert(message);
            window.print();
        } else {
            return false;
        }

    } else {
        alert("Total Amount is invalid");
        return false;
    }

    //return true // note: WILL SUBMIT FORM
    //return false // note: FALSE WILL NOT SUBMIT FORM
}

function cancelorder () {
    var is_cancel = confirm("Are you sure to cancel the order to day?")
    if(is_cancel){
        window.location.reload();
    } else {
    }
}