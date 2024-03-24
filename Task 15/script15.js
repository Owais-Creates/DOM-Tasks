const text = document.querySelector('#text');
const characters = document.querySelector('p');
const lc = document.querySelector('.lc'); 
const charLimit = 30;
let characCount = 0;

function updateCharacterCount(enteredText) {
  characCount = Math.min(enteredText.length, charLimit); 
  characters.innerText = `Characters - ${characCount}`;

  const progress = characCount / charLimit * 100;
  lc.style.width = `${progress}%`;
}

text.addEventListener('input', () => {
  const enteredText = text.value;
  updateCharacterCount(enteredText);
});

text.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && characCount > 0) {
    const newText = text.value.slice(0, -1); 
    text.value = newText;
    updateCharacterCount(newText);
  }
});


window.addEventListener("load", () => {
    text.value = ''
})