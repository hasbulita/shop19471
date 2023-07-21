const nav = document.querySelector('.list');
const burger = document.querySelector('.burger');
const navLinkAnim = document.querySelectorAll ('nav_list')

function burgerClick() {
    console.log("burger");
    nav.classList.toggle('list_active');
    burger.classList.toggle('active');
    navLinkAnim.forEach((link, index) => {
        console.log(index)

    )};
}