// Свайпер
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
        spaceBetween: 5,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
});
// Меню бургер
$(function(){
  $('.btn__burger').click(function(){
    $('.btn__burger').toggleClass('active');
    $('.menu_burger').toggle('active');
    $('.menu_burger').css('display','flex');
  });
});
// Переход на странице по якорю
$(function($){
  $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function(){
    window.location.hash = hash;
    });
  });
});
// Анимация тегов
$(document).ready(function(){
  $('.tags').removeClass('anim');  
});
// Маска формы
$(document).ready(function(){
  $(".telephone__text").mask("+7 (999) 999-99-99");
});
// Показ формы
$('.button, .call, .connection__button').on('click', function(){
  $('.popup').fadeIn(300);
});
// Скрытие формы
$(function(){
  $('.popup').click(function(event){
    if(event.target == this){
      $(this).fadeOut(300);
    }
  });
});
$(function(){
  $('form').each(function () {
        $(this).validate({
          /*errorPlacement(error, element) {
            return true;
          },*/
          focusInvalid: false,
          rules: {
            phone: {
              required: true,
            },
            name: {
              required: true,
              minlength: 5,
            }
          },
          messages: {
            phone: {
              required: 'Нужно что-то ввести'
            },
            name: {
              required: 'Нужно что-то ввести',
              maxlength: 'Нужно ввести максимум 5 букв',
            }
          },
          submitHandler(form) {
          let th = $(form);

          $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
          // eslint-disable-next-line func-names
        }).done(() => {

          console.log('tht')

          th.trigger('reset');
        });

        return false;
        }
      });
    });
});
