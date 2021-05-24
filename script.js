(() => {
            // Animate On Scroll
    AOS.init();

            // Hamburger Menu
    const hamburgers = document.querySelectorAll('.hamburger');
    const mobileNav = document.querySelector('.nav-mobile');

    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', () => {
        
            mobileNav.classList.toggle('clicked');
        })
    })



})();