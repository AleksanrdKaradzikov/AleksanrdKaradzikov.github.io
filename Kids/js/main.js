$(document).ready(function(){
    $('.header-mobile-navigation').hide();
    $('.burg').on('click', function() {
        $(this).toggleClass('active');
        $('.header-mobile-navigation').slideToggle(400);
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
