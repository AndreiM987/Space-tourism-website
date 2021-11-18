const menuButton = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');


menuButton.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible");
    
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        menuButton.setAttribute("aria-expanded", true);
        nav.style.transform = 'translateX(0)';
    } else {
        nav.setAttribute("data-visible", false);
        menuButton.setAttribute("aria-expanded", false);
        nav.style.transform = 'translateX(100%)';
    }

});