const swiper = new Swiper(".thumbnails", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper2 = new Swiper(".big-picture", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});