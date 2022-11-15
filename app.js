{
  const swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
  });
  const swiper2 = new Swiper('#packages', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '#packageNext',
      prevEl: '#packagePrev',
    },
    breakpoints: {
      // when window width is >= 320px
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      960: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
// header menu toggle
{
  const menuIconElm = document.querySelector('#menuIcon');
  const menuListElm = document.querySelector('#menuList');
  menuIconElm.addEventListener('click', function () {
    if (menuListElm.classList.contains('hidden')) {
      menuListElm.classList.remove('hidden');
    } else {
      menuListElm.classList.add('hidden');
    }
  });
}
