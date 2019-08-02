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