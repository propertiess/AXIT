const menu = document.querySelector('.navbar-mobile__btn__image img')
const hiddenMenu = document.querySelector('.navbar__aside')
console.log(menu);
menu.addEventListener('click', () => {
    hiddenMenu.style.display = 'flex'
    hiddenMenu.style.visibility = 'visible'


    setTimeout(() => {
        menu.style.filter = 'brightness(5)'
    }, 500)
    
})