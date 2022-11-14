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
