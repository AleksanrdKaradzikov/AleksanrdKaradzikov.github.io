// плавный скролл к якорю
$(document).ready(function() {
    $('a[href^="#"]').on('click', function() {
        let _href = $(this).attr('href');
        $("html, body").animate({
                scrollTop: $(_href).offset().top + 'px'
        },1000);
    })
// map settings
$('.map-block').hide();
$('.map-heading').on('click', function() {
    $(this).toggleClass('active');
    $('.map-block').slideToggle(400);
})
})




// Счетчик лайков

let up = document.querySelectorAll('.up'),
    upRes = document.querySelectorAll('.up-res'),
    countArr = [0, 0, 0];


    if(localStorage.getItem('count')){
        countArr = JSON.parse(localStorage.getItem('count'));
        for(let i = 0; i < upRes.length; i++){
            upRes[i].innerHTML = countArr[i];
        }
    }

    up.forEach(function(item, i) {
        item.addEventListener('click', function() {
            countArr[i]++;
            upRes[i].innerHTML = countArr[i];
            localStorage.setItem('count', JSON.stringify(countArr));
        });
    });
    
 
//    parallax эффект для блока contact

let contact = document.querySelector('.contact');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    
    contact.style.backgroundPositionY = (offset - contact.offsetTop) * 0.7  + 'px';
})