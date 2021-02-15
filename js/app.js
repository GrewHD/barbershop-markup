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


  //login modal
  $('.js-login').on('click', function (e) {
    e.preventDefault();
    $('.modal--login').fadeIn(400);
  });

  $('.modal__close').on('click', function (e) {
    e.preventDefault();
    $('.modal--login').fadeIn(400);
  });

  $(document).on('mouseup', function (event) {
    const loginModal = $('.modal__window');
    if (!loginModal.is(event.target) && loginModal.has(event.target).length === 0) {
      $('.modal').fadeOut(400);
    }
  })
});
