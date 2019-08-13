$(document).ready(function() {

    let mailInfo ={
        beforeSend:'<img src="img/loading.gif" alt="Отправка...">',
        fail:'Какие-то неполадки,  сообщение не отправленно.',
        success: 'Ваше сообщение отправленно.'
    }

    $('#contact_form').on('submit', function(event) {
        event.preventDefault();
        let data = $(this).serialize();
        $.ajax({
            url:'ajax/send.php',
            type:'post',
            cache:false,
            data:data,
            dataType:'html',
            beforeSend:function() {
                $('.contact-btn').prop('disabled', true);
                $('.contact-btn').css('opacity','0.6');
                $('.before').html(mailInfo.beforeSend);
            },
            success: function(data){
                   if(data) {
                    $('.before').html(mailInfo.success);
                    $('.before').css('color', 'green');
                    setTimeout(function() {
                        $('.before').html('');
                        $('.contact-btn').prop('disabled', false);
                        $('.contact-btn').css('opacity','1');
                        $('#contact_form').trigger('reset');
                         
                    },2000);
                   }else{
                    $('.before').html(mailInfo.fail);
                    $('.before').css('color', 'red');
                    setTimeout(function() {
                        $('.before').html('');
                        $('.contact-btn').prop('disabled', false);
                        $('.contact-btn').css('opacity','1');
                        $('#contact_form').trigger('reset');
                         
                    },2000);
                   }
            }
        })
    })

    $('#modal_form').on('submit', function(event) {
        event.preventDefault();
        let data = $(this).serialize();
        $.ajax({
            url:'ajax/send-modal.php',
            type:'post',
            cache:false,
            data:data,
            dataType:'html',
            beforeSend:function() {
                $('.modal-sbm').prop('disabled', true);
                $('.modal-sbm').css('opacity','0.6');
                $('.modal_before').html(mailInfo.beforeSend);
            },
            success: function(data){
                   if(data) {
                    $('.modal_before').html(mailInfo.success);
                    $('.modal_before').css('color', 'green');
                    setTimeout(function() {
                        $('.modal_before').html('');
                        $('.modal-sbm').prop('disabled', false);
                        $('.modal-sbm').css('opacity','1');
                        $('#modal_form').trigger('reset');
                         
                    },2000);
                   }else{
                    $('.modal_before').html(mailInfo.fail);
                    $('.modal_before').css('color', 'red');
                    setTimeout(function() {
                        $('.modal_before').html('');
                        $('.modal-sbm').prop('disabled', false);
                        $('.modal-sbm').css('opacity','1');
                        $('#modal_form').trigger('reset');
                    },2000);
                   }
            }
        })
    })
})
