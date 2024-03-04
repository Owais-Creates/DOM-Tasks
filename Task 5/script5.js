
const profilePicture = document.querySelector("#pp");
const imageValue = document.querySelector("#selected-image");

imageValue.addEventListener("change", function () {
    if (imageValue.files.length > 0) {
        profilePicture.src = URL.createObjectURL(imageValue.files[0]);
    }
});
