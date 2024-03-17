
const pBar = document.querySelector('#progess-bar');
let width = 0;
let updateInterval; 

const updateProgress = () => {
    clearInterval(updateInterval); 
    updateInterval = setInterval(() => {
        width += 1;
        pBar.style.width = `${width}%`;
        if (width == 100) {
            clearInterval(updateInterval);
            document.querySelector("#Download").innerHTML = '<p> Download Completed </p>'
        }
    }, 100);
};

document.querySelector('#start').addEventListener('click', updateProgress);
document.querySelector('#reset').addEventListener('click', () => {
    pBar.style.width = '0%'; 
});


