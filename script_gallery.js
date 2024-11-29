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
const img_div = document.querySelector('.img_div')

const user_name = document.querySelector('.user_name');

const email = JSON.parse(localStorage.getItem("email"));
console.log(email);


// user name on top //
user_name.innerHTML = email;



fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(response => response.json())
    .then(data => {

        const twentyImg = data.slice(10, 30)

        console.log(twentyImg)

        twentyImg.map(item =>{
            img_div.innerHTML += `
        <div>
        <img src="${item.category.image}" alt="">
        </div>
        `
        })
    })




















