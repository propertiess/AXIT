const menu = document.querySelector('.navbar-mobile__btn__image')
const menuImg = document.querySelector('.image')
const hiddenMenu = document.querySelector('.navbar__aside')
const wrapper = document.querySelector('.wrapper')

menu.addEventListener('click', () => {
    hiddenMenu.classList.toggle('active')
    menuImg.classList.toggle('active__btn')
    wrapper.classList.toggle('active__scroll')
})
