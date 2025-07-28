/* ꘏꘏꘏꘏꘏꘏꘏꘏꘏꘏ TOGGLE BUTTON ꘏꘏꘏꘏꘏꘏꘏꘏꘏ */
const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]')
        hamburger.classList.toggle('ri-close-large-line')
    })
})


/* ꘏꘏꘏꘏꘏꘏꘏꘏꘏ SHOW SCROLL UP ꘏꘏꘏꘏꘏꘏꘏꘏꘏ */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up')

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.replace('-bottom-1/2', 'bottom-4')
    } else {
        scrollUpBtn.classList.replace('bottom-4', '-bottom-1/2')
    }
}

window.addEventListener('scroll', scrollUp)


/* ꘏꘏꘏꘏꘏꘏꘏꘏꘏ CHANGE BACKGROUND HEADER ꘏꘏꘏꘏꘏꘏꘏꘏꘏ */
const scrollHeader = () => {
    const header = document.getElementById('navbar')

    if (this.scrollY >= 50) {
        header.classList.add('border-b', 'border-yellow-500')
    } else {
        header.classList.remove('border-b', 'border-yellow-500')
    }
}

window.addEventListener('scroll', scrollHeader)


/* ꘏꘏꘏꘏꘏꘏꘏꘏꘏꘏ SCROLL REVEAL ꘏꘏꘏꘏꘏꘏꘏꘏꘏꘏ */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right');
sr.reveal('.home__image', { delay: 500, scale: 0.5 });
sr.reveal('.service__card, .popular__card', { interval: 150 });
sr.reveal('.about__leaf', { delay: 800, origin: 'right' });
sr.reveal('.review__leaf, .footer__floral', { delay: 800, origin: 'left' });
sr.reveal('.about__item__1-content,.about__item__2-img', { origin: 'right' });
sr.reveal('.about__item__2-content,.about__item__1-img', { origin: 'left' });


/* ꘏꘏꘏꘏꘏꘏꘏꘏꘏꘏ SWIPER SLIDE ꘏꘏꘏꘏꘏꘏꘏꘏꘏꘏ */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    },
})

