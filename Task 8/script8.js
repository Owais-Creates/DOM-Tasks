const data = [
    {
        Uname: "Owais",
        src: "https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        Uname: "Charan",
        src: "https://images.unsplash.com/photo-1639020715359-f03b05835829?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        Uname: "Chaman",
        src: "https://images.unsplash.com/photo-1642953702322-a5da05d2e36b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        Uname: "Ojas",
        src: "https://images.unsplash.com/photo-1610198437404-7b8af9f1c481?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

]

const cardContainer = document.querySelector('.card-container');
let output = '';

data.forEach((item) => {
    output += `<div class="card">
        <img src="${item.src}" alt="photo">
        <h3>${item.Uname}</h3>
    </div>`;
});

cardContainer.innerHTML = output;

// selecting input
const searchInput = document.getElementById('search');

searchInput.addEventListener("input", function () {
    let newCard = "";

    data.filter((items) => {
        if (items.Uname.toLowerCase().includes(searchInput.value.toLowerCase())) {
            newCard += `<div class="card">
            <img src="${items.src}" alt="photo">
            <h3>${items.Uname}</h3>
        </div>`
        }
    })

    cardContainer.innerHTML = newCard;
})







