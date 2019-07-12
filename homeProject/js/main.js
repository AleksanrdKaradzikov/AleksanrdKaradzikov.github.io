$(document).ready(function() {
    $('.go_top').hide();
    $(window).on('scroll', function(event) {
      //console.log(event);
      if($(this).scrollTop() > 500 || $(document.body).scrollTop() > 500){
        $('.go_top').fadeIn(500);
      }
      else{
        $('.go_top').fadeOut(500);
      }
      if($(this).scrollTop() > 200 || $(document.body).scrollTop() > 200){
        $('header .header-navigation').addClass('fixed');
      }
      else{
        $('header .header-navigation').removeClass('fixed');
      }
       
    })
    $('.go_top').on('click', function() {
      $('html,body').animate({scrollTop:0},1000);
    })

    $('.toggles button').on('click', function() {
      var get_id = this.id;
     // console.log(get_id);
      var get_cuurent = $('.cards .' + get_id);
      $('.card').not(get_cuurent).hide(500);
      $(get_cuurent).show(500);
         
      $('#all').on('click', function() {
        $('.card').show(500);
      });
      
      


    })



  $('a[href^="#"]').on('click',function(event) {
      event.preventDefault();
      var _href = $(this).attr('href');
      console.log(_href);
      $('html, body').animate({scrollTop:$(_href).offset().top + 'px'},1000);

      return false;
  })
});

 $(document).ready(function() {
  $('.burg').on('click', function(event) {
    console.log(event);
   $(this).toggleClass('active');

   var mobileMenu = document.querySelector('.header-mobile-menu');
   if(mobileMenu.style.maxHeight){
     mobileMenu.style.maxHeight = null;
   }
   else{
     mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
   }
});
 });

 window.addEventListener('scroll', function(event){
   console.log(event);
   var offset = window.pageYOffset;
   console.log("Offset: " + offset);
   var box = document.querySelector('header');
   console.log(box);
   box.style.backgroundPositionY = offset * 0.7 + 'px';
 }, false);