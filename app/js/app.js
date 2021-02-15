$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    autoplay: {
      delay: 60000,
      disableOnInteraction: false
    },
  })

  $('.navigation').on('click', '.navigation__menu_mobile', function () {
    $('.navigation').toggleClass('menu-opened');

  });

});
