function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("click", function (event) {
    if (event.target instanceof Element && event.target.closest(".modal__link")) {
        event.preventDefault();
    }
});