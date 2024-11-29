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
const card_div = document.querySelector('.card_div');
const user_name = document.querySelector('.user_name');

const email = JSON.parse(localStorage.getItem("email"));
console.log(email);


// user name on top //
user_name.innerHTML = email;


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

    const twentyData = data.slice(0, 20)

    twentyData.map(item =>{
        card_div.innerHTML += `
        <a href="singlePost.html">
        <div class="card">
        <div class="inside_card">
        <h4>
        Nr. <span>${item.id}</span>
        </h4>
        <h4>
        Title: <span>${item.title}</span>
        </h4>
        <h4>
        Description: <span>${item.body}</span>
        </h4>
        </div>
        </div>
        </a>
        `

        const post = document.querySelectorAll('.card')

        post.forEach((item, index) => {
            item.onclick = () => {
                const postId = twentyData[index].id

                localStorage.setItem('id', JSON.stringify(postId));
            }
        })
    })
})






























