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

// отправка сообщения пользователем

let msgStatus = {
    loading: '<img src="img/loading.gif" alt="Загрузка...">',
    succsess:'Ваше сообщение отправленно, скоро мы с вами свяжемся!',
    failer:'Что-то пошло не так, сообщение не может быть отправленно'
};

let form = document.querySelector('.contact-form'),
    sbmButton = form.querySelector('.contact-btn'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('loading');

    sbmButton.addEventListener('click', function(event) {
       event.preventDefault();
       form.appendChild(statusMessage); 
       statusMessage.innerHTML ="";

        let name = form.name.value,
            email = form.email.value,
            message = form.message.value;


      
        let param = 'name=' + name + '&email=' + email + '&message=' + message,
            url = 'js/message.json';

            if(name === '' || name.length < 3){
                form.name.style.borderBottom = '1px solid red';
                
            }
            if(email === '' || email.length < 3){
                form.email.style.borderBottom = '1px solid red';
            }

            if(message === '' || message.length < 10){
                form.message.style.borderBottom = '1px solid red';
            }else{
                setMessage(url, function(data) {
                    form.name.style.borderBottom = '1px solid green';
                    form.email.style.borderBottom = '1px solid green';
                    form.message.style.borderBottom = '1px solid green';
                    succsess(data);
                });
            }


           

    });


    function setMessage(url, callback) {

        // let func = callback || function(data){},
           let  request = new XMLHttpRequest();

            request.open('GET', url);
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            
            request.onreadystatechange = function() {
                if(request.readyState != 4) {
                        return false;
                }

                
                sbmButton.disabled = false;
                sbmButton.innerHTML = 'SEND MESSAGE';

                if(request.status !=200){
                    console.log(request.status + ':' + request.statusText);
                    statusMessage.innerHTML = msgStatus.failer;
                }else{
                        // конвентирую полученный ответ с сервера в виде JSON в обычный обьект
                        let data = JSON.parse(request.responseText);
                    // функиция callback с полученным ответом 
                    callback(data);
                }

            };

            statusMessage.innerHTML = msgStatus.loading;
            sbmButton.innerHTML = 'Отправка..';
            sbmButton.disabled = true;
    };


    
 function succsess(data) {
     form.reset();
     statusMessage.innerHTML = data.success;
     
     setTimeout(function() {
        statusMessage.parentElement.removeChild(statusMessage);
        form.name.style.borderBottom = '1px solid #e9dddd';
        form.email.style.borderBottom = '1px solid #e9dddd';
        form.message.style.borderBottom = '1px solid #e9dddd';
     }, 3000)
 }