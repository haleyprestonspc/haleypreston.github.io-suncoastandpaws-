const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const menuIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("nav-open");
    const menuIsOpen = mainNav.classList.contains("nav-open");
    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
        menuButton.setAttribute("aria-label", "Close navigation");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuButton.setAttribute("aria-label", "Open navigation");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});