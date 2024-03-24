const downloadbtn = document.querySelector('#download');
const timerbtn = document.querySelector('#timer');
let counter = 5;
let timer;
const timerCountdown = () => {
    timer = setInterval(() => {
        counter -= 1;
        if (counter > 0) {
            timerbtn.innerText = `Download starting in ${counter}`
        } else {
            clearInterval(timer)
            timerbtn.innerText = `Download completed`;
            document.querySelector('body').style.backgroundColor = "red"
            timerbtn.classList.add("style");
            timerbtn.addEventListener('click', ()=>{
                location.reload()
            })
        }
    }, 1000)
}
downloadbtn.addEventListener('click', () => {
    downloadbtn.style.display = "none";
    timerbtn.classList.remove("timer");
    timerCountdown()
});




