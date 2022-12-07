document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', { delay:450 });
ScrollReveal().reveal('.banner-one', { delay:450 });
ScrollReveal().reveal('.banner-two', { delay:450 });