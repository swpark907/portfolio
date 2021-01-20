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
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})