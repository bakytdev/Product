const checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1140: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
