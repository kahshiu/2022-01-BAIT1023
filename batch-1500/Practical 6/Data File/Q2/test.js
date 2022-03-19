
/*
var hello = 1123123;
var world = 222;
var str = "something here"

var combined = world.toString() + str + hello.toString();


combined
var x = hello + world
x
*/

function dtFormat(dt) {
    var mmNum = dt.getMonth();
    var ddNum = dt.getDate();
    var yyyyNum = dt.getFullYear();
    var miNum = dt.getMinutes();
    var ssNum = dt.getSeconds();
    var hhNum = dt.getHours();
    /*
    Jan -- 0
    Feb -- 1
    Mac -- 2
    */
    var mmShort = [
        'Jan', // index: 0
        'Feb', // index: 1
        'Mac', // 2
        'Apr', // 3...
    ]
    var format1 = ddNum.toString().padStart(2, "0")
        + "/" + (mmNum + 1).toString().padStart(2, "0")
        + "/" + yyyyNum.toString();

    // hh:mm:ss
    var format2 = mmShort[mmNum]
        + " " + ddNum.toString()
        + ", " + yyyyNum.toString()
        + ", " + hhNum.toString().padStart(2, "0")
        + ": " + miNum.toString().padStart(2, "0")
        + ": " + ssNum.toString().padStart(2, "0");

    return [format1, format2]
}

function diffDays (dt1,dt2) {
    var msDiff = dt2.getTime() - dt1.getTime();
    var ms1Day = 24*60*60*1000;
    var dayDiff = Math.round(msDiff/ms1Day);
    return dayDiff;
}

function printText() {
    var dt = new Date();
    var formatted = dtFormat(dt);
    var nextYear = dt.getFullYear() + 1;
    var dt2 = new Date(nextYear, 0, 1);
    var pickedFormat = formatted[1];
    
    var diff = diffDays(dt,dt2);
    var text0 = "Count down to new year: " + nextYear;
    var text1 = "Today is " + pickedFormat;
    var text2 = "Only " + diff + " days left until new year";
    return [text0, text1,text2]
}
