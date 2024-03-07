const filterInput = document.getElementById("search");
const itemList = document.getElementById("itemList").getElementsByTagName("li");

filterInput.addEventListener('input', () => {

    for (i = 0; i < itemList.length; i++) {

        if (itemList[i].innerText.toLowerCase().includes(filterInput.value.toLowerCase())) {
            itemList[i].style.display = "block";
        } else {
            itemList[i].style.display = "none";
        }
    }

})