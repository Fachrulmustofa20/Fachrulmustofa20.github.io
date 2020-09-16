let nav = document.querySelector('header');
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
