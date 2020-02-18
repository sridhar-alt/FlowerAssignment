function cardvalidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; 
    var card = document.getElementById("card");
    if (!card.value.match(regex)) {
        card.style.borderColor = "red";
        document.getElementById("ValidCard").style.display = "block";
    }
    else {
        card.style.borderColor = "darkturquoise";
        document.getElementById("ValidCard").style.display = "none";
    }
}
function validateSecurityCode() {
    var securityCode = document.getElementById("securitycode");
    var regex = /^[0-9]{3}$/;
    if (!securityCode.value.match(regex)) {
        securityCode.style.borderColor = "red";
        document.getElementById("ValidSecurity").style.display = "block";
    }
    else {
    securityCode.style.borderColor = "darkturquoise";
        document.getElementById("ValidSecurity").style.display = "none";
    }
}
//function validateExpiryMonth() {
//    var x = document.getElementById("ddlmonths").value;
//    if (x == null) alert("Expiry Month is invalid!");
//}
//function validateExpiryYear() {
//    var y = document.getElementById("ddlyears").value;
//    if (y == null) alert("Expiry Year is invalid!");
//}
function validateName() {
    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.value.match(regex)) {
        name.style.borderColor = "red";
        document.getElementById("ValidName").style.display = "block";
    }
    else {
        name.style.borderColor = "darkturquoise";
        document.getElementById("ValidName").style.display = "none";
    }
}

function validateZipCode() {
    var code = document.getElementById("zip");
    var regex = /^(?:6[0-9]{6})$/;
    if (!code.value.match(regex)) {
        code.style.borderColor = "red";
        document.getElementById("ValidZip").style.display = "block";
    }
    else {
        code.style.borderColor = "darkturquoise";
        document.getElementById("ValidZip").style.display = "none";
    }
}
function validateAddress() {
    var address= document.getElementById("address");
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    if (!address.value.match(regex)) {
        address.style.borderColor = "red";
        document.getElementById("ValidAddress").style.display = "block";
    }
    else {
        address.style.borderColor = "darkturquoise";
        document.getElementById("ValidAddress").style.display = "none";
    }

}
function validateCity() {
    var city = document.getElementById("city");
    var regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
    if (!city.value.match(regex)) {
        city.style.borderColor = "red";
        document.getElementById("ValidCity").style.display = "block";
    }
    else {
        city.style.borderColor = "darkturquoise";
        document.getElementById("ValidCity").style.display = "none";
    }
}
function validatePhoneNo() {
    var phone = document.getElementById("telephone");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phone.value.match(regex)) {
        phone.style.borderColor = "red";
    }
    else {
        phone.style.borderColor = "darkturquoise";
    }
}

function validateEmail() {
    var mail = document.getElementById("mail");
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!mail.value.match(regex)) {
        mail.focus();
        mail.style.borderColor = "red";
        document.getElementById("ValidMail").style.display = "block";
    }
    else {
        mail.style.borderColor = "darkturquoise";
        document.getElementById("ValidMail").style.display = "none";
    }
}
function cancelOperation() {
    alert("Payment Cancel");
}
function submitOperation() {
    var card = document.getElementById("card").value.length;
    var securityCode = document.getElementById("securitycode").value.length;
    var name = document.getElementById("name").value.length;
    var address = document.getElementById("address").value.length;
    var city = document.getElementById("city").value.length;
    var code = code = document.getElementById("zip").value.length;
    var mail = document.getElementById("mail").value.length;
    if ((card > 0) && (securityCode > 0) && (code > 0) && (address> 0) && (city > 0) && (mail > 0)) {
        alert(" payment successfull..");
    }
    else {
    cardvalidation();
    validateSecurityCode();
    validateName();
    validateZipCode();
    validateAddress();
    validateCity();
    validateEmail();
        }
}
