/*
var hello = 1;
var world = "something here";
var combined = hello.toString() + "  " + world;
*/




function dtFormat(dt) {
    var mmNum = dt.getMonth();
    var ddNum = dt.getDate();
    var yyyyNum = dt.getFullYear();
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
      + ", " + yyyyNum.toString();
      // SIOK HUI: print details of time hh:mm:ss
    var format2 = ddNum.toString() + "/" + mmNum.toString() + "/" + yyyyNum.toString()
    return [format1, format2];
}

function diffDays (dt1,dt2) {
    var dtDiff = dt2.getTime() - dt1.getTime(); // milliseconds
    var ms1Day = 24*60*60*1000;
    var days = dtDiff/ms1Day;
    return days;
}

function printText(){
    var dt = new Date();
    var yyyy2 = dt.getFullYear() + 1;
    var dt2 = new Date(yyyy2,0,1);
    var format = dtFormat(dt)[0];
    
    var diff = Math.round(diffDays(dt,dt2));
    var text1 = "Countdown to new year: " + yyyy2;
    var text2 = "Today is " + format;
    var text3 = "Only " + diff.toString() + " days left until new year " + yyyy2;
    
    return [text1, text2, text3];
}

// var p = printText()
// p