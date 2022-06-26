const menu = document.querySelector('.navbar-mobile__btn__image')
const menuImg = document.querySelector('.image')
const hiddenMenu = document.querySelector('.navbar__aside')
const wrapper = document.querySelector('.wrapper')

console.log(hiddenMenu);
console.log(menuImg);
let menuMobileOpen = false
menu.addEventListener('click', () => {
    // if(!menuMobileOpen){
    //     menuMobileOpen = true
    //     setTimeout(() => {
    //         menuImg.style.filter = 'brightness(100)'
    //     }, 100)
    // }
    // else {
    //     wrapper.style = 'max-height: none'

    //     hiddenMenu.style.display = 'none'
    //     hiddenMenu.style.visibility = 'hidden'
    //     menuMobileOpen = false
    //     setTimeout(() => {
    //         menuImg.style.filter = 'brightness(5)'
    //     }, 300)
    // }
    // if(menuMobileOpen) {
    //     hiddenMenu.style.display = 'flex'
    //     hiddenMenu.style.visibility = 'visible'
    //     wrapper.style = 'max-height: 200px'
    
        // setTimeout(() => {
        //     menu.style.filter = 'brightness(5)'
        // }, 300)


        hiddenMenu.classList.toggle('active')
        menuImg.classList.toggle('active__btn')
        wrapper.classList.toggle('active__scroll')
    }
    
    
)
// hiddenMenu.addEventListener('click', () => {
//     wrapper.style = 'max-height: none'

//     hiddenMenu.style.display = 'none'
//     hiddenMenu.style.visibility = 'hidden'
//     menuMobileOpen = false
//     setTimeout(() => {
//         menuImg.style.filter = 'brightness(5)'
//     }, 300)

// })
// btnSign.addEventListener('click', () => {
//     if (nameSign.value === '')
//         var error = document.createElement('div')
//         error.className='error'
//         error.style.color = 'red'
//         error.innerHTML = 'Cannot be blank'
//         document.innerHTML = error
// })