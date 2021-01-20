'use strict'

// Transparent NavBar when it is on top

const navBar = document.querySelector('#navbar')
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(navBarHeight < window.scrollY) {
        navBar.classList.add('navbar__dark')
    } else{
        navBar.classList.remove('navbar__dark')
    }
    
})


// Screen move to section when user click Button

const navbarMenu = document.querySelector('#navbar__list');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});

})

// Turn home section to transparent

const homeContainer = document.querySelector('.home__container');

const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY * 2 / homeHeight;

})