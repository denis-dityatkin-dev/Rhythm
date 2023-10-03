"use strict"

const reviewsSwiper = document.querySelector(".swiper-reviews");

if(reviewsSwiper){
  const swiper = new Swiper(".swiper-reviews", {
    // Optional parameters
    //   direction: "vertical",
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Автопрокрутка
    // autoplay: {
      // Пауза между прокруткой
      // delay: 1000,
      // Закончить на последнем слайде
      // stopOnLastSlide: true,
      // Отключить после ручного переключения
      // disableOnInteraction: false,
    // },
    // Скорость
    // speed: 2000,
    // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
  });
}