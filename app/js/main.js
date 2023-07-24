$(function () {
  $('.burger').on('click', function () {
    $('.header__menu-list').toggleClass('header__menu-list--active');
  });

  $('.slider__list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       arrows: false,
       autoplay: true
  });
})