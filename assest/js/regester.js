// SignUp Form Validation code will come here. //
function validate(e) {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailID = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (firstName.trim() == "") {
        alert("Please Provide your First Name!");
        document.signupForm.firstName.focus();
        return false;
    };

    if (lastName.trim() == "") {
        alert("Please Provide your Last Name!");
        document.signupForm.lastName.focus();
        return false;
    };

    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (emailID.trim() == "") {
        alert("Please Provide your Email!");
        document.signupForm.email.focus();
        return false;
    } else if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please Enter correct Email ID")
        document.signupForm.email.focus();
        return false;
    };

    if (password.trim() == "" || password.length < 8) {
        alert("Please Enter a  Valid Passord!");
        document.signupForm.password.focus();
        return false;
    };

    if (password !== confirmPassword) {
        alert("Password Must be Same!");
        return false;
    };

    if (gender == null) {
        alert("Gender is Not Selected!");
        return false;
    };

    getclientsData(e);
}

// ---------------------------------------------------------------------- //

const clients = [
    {
        id: 1,
        Fname: "Omar",
        Lname: "Hossam",
        email: "m.omar.hossam@gmail.com",
        password: "12345678910",
        gender: "male"
    }
]

function getclientsData(e) {
    e.preventDefault();
    let clinte = {
        id: Date.now(),
        Fname: document.getElementById('firstName').value,
        Lname: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        Bdate: document.getElementById('dateOfBirth').value
    }
    clients.push(clinte);
    localStorage.setItem('clients', JSON.stringify(clients));
    console.log("---------------");
    console.log(clients);

    window.location = "/assest/login.html";
}

let submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click',validate, false);
}

function login(z) {
    z.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const clients = JSON.parse(localStorage.getItem('clients')) || [];

    const searchIndex = clients.findIndex(
         (client) => client.email === email && client.password === password);
    
    if (searchIndex !== -1) {
        localStorage.setItem('login','true');
        window.location = "/index.html";
    } else {
        alert("Not Found!");
    }
}

let loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', login, false);
}

 //------------------------------------------------------- //