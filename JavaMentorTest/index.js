// Паралакс эффект
 window.addEventListener('scroll', function(){
      var offset = window.pageYOffset,
          header = document.querySelector('.header');

          header.style.backgroundPositionY = offset - header.offsetTop * 0.7 + 'px';
      
 })

// Отправка данных на сервер и вывод категорий на экран
// Переменная message содержит статус загрузки
var message = {
    loading: '<img src="image/loading.webp">',
    success:"Загрузить",
    failure: 'Что-то пошло не так...'
},
    statusMessage = document.createElement('div'),// новый элемент div сюда вывожу  статус загрузки
    form = document.querySelector('.rating-form'), 
    send = document.querySelector('.download'); // получаю элемент и классом download

    statusMessage.classList.add('status');
    form.appendChild(statusMessage);


window.addEventListener('load', loader,false);

function loader(event){
    send.addEventListener('click',validate,false); // обрабатываю событие клика по кнопке
}

function validate(event) {
        // получаю значение выбранное пользователем и вызываю функцию getNews, передаю параметр url и callback
        event.preventDefault();
        var groups = document.querySelector('.rating-select').value,
            groups = encodeURIComponent(groups),
            url = 'https://frontend-test-api.alex93.now.sh/api/languages?' + groups;

            // console.log(groups);
            // console.log(url);

            getNews(url, function(data) {
                showNews(data);
            });
}

function getNews(url, callback) {

    var func = callback || function(data){},
        xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        // дожидаюсь полного ответа от сервера
        if(xhr.readyState != 4) return;

        // по окончанию загрузки
        send.innerHTML = message.success;
        send.disabled = false;
        statusMessage.innerHTML= "";
        
        // проверка status и получение ответа с сервера в виде JSON данных
        if(xhr.status != 200){
            // обрабатываем ошибку
            console.log(xhr.status + ':' + xhr.statusText);
            statusMessage.innerHTML = message.failure;
        }
        else{
            try{
                var data = JSON.parse(xhr.responseText);
            }catch(e){
                console.log('Некорректный ответ: ' + e.message);
            }
            // функиция callback с полученным ответом 
            func(data);
        }
    }

        // Выполнить до получения ответа с сервера
        send.innerHTML = 'Загружаю...';
        send.disabled = true;
        statusMessage.innerHTML = message.loading; 
        
}


function showNews(data){
    // не понимаю как правильно нужно достать данные из объекта и вывести их на экран  по категиям
    var news = {};
        for(var key in data.data){
            console.log(data.data[key]);
            for(var property in data.data[key]){
                console.log(property + ":" + data.data[key][property]);
                news[property] = data.data[key][property]; 
            }
             

               
            //     <div class="img-block">
            //         <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg">
            //     </div>
            //    <div class="discription">
            //         <p class="name">JavaScript</p>
            //         <p class="year">Основан в 1995 году</p>
            //         <p class="project">2131231 проектов на GitHub</p>
            //         <a class="doc" href="#">Документация</a>
            //    </div>
                
         

        }
            
}
