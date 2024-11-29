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
const chat_box = document.querySelector('.chat_box');
const text = document.querySelector('textarea')
const sendBtn = document.querySelector('.send_svg');


const image = JSON.parse(localStorage.getItem("image"));
const email = JSON.parse(localStorage.getItem("email"));

let defaultImage = "https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc="



// user name on top //
user_name.innerHTML = email;


// check profile picture //
function checkImage() {
    if (!image){
        newImage = defaultImage
    } else{
        newImage = image
    }
}
checkImage()


// send message //
sendBtn.onclick = () => {

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    chat_box.innerHTML += `
    <div class="msg_box">
        <div class="photo_div">
             <img class="msg_photo" src="${newImage}" alt="">
        </div>
        <div class="msg_div">
             <div class="main_msg">
                 <p>${text.value}</p>
             </div>
             <div class="time_div">
                  <p class="time">${formattedTime}</p>
             </div>
        </div>
    </div>
    `

    text.value = ""
}







