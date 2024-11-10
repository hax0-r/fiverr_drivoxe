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

Subscribe.addEventListener('click',()=>{
    location.reload()
})