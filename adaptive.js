$(function(){
  $('.header__btn').click(function(){
  	$('.btn__burger').toggleClass('active');
    $('.header__menu').toggle('active');
    $('.header__menu').css('display','flex');
  });
});