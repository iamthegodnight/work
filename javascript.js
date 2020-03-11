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
      1025: {
        slidesPerView: 3,
      },
      970: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
});