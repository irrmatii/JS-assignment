// === Navigation bar === //
const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav_menu')
const navClose = document.querySelector('.close')


navToggle.onclick = () => {
    navMenu.classList.add('show_menu')
    navToggle.style.display = 'none'
    navClose.style.display = 'block'
}

navClose.onclick = () => {
    navMenu.classList.remove('show_menu')
    navClose.style.display = 'none'
    navToggle.style.display = 'block'
}

// disable href //
const navTabs = document.querySelectorAll('.nav_menu a')

navTabs.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('inactive');
        link.removeAttribute('href');
    }
});



// === Main codes === //
const input = document.querySelectorAll('.info_input')
const signUp_btn = document.querySelector('.signUp_btn')
const bottom_line = document.querySelectorAll('.bottom_line')
const emailSvg = document.querySelector('.email')
const passwordSvg = document.querySelectorAll('.password')
const error = document.querySelectorAll('.error')


let errorMsg = ""

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

signUp_btn.onclick = () => {
    let email = input[0].value
    console.log(email)

    let password = input[1].value
    console.log(password)

    let password2 = input[2].value
    console.log(password2)

    if (validateEmail(email)) {
        console.log("Valid email address!");
        bottom_line[0].style.borderBottom = '1px solid green';
        emailSvg.style.fill = "green";
        errorMsg = ""
        error[0].innerHTML = errorMsg;
    } else {
        console.log("Invalid email address.");
        bottom_line[0].style.borderBottom = '1px solid #d21313';
        emailSvg.style.fill = "#d21313";
        errorMsg = "Invalid email address";
        error[0].innerHTML = errorMsg;
    }

    if (password.length >= 6) {
        console.log("Valid password!");
        bottom_line[1].style.borderBottom = '1px solid green';
        passwordSvg[0].style.stroke = "green";
        errorMsg = ""
        error[1].innerHTML = errorMsg;
    } else {
        console.log("Invalid password.");
        bottom_line[1].style.borderBottom = '1px solid #d21313';
        passwordSvg[0].style.stroke = "#d21313";
        errorMsg = "Password is too short!";
        error[1].innerHTML = errorMsg;
    }

    if (password2 === password && password !== "") {
        console.log("Valid email password!");
        bottom_line[2].style.borderBottom = '1px solid green';
        passwordSvg[1].style.stroke = "green";
        errorMsg = ""
        error[2].innerHTML = errorMsg;
    } else {
        console.log("Invalid password.");
        bottom_line[2].style.borderBottom = '1px solid #d21313';
        passwordSvg[1].style.stroke = "#d21313";
        errorMsg = "Password does not match!";
        error[2].innerHTML = errorMsg;
    }

    if (error[0].innerHTML === "" && error[1].innerHTML === "" && error[2].innerHTML === "") {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));

        window.location.href = 'index.html'
    }
}







