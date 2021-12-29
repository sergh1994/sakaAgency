const swiper = new Swiper('.swiper', {
  loop: true,

  slidesPerView: 1,

    // If we need pagination
      pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});