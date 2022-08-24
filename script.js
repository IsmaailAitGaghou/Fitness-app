const closeMenu = document.querySelector('.close-menu')
const mobielNavigation = document.querySelector('.mobile-navigation')
const burgerIcon = document.querySelector('.toggle-menu')
const overlay = document.querySelector('.overlay')



function openMobileMenu() {
    mobielNavigation.classList.add('open')
}

function closeMobileMenu() {
    mobielNavigation.classList.remove('open')
}

function openOverlay() {
    overlay.classList.add('open')
}

function closeOverlay() {
    overlay.classList.remove('open')
}

overlay.addEventListener('click', function(e) {
    if(e.currentTarget == e.target) {
        closeMobileMenu()
        closeOverlay()
    }
})

burgerIcon.addEventListener('click', () => {
    openMobileMenu()
    openOverlay()
})

closeMenu.addEventListener('click', () => {
    closeMobileMenu()
    closeOverlay()
})


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // go to some good part of video
        vid.currentTime = 199.7;
      } else {
        if (entry.isIntersecting) {
          vid.play();
        } else {
            vid.pause();
        }
      }
    });
  });
  
  observer.observe(vid);