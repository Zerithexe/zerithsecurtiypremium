// script.js

console.log("Zerith Security Premium aktif.");

const commands = document.querySelectorAll(".cmd");

commands.forEach(cmd => {

  cmd.addEventListener("mouseenter", () => {

    cmd.style.transform = "scale(1.08)";

  });

  cmd.addEventListener("mouseleave", () => {

    cmd.style.transform = "scale(1)";

  });

});
