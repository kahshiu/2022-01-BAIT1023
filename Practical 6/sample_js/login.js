var validIdentity = {
    "happyman": "opendoor",
    "wong_yan_zhi": "1111",
    "exin": "2222",
    "gaaya": "4444",
    "lim": "5555",
}

var validRole = {
    "happyman": "admin",
    "wong_yan_zhi": "customer",
    "exin": "customer",
    "gaaya": "customer",
    "lim": "customer",
}


function checkLogin() {
    var username = document.getElementById("username") // grab element
    var password = document.getElementById("password") // grab element
    var username1 = 'happyman'; // fake username
    var password1 = 'opendoor'; // fake password

    var is_success = false; // result flag
    var is_user = username.value === username1; // checking username + passowrd
    var is_password = password.value === password1;

    if (is_user && is_password) {
        is_success = true
        localStorage.setItem('username', username.value); // writing into local storage
        localStorage.setItem('role', validRole[username.value]);
        localStorage.setItem('loginTime', new Date().getTime().toString());
    }
    return is_success
}

var f1 = document.getElementById("f1")
f1.onsubmit = function (e) {
    var result = checkLogin();

    // either show/ not show warning
    document.getElementById("warning").style.display = result? "none": "block";

    if(result){
        window.location = "landing.html"
    }
    // TODO: your other validations, now, return false to prevent form submission
    return false;
}