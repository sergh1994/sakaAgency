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

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
  });
})();