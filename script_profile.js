// === Navigation bar === //
const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav_menu')
const navLogOut = document.querySelector('.logOut')
const navClose = document.querySelector('.close')


navToggle.onclick = () => {
    navMenu.classList.add('show_menu')
    navLogOut.classList.add('show_menu')
    navToggle.style.display = 'none'
    navClose.style.display = 'block'
}

navClose.onclick = () => {
    navMenu.classList.remove('show_menu')
    navLogOut.classList.remove('show_menu')
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
const user_name = document.querySelector('.user_name');
const input = document.querySelectorAll('.info_input');
const profile_btn = document.querySelector('.profile_btn')
const profileInput = document.querySelector('.profile_input div')
const save_btn = document.querySelector('.save_btn')
const profileImg = document.querySelector('.profile_img img')
const bottom_line = document.querySelectorAll('.bottom_line')
const passwordSvg = document.querySelectorAll('.password')
const error = document.querySelectorAll('.error')

const email = JSON.parse(localStorage.getItem("email"));
const password = JSON.parse(localStorage.getItem("password"));
const image = JSON.parse(localStorage.getItem("image"));


let errorMsg = ""
let profileImage = "https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc="



// username on top //
user_name.innerHTML = email;
input[1].value = email;


// change profile image //
profile_btn.onclick = () => {
    profileInput.style.display = 'flex'
}

profile_btn.ondblclick = () => {
    profileInput.style.display = 'none'
}

function checkImage() {
    if (!image){
        profileImg.src = profileImage
    } else{
        profileImg.src = image
    }
}
checkImage()


// save changes //
save_btn.onclick = () => {

    if (input[0].value === '' && input[2].value === '' && input[3].value === '') {
        return
    }

    // change image //
    let newImage = input[0].value
    if (newImage) {
        profileImg.src = newImage
        localStorage.setItem('image', JSON.stringify(newImage));
    }

    // change password //
    if (input[2].value === ""){
        bottom_line[2].style.borderBottom = '1px solid rgba(255, 255, 255, 0.6);';
        passwordSvg[0].style.stroke = "rgba(255, 255, 255, 0.6)";
        errorMsg = ""
        error[1].innerHTML = errorMsg;
    } else if (input[2].value.length < 6){
        bottom_line[2].style.borderBottom = '1px solid #d21313';
        passwordSvg[0].style.stroke = "#d21313";
        errorMsg = "Password is too short";
        error[1].innerHTML = errorMsg;
    } else if (password === input[2].value) {
        bottom_line[2].style.borderBottom = '1px solid #d21313';
        passwordSvg[0].style.stroke = "#d21313";
        errorMsg = "Password already exists";
        error[1].innerHTML = errorMsg;
    } else {
        let newPassword = input[2].value
        bottom_line[2].style.borderBottom = '1px solid green';
        passwordSvg[0].style.stroke = "green";
        errorMsg = ""
        error[1].innerHTML = errorMsg;
        console.log("newPassword set")
    }

    // double check new password //
    if (input[3].value === ""){
        bottom_line[3].style.borderBottom = '1px solid rgba(255, 255, 255, 0.6);';
        passwordSvg[1].style.stroke = "rgba(255, 255, 255, 0.6)";
        errorMsg = ""
        error[2].innerHTML = errorMsg;
    } else if (input[3].value === password) {
        bottom_line[3].style.borderBottom = '1px solid #d21313';
        passwordSvg[1].style.stroke = "#d21313";
        errorMsg = "Password already exists";
        error[2].innerHTML = errorMsg;
    } else if (input[3].value === input[2].value && input[2].value !== "") {
        console.log("Valid email password!");
        bottom_line[3].style.borderBottom = '1px solid green';
        passwordSvg[1].style.stroke = "green";
        errorMsg = ""
        error[2].innerHTML = errorMsg;
    } else {
        console.log("Invalid password.");
        bottom_line[3].style.borderBottom = '1px solid #d21313';
        passwordSvg[1].style.stroke = "#d21313";
        errorMsg = "Password does not match!";
        error[2].innerHTML = errorMsg;
    }

    if (errorMsg === "" && input[2].value !== "") {
        localStorage.setItem('password', JSON.stringify(input[2].value));
    }

    profileInput.style.display = 'none'
}





















