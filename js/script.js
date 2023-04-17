console.log("Alloha!");

let button = document.querySelector(".button");
let greeting = document.querySelector(".no-parallax__greeting");

button.addEventListener("click", () => {
    greeting.remove();
});


