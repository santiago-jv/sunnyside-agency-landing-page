const navbar = document.querySelector('.header__navbar');
const menuIcon = document.querySelector('.header__menu-icon');

menuIcon.addEventListener('click', (event)=>{
    navbar.classList.toggle('header__navbar--visible');
})