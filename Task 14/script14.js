const list = document.querySelector('ul');
const inp = document.querySelector('input');
const addbtn = document.querySelector('#add');
const removebtn = document.querySelector('#remove');

var li;

addbtn.addEventListener('click', () => {
    const inputVal = inp.value;

    li = document.createElement('li');
    li.innerText = inputVal;

    list.appendChild(li)

});

removebtn.addEventListener('click', () => {
    const lastLi = list.lastChild;  
    if (lastLi) {  
        list.removeChild(lastLi);  
    }
});




