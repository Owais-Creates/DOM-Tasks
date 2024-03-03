
const container = document.querySelector('#main');
        const button = document.querySelector("#btn");

        let toggle = true;
        button.addEventListener("click", () => {
            if (toggle) {
                container.classList.add("dark-mode");
            }
            else {
                container.classList.remove("dark-mode");
            }
            toggle = !toggle;
        });
