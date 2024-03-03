const imgOne = document.getElementById("img1");
const imgTwo = document.getElementById("img2");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
    const tempSrc = imgOne.src;
    imgOne.src = imgTwo.src;
    imgTwo.src = tempSrc;
});
