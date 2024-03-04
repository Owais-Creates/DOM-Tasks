const container = document.querySelector('.container');
const heading = document.createElement('h1');
const dropDownElem = document.createElement('select');

// adding h1 
heading.innerText = "Fruits list";
container.appendChild(heading);

// creating options for the dropdown menu
const dropDownMenu = () => {
    let list = ["apple", "orange", "pineapple", "banana"];

    list.forEach((value)=> {
        let option = document.createElement("option");
        option.innerText = value;
        dropDownElem.appendChild(option);
    })
};
dropDownMenu()

container.appendChild(dropDownElem);

