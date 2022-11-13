var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});
var swiper2 = new Swiper('#packages', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '#packageNext',
    prevEl: '#packagePrev',
  },
});
