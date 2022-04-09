var name1 = document.getElementById("name");
var role = document.getElementById("role");
var loginTime = document.getElementById("loginTime");

name1.innerHTML = localStorage.getItem('username');; // reading from local storage
role.innerHTML = localStorage.getItem('role');;
loginTime.innerHTML = new Date( Number(localStorage.getItem('loginTime')))