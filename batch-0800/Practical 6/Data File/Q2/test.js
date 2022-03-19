
/*
var hello = 5
var world = "asdf"

hello
world
var xx = hello.toString() + " " + world
xx
*/


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

function diffDays(dt1,dt2){
    var diff = dt2.getTime()-dt1.getTime(); // in milliseconds
    var ms1Day = 24*60*60*1000
    var diffDays = Math.round(diff/ms1Day);
    return diffDays    
}

function printText(){
    var dt1 = new Date();
    var yyyy2 = dt1.getFullYear() +1;
    var dt2 = new Date(yyyy2,0,1);
    var diff = diffDays(dt1, dt2);
    
    var text1 = "Countdown to new Year: " + yyyy2.toString();
    var text2 = "Today is " + dtFormat(dt1)[0];
    var text3 = "Only "+ diff +" days left until new year " +yyyy2.toString();
    return [text1,text2,text3];
}



/*
var dt = dtFormat(new Date());
var fmt0 = dt[0]
fmt0
*/

// "ctrl + shift + p": quokka start on current file