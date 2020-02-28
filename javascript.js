$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	slidesPerView: 3,
    	loopedSlides: 3,
    	spaceBetween: 30,
    	navigation: {
      		nextEl: '.right',
      		prevEl: '.left',
    	},
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
      1026: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 1,
      },
      414: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
});