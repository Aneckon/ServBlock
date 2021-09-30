AOS.init({disable: 'mobile'});

$(document).ready(function() {
  $('.burger__menu').click(function() {
      $('.header__list').toggleClass('open_menu');
      $('.burger__menu').toggleClass('open_img');
  });
});