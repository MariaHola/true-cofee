console.log("Alloha!");

let button = document.querySelector(".button");
let greeting = document.querySelector(".no-parallax__greeting");

button.addEventListener("click", () => {
    greeting.remove();
});

let scrollUpBtn = document.querySelector(".js-scrollUpBtn");

scrollUpBtn.addEventListener("click", () => {
    scroll(0, 0);
});



