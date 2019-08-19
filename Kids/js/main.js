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
    $('.services-nav a[href^="#"]').on('click',function(event) {
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
    
    $('.services-block .img-block').slick({
        nextArrow:'<button type="button" class="arrow arrow-right">&rsaquo;</button>',
        prevArrow:'<button type="button" class="arrow arrow-left">&lsaquo;</button>',
    });

    $('.children-slider').slick({
        autoplay: true,
        dots: true,
        nextArrow:'<button type="button" class="arrow arrow-right">&rsaquo;</button>',
        prevArrow:'<button type="button" class="arrow arrow-left">&lsaquo;</button>',
        adaptiveHeight: true
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
            $('#modal_form').trigger('reset');
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

      },1200);

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

$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.dropdown').not($next).slideUp().prev().removeClass('open');

      }
    }
    
    var accordion = new Accordion($('.services-price'), false);
  })






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

  