const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function printError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

function validateSignUpForm() {
    const username = document.getElementById('username').value;
    const sign_up_email = document.getElementById('sign_up_email').value;
    const sign_up_password = document.getElementById('sign_up_password').value;

    var name_error = email_error = password_error = true;

    if (username == "") {
        printError("name_error", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("name_error", "Please enter a valid name");
        } else {
            printError("name_error", "");
            name_error = false;
        }
    }

    if (sign_up_email == "") {
        printError("email_error", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(sign_up_email) === false) {
            printError("email_error", "Please enter a valid email address");
        } else {
            printError("email_error", "");
            email_error = false;
        }
    }

    if (sign_up_password == "") {
        printError("password_error", "Please enter your Password");
    } else {
        var regex = /^[A-Za-z]\w{7,14}$/;
        if (regex.test(sign_up_password) === false) {
            printError("password_error", "Password must be of atleast 7 characters");
        } else {
            printError("password_error", "");
            password_error = false;
        }
    }
    
    if ((name_error || email_error || password_error) == true) {
        return false;
    }
};

function validateSignInForm() {
    const signin_email = document.getElementById('signin_email').value;
    const signin_password = document.getElementById('signin_password').value;

    var emailErr = passwordErr = true;

    if (signin_email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(signin_email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (signin_password == "") {
        printError("passwordErr", "Please enter your Password");
    } else {
        var regex = /^[A-Za-z]\w{7,14}$/;
        if (regex.test(signin_password) === false) {
            printError("passwordErr", "Password must be of atleast 7 characters");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if ((emailErr || passwordErr) == true) {
        return false;
    }
};