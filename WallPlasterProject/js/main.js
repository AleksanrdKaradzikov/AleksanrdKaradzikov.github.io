
// wow init
  var wow = new WOW();
  wow.init();
  // Скрипт отправки письма на почту с помощью ajax
  $(document).ready(function() {
    $("#phone").mask("+7 (999) 999-99-99");
    $('.error').hide();
    $('.error').css('color', 'red');
    $('.send-btn').on('click', function(event) {
       event.preventDefault();
       var  form = $('.modal-form'),
            userName = $('.name').val(),
            userTel = $('.tel').val(),
            userMsg = $('.modal-message').val();
            fail = false;

            if(userName < 3){
              fail = "Имя не менее трех символов"; 
              $('.name').css('border-color','red');
            }
            if(userTel < 10 ) {
              fail = "Введите корркетный мобильный телефон";
              $('.tel').css('border-color','red');
            }
            if(userMsg < 20) {
              fail = "Сообщение не менее 20 символов";
              $('.modal-message').css('border-color','red');
            }

            if(fail != false){
              $('.error').html(fail);
              $('.error').show();
              return false;
            } 
            else{
             $(form).find('input,textarea').val('');
             alert('Сообщение отправленно');
            }
    })
 });


 // Скрипт для плавного скролла до якорного элемента
 // $(document).ready(function() {
 //     $('a[href=^"#"]').on("click", function(event) {
 //       event.preventDefault();
 //        var _href = $(this).attr('href');
 //        $('html,body').animate({
 //          scrollTop: $(_href).offset().top
 //        },1000);

 //        return false;
 //     })
 // })

paralaxA.init('.parallax');


 $(document).ready(function(){
     $('.modal-btn, .price-header-btn').on('click', function(event) {
        event.preventDefault();
        $('.modal-overflay').fadeIn(300);
     });
     $('.modal-close').on('click', function(event) {
       event.preventDefault();
       $('.name').val('');
       $('.tel').val('');
       $('.modal-message').val('');
       $('.name').css('border-color','#dddddd');
       $('.tel').css('border-color','#dddddd');
       $('.modal-message').css('border-color','#dddddd');
       $('.modal-overflay').fadeOut(300);
     })


   //  slick init  (слайдер с отзывами)
   $('.feedback-slider').slick({
       prevArrow:'<button type="button" class="feedback-slider-btn feedback-slider-btn_prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
       nextArrow:'<button type="button" class="feedback-slider-btn feedback-slider-btn_next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>'
   });


   // slick init  (слайдер с преимуществами)
    $('.features-slider').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay:false,
       responsive: [
         {
           breakpoint: 991,
           settings: {
             prevArrow:'<button type="button" class="prev arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
             nextArrow:'<button type="button" class="next arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 767,
           settings: {
             prevArrow:'<button type="button" class="prev arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
             nextArrow:'<button type="button" class="next arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
    });

   //  materials-slider
   $('.materials-slider').slick({
     infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay:false,
       responsive:[
       {
           breakpoint: 991,
           settings: {
             prevArrow:'<button type="button" class="prev materials-arrow materials-arrow-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
             nextArrow:'<button type="button" class="next materials-arrow materials-arrow-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 767,
           settings: {
             prevArrow:'<button type="button" class="prev materials-arrow materials-arrow-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
             nextArrow:'<button type="button" class="next materials-arrow materials-arrow-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   });
 });

