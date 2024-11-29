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



// === Main codes === //
const card_div = document.querySelector('.card_div');

const postId = JSON.parse(localStorage.getItem("id"));
const user_name = document.querySelector('.user_name');

const email = JSON.parse(localStorage.getItem("email"));
console.log(email);


// user name on top //
user_name.innerHTML = email;



fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => {

        card_div.innerHTML = `
        <div class="single_card">
        <h4>
        Nr. <span>${data.id}</span>
        </h4>
        <h4>
        Title: <span>${data.title}</span>
        </h4>
        <h4>
        Description: <span>${data.body}</span>
        </h4>
        </div>
        `

        console.log(data)

    })