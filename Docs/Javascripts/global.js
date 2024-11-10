// smooth Scroll

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// logoes

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

// clients

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

const toptoScroll = document.getElementById("toptoScroll")

window.onscroll = function () {
    if (window.scrollY > 300) {
        toptoScroll.style.display = "block";
    } else {
        toptoScroll.style.display = "none";
    }
};
toptoScroll.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Subscribe = document.getElementById("Subscribe");

Subscribe.addEventListener('click', () => {
    location.reload()
})

const responsive_navbar = document.getElementById("responsive_navbar");
const closeNav = document.getElementById("closeNav");
const openNav = document.getElementById("openNav");

openNav.addEventListener('click', () => {
    responsive_navbar.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    responsive_navbar.style.width = "0%"
})

setTimeout(() => {
    const loaderDiv = document.querySelector('.LoaderDiv2');
    loaderDiv.style.opacity = '0';

    setTimeout(() => {
        loaderDiv.style.display = 'none';
    }, 500);
}, 1000); 