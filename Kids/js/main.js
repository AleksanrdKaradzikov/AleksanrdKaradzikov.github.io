$(document).ready(function(){
    $('.header-mobile-navigation').hide();
    $('.burg').on('click', function() {
        $(this).toggleClass('active');
        $('.header-mobile-navigation').slideToggle(400);
    });
    // плавный скролл
    $('a[href^="#"]').on('click',function(event) {
        event.preventDefault();
        var _href = $(this).attr('href');
        $('html, body').animate({scrollTop:$(_href).offset().top + 'px'},1000);
        return false;
    });
});

// slick init
// main slick slider
$(document).ready(function(){
    $('.main-slider').slick({
        nextArrow:'<button type="button" class="arrow arrow-right"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',
        prevArrow:'<button type="button" class="arrow arrow-left"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>'
    });

    // parents-slider settings
    
    $('.parents-slider').slick({
        nextArrow:'<button type="button" class="arrow arrow-right"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',
        prevArrow:'<button type="button" class="arrow arrow-left"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>'
    });
});

// модальные окна
// about modal
$(document).ready(function() {
    $('.about-modal, .modal-overlay').hide();
    $('.content-btn').on('click', function() {
            $('.about-modal, .modal-overlay').fadeIn(600);
    $('.close').on('click', function() {
            $('.about-modal, .modal-overlay').fadeOut(600);
        })
    })
});


// preloader
function preloader() {
   $(document).ready(function() {
        
      setInterval(function(){
        let p = $('.preloader');
        p.css('opacity', 0);

        setInterval(function() {
            p.remove();
        },parseInt(p.css('transition-duration') * 1000));

      },1000);

   })
}

preloader();

// gallery

$(document).ready(function() {
    $('#all').attr('disabled', 'disabled');
    $('.gallary-buttuns button').on('click', function() {
        $('#all').attr('disabled', false);
        let get_id = this.id;
        let get_current = $('.photos .' + get_id);

        $('.photo').not(get_current).hide(700);
        $(get_current).show(700);

    });

    $('#all').on('click', function() {
         $('.photo').show(700);
         $('#all').attr('disabled', 'disabled');
    })
});




// fotorama-modal


$(document).ready(function() {
    $('.modal-fotorama').hide();
    $('.fotorama-overlow').hide();
    $('.fotorama-active').on('click', function() {
        $('.modal-fotorama').show(600);
        $('.fotorama-overlow').fadeIn(300);  
    });
    $('.fotorama-close').on('click', function() {
        $('.modal-fotorama').hide(600);
    $('.fotorama-overlow').fadeOut(300);
    })
});

$(function () {
    $('.fotorama').fotorama();
  });



  $(document).ready(function() {
    $('.go_top').hide();
    $(window).on('scroll', function() {
        if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            $('.go_top').fadeIn(600);  
        }else{
            $('.go_top').fadeOut(600);
        }
    });
    $('.go_top').on('click', function() {
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });
  })