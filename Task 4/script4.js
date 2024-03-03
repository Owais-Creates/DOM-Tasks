const userName = document.querySelector('#userName')
const pass = document.querySelector('#password')
const btn = document.querySelector('#btn');
const form = document.querySelector('#frm');

const formSubmission = form.addEventListener( 'submit', (e) => {
    e.preventDefault();

    if(userName.value.length < 3 || pass.value.length < 8){
        alert("Form validation failed (Your userName must be more than 3 characters long and your password should be more than 8 characters long)");
        userName.value = "";
            pass.value = "";
    }else{
        alert("Form validation successfull");
        userName.value = "";
            pass.value = "";
    }
});

// resetting the values of input fields when user reloads the page.
window.addEventListener('load', function () {
    userName.value = "";
});

