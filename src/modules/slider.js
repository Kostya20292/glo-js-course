/* eslint-disable no-unused-vars */
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const slider = () => {
  const portfolioSlider = new Swiper('.portfolio .swiper', {
    loop: true,
    centeredSlides: true,
    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.portfolio-dots',
      clickable: true,
    },
    navigation: {
      nextEl: '#arrow-right',
      prevEl: '#arrow-left',
    },
  });

  const companiesSlider = new Swiper('.companies-wrapper.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Autoplay],
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
};
