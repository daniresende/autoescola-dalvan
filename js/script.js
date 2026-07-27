const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true  
    },


    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});