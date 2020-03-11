$(function(){
  $('.btn').click(function(){
  	$('.btn__burger').toggleClass('active');
    $('.menu').toggle('active');
    $('.menu').css('display','flex');
  });
});