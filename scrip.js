let menu = document.querySelector("#menu");
let toggleIcon = document.querySelector("#toggle-icon");


toggleIcon.addEventListener("click", function() {
    menu.classList.toggle("menu-on");
});