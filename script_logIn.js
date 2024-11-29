// ===== Navigation bar ===== //
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
const logIn_btn = document.querySelector('.logIn_btn')
const input = document.querySelectorAll('.info_input')
const bottom_line = document.querySelectorAll('.bottom_line')
const emailSvg = document.querySelector('.email')
const passwordSvg = document.querySelectorAll('.password')
const error = document.querySelectorAll('.error')

const email = JSON.parse(localStorage.getItem("email"));
const password = JSON.parse(localStorage.getItem("password"));

let errorMsg = ""


console.log(email);
console.log(password);



logIn_btn.onclick = () => {

    if (input[0].value === email){
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

    if (input[1].value === password){
        console.log("Valid password!");
        bottom_line[1].style.borderBottom = '1px solid green';
        passwordSvg[0].style.stroke = "green";
        errorMsg = ""
        error[1].innerHTML = errorMsg;
    } else {
        console.log("Invalid password.");
        bottom_line[1].style.borderBottom = '1px solid #d21313';
        passwordSvg[0].style.stroke = "#d21313";
        errorMsg = "Invalid password";
        error[1].innerHTML = errorMsg;
    }

    if (errorMsg === "" && input[0].value !== "" && input[1].value !== "") {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));


        window.location.href = 'index.html'
    }

}









