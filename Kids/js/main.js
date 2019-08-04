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