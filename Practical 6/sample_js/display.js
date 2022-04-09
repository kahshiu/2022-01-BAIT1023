var name1 = document.getElementById("name");
var role = document.getElementById("role");
var loginTime = document.getElementById("loginTime");

name1.innerHTML = localStorage.getItem('username');; // reading from local storage
role.innerHTML = localStorage.getItem('role');;
loginTime.innerHTML = new Date( Number(localStorage.getItem('loginTime')))


var f2 = document.getElementById("f2");
f2.onsubmit = function(){

    var foodValue = [];
    var food = document.getElementsByName("food");
    for(var i=0;i<food.length;i++){
        if(food[i].checked){
            foodValue.push(food[i].value);
        }
    }

    localStorage.setItem('food',JSON.stringify(foodValue));;

    window.location = "checkout.html"

    // leaving this to students, when should form submission happen, 
    // right now form WILL NEVER submit, false is returned
    return false
}


    var foodValue = JSON.parse(localStorage.getItem('food'));

    var food = document.getElementsByName("food");
    for(var i=0;i<food.length;i++){
        food[i].checked = foodValue.includes(food[i].value)
    }
