const data = [
    {
        title: "What is Netflix",
        desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },

    {
        title: "How much does Netflix cost",
        desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."
    }
]

// filling the data in accordian.


const accordian = document.querySelector(".accordian-container");

data.forEach((item) => {

    const qaContainer = document.createElement("div");
    qaContainer.classList.add('container');

    const question = document.createElement("div");
    question.classList.add('ques');
    question.innerHTML = `<h2>${item.title}</h2> <span>-</span>`;

    const answer = document.createElement('div');
    answer.classList.add('ans');
    answer.innerHTML = `<p>${item.desc}</p>`;

    qaContainer.appendChild(question);
    qaContainer.appendChild(answer);

    accordian.appendChild(qaContainer);

});

const paragraphs = document.querySelectorAll("p");
const questions = document.querySelectorAll(".ques");
const span = document.querySelectorAll(".ques > span");

questions.forEach((ques,index) => {z
    ques.addEventListener("click", () => {

        const answer = ques.nextElementSibling;
        answer.classList.toggle("ans");

        paragraphs.forEach((paragraph) => {
            paragraph.classList.add("custom-paragraph");
        });

        span[index].classList.toggle("rotate");
    });
});




