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
    }
    return is_success
}

var f1 = document.getElementById("f1")
f1.onsubmit = function (e) {
    var result = checkLogin();

    // either show/ not show warning
    document.getElementById("warning").style.display = result? "none": "block";

    // TODO: your other validations, now, return false to prevent form submission
    return false;
}