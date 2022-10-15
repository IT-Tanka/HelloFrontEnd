const swiper = new Swiper('.news__slider', {
  loop: true,

  pagination: {
    el: '.news__pagination',
  },

  navigation: {
    nextEl: '.news__slider-left',
    prevEl: '.news__slider-right',
  },
  
  slidesPerView: 3,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
   
    480: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    540: {
      slidesPerView: 1,
      // spaceBetween: 100
    },
    
    640: {
      slidesPerView: 2,
      // spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 30
    }, 
    1024: {
      slidesPerView: 3,
      // spaceBetween: 10
    },
    1170: {
      slidesPerView: 3,
      // spaceBetween: 30
    },
  }, 
});
const headerSwiper = new Swiper('.header__slider', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.header__pagination',
  },


  slidesPerView: 1,
  spaceBetween: 30,
  
});
const swiperPrev = document.querySelector('.news__slider-left');
const swiperNext = document.querySelector('.news__slider-right');

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
});