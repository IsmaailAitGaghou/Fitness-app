const closeMenu = document.querySelector('.close-menu')
const mobielNavigation = document.querySelector('.mobile-navigation')
const overlay = document.querySelector('.overlay')
const burgerIcon = document.querySelector('.toggle-menu')

burgerIcon.addEventListener('click', () => {
    mobielNavigation.classList.add('open')
    openOverlay()
})

closeMenu.addEventListener('click', () => {
    mobielNavigation.classList.remove('open')
    closeOverlay()
})

function openOverlay() {
    overlay.classList.add('open')
}

function closeOverlay() {
    overlay.classList.remove('open')
}