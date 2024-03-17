const str = 'ABCDEFancd@#%^&*';
let result = '';

for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * 15) + 1;
    result += str[randomNumber] + ' ';
    document.getElementById('p').innerText = result;
};





