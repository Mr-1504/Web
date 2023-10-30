var openButtons = document.querySelectorAll(".more_info");
var modal = document.querySelector(".information");
var closeButton = document.getElementById("hideinfor");

openButtons.forEach(function(openButton) {
    openButton.addEventListener("click", function() {
        modal.style.display = "flex";
    });
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(hey) {
    if (hey.target == modal) {
        modal.style.display = "none";
    }
})

var buttons = document.querySelectorAll(".buy");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "../mac/purchase.html";
    });
});

var check_phone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
var check_email = /^[\w-]+(?:\.[\w-]+)*@[\w-]+(?:\.[\w-]+)+$/;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function checknull(txt) {
    if (txt.value.length == 0) return true;
    else return false;
}

function isInteger(txt) {
    if ((!isNaN(txt.value)) && (parseInt(txt.value) === Number(txt.value)))
        return true;
    else
        return false;
}

function notCheck(radio) {
    var rt = true;
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            rt = false;
    return rt;

}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function tnum(num) {
    return /^84+[35789][0-9]{8}$/.test(num) || /^0+[35789][0-9]{8}$/.test(num);
}

function validform(f) {
    var hasError = false;
    if (!/^[a-zA-Zàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳỵỷỹý -]+$/.test(f.fullname.value)) {
        alert(f.fullname.name + " must be not null");
        f.fullname.focus();
        return;
    }
    if (checknull(f.age)) {
        alert(f.age.name + " must be not null");
        f.age.focus();
        return;
    }
    if (isNaN(f.age.value)) {
        alert(f.age.name + " must be a number");
        f.age.value = "";
        f.age.focus();
        return;
    }
    if (!isInteger(f.age)) {
        alert(f.age.name + " must be an integer number");
        f.age.value = "";
        f.age.focus();
        return;
    }
    if (eval(f.age.value) <= 0 || eval(f.age.value) >= 113) {
        alert(f.age.name + " must be in (0 - 113)");
        f.age.value = "";
        f.age.focus();
        return;
    }
    if (notCheck(f.gender)) {
        alert("Gender must be choosen");
        return;
    }
    if (!tnum(f.phone.value)) {
        alert("Phone is not valid");
        f.phone.value = "";
        f.phone.focus();
        hasError = true;
        return;
    }
    if (!/^[a-zA-z0-9.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(f.email.value)) {
        alert("Email is not valid");
        f.email.value = "";
        f.email.focus();
        return;
    };
    alert("All fields are valid");
}

var links = document.querySelectorAll(".chapternav_item a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = link.getAttribute("href").substring(1);
        var tabContents = document.querySelectorAll(".tab-pane");
        tabContents.forEach(function(tabContents) {
            tabContents.classList.remove("active");
            tabContents.classList.add("fade");
        });
        var targetTab = document.getElementById(targetId);
        targetTab.classList.remove("fade");
        targetTab.classList.add("active");

        var navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(function(navLink) {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
        window.scrollTo(0, targetTab.offsetTop);
    });
});