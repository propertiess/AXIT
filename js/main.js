const menu = document.querySelector('.navbar-mobile__btn__image')
const menuImg = document.querySelector('.navbar-mobile__btn__image img')
const hiddenMenu = document.querySelector('.navbar__aside')
const wrapper = document.querySelector('.wrapper')
console.log(wrapper);
let menuMobileOpen = false
menu.addEventListener('click', () => {
    if(!menuMobileOpen){
        menuMobileOpen = true

    }
    else {
        wrapper.style = 'max-height: none'

        hiddenMenu.style.display = 'none'
        hiddenMenu.style.visibility = 'hidden'
        menuMobileOpen = false
        setTimeout(() => {
            menuImg.style.filter = 'brightness(5)'
        }, 300)
    }
    if(menuMobileOpen) {
        hiddenMenu.style.display = 'flex'
        hiddenMenu.style.visibility = 'visible'
        wrapper.style = 'max-height: 200px'
    
        // setTimeout(() => {
        //     menu.style.filter = 'brightness(5)'
        // }, 300)
    }
    
    
})
hiddenMenu.addEventListener('click', () => {
    wrapper.style = 'max-height: none'

    hiddenMenu.style.display = 'none'
    hiddenMenu.style.visibility = 'hidden'
    menuMobileOpen = false

})