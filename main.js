'use strict'

// Transparent NavBar when it is on top

const navBar = document.querySelector('#navbar')
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navBarHeight = ${navBarHeight}`);

    if(navBarHeight < window.scrollY) {
        navBar.classList.add('navbar__dark')
    } else{
        navBar.classList.remove('navbar__dark')
    }
    
})