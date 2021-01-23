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
    
});


// Screen move to section when user click menu Button

const navbarMenu = document.querySelector('#navbar');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
    navbarList.classList.remove('open');

});

// Turn home section to transparent

const homeContainer = document.querySelector('.home__container');

const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY * 2 / homeHeight;

});

// Go to top section when click the arrow button
const arrow = document.querySelector('.arrow');

document.addEventListener('scroll', () => { // if scroll under the home section, display the button
    if(window.scrollY > homeHeight/3){
        arrow.classList.add('visible');
    } else{
        arrow.classList.remove('visible');
    }
});

arrow.addEventListener('click', () => { // if click the button, go to home section
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};

// Filtering works
const categoriesContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.project__container');
const projects = document.querySelectorAll('.project');


categoriesContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;

    if(filter == null) {
        return;         
    }
    // Active
    const selected = document.querySelector('.category__btn.selected');
    selected.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');    
    
    projectContainer.classList.add('anim-out');
    projects.forEach((project) => {
        setTimeout(() => {
            if (filter === '*' || project.dataset.type === filter) {
                project.style.display = 'flex';                           
            }
            else{
                project.style.display = 'none';
            }
            projectContainer.classList.remove('anim-out');
        }, 300);
    })
})


// ToggleButton
const navbarToggleBtn = document.querySelector('.navbar__toggle-Btn');
const navbarList = document.querySelector('#navbar__list');
navbarToggleBtn.addEventListener('click', () => {
    navbarList.classList.toggle('open');
})