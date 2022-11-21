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
  const swiper3 = new Swiper('#homePackages', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '#homePackagesNext',
      prevEl: '#homePackagesPrev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

// header menu toggle
{
  const menuIconElm = document.querySelector('#menuIcon');
  const menuListElm = document.querySelector('#menuList');
  menuIconElm?.addEventListener('click', function () {
    if (menuListElm?.classList.contains('hidden')) {
      menuListElm?.classList.remove('hidden');
    } else {
      menuListElm?.classList.add('hidden');
    }
  });
}

// accordions

const accordionItems = [
  {
    id: 'accordion-collapse-heading-1',
    triggerEl: document.querySelector('#accordion-collapse-heading-1'),
    targetEl: document.querySelector('#accordion-collapse-body-1'),
    active: true,
  },
  {
    id: 'accordion-collapse-heading-2',
    triggerEl: document.querySelector('#accordion-collapse-heading-2'),
    targetEl: document.querySelector('#accordion-collapse-body-2'),
    active: false,
  },
  {
    id: 'accordion-collapse-heading-3',
    triggerEl: document.querySelector('#accordion-collapse-heading-3'),
    targetEl: document.querySelector('#accordion-collapse-body-3'),
    active: false,
  },
];

accordionItems.forEach((item) => {
  item?.triggerEl?.addEventListener('click', function (e) {
    const hasClass = item.targetEl.classList.contains('hidden');
    const upArrow = item.triggerEl.querySelector('.upArrow');
    const downArrow = item.triggerEl.querySelector('.downArrow');

    if (hasClass) {
      item.targetEl.classList.remove('hidden');
      upArrow.classList.remove('hidden');
      downArrow.classList.add('hidden');
    } else {
      item.targetEl.classList.add('hidden');
      upArrow.classList.add('hidden');
      downArrow.classList.remove('hidden');
    }
  });
});
