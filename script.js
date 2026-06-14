// script.js

console.log("Zerith Security Premium Loaded");

const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

  card.addEventListener("mousemove", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});
