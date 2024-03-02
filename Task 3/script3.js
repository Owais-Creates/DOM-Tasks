const heading = document.getElementById("heading")
const img = document.getElementById("image");
const btn = document.getElementById("button");

let toggle = true;

const toggleImage = () => {

    if (toggle) {
        heading.innerText = "IMAGE IS HIDDEN";
        btn.innerText = "SHOW IMAGE";
        img.style.display = 'none';
    } else {
        heading.innerText = "IMAGE IS VISIBLE"
        btn.innerText = "HIDE IMAGE";
        img.style.display = 'block';
    }

    toggle = !toggle;
    return;
}

btn.addEventListener('click', toggleImage)