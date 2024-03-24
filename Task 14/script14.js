const list = document.querySelector('ul');
const inp = document.querySelector('input');
const addbtn = document.querySelector('#add');
const removebtn = document.querySelector('#remove');

var li;

addbtn.addEventListener('click', () => {
    let inputVal = inp.value;

    if (inputVal.trim() == "") {
        alert("enter smthn")
        return
    }

    li = document.createElement('li');
    li.innerText = inputVal;

    list.appendChild(li)

    inp.value = ""

});

removebtn.addEventListener('click', () => {
    const lastLi = list.lastChild;
    if (lastLi) {
        list.removeChild(lastLi);
    }
});




