const p = document.querySelector('p');

const hexCodeDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]


setInterval(() => {
    let hex = "#";
    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 16) + 1;
    }
    for (i = 0; i < 6; i++) {
        hex += hexCodeDigits[randomNumberGenerator()];
    }
    p.style.color = hex;
}, 1000)

