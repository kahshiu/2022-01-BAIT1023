/*
var hello = 1;
var world = " ba ba black sheep ";
var combined = hello.toString() + world;

combined
hello
world
*/

function dtFormat(dt) {
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
    var format2 = mmShort[mmNum] 
      + " " + ddNum.toString() 
      + ", " + yyyyNum.toString()
    return [format1, format2];
}

function diffDays(dt,dt2){
    var diff = dt2.getTime() - dt.getTime();
    var ms1Day = 24*60*60*1000
    var countDay = Math.round(diff/ms1Day);
    return countDay;
}

function printText() {
    var dt = new Date();
    var nextYear = dt.getFullYear() +1;
    var formatted = dtFormat(dt)[1];
    var dt2 = new Date(nextYear, 0, 1);

    var diff = diffDays(dt,dt2)
    text1 = "Count down to new year: " + nextYear;
    text2 = "Today is "+ formatted;
    text3 = "Only " + diff + " days left before New Year " + nextYear;
    return [text1,text2,text3];
}



// CTRL + SHIFT + P
// quokka: start on current file