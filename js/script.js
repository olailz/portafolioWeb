  document.addEventListener("DOMContentLoaded", function () {
    const hamburguesa = document.getElementById("hamburguesa");
    const menu = document.getElementById("menu");

    hamburguesa.addEventListener("click", function () {
      menu.classList.toggle("verMenu");
    });
  });