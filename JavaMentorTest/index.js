// Паралакс эффект
 window.addEventListener('scroll', function(){
      var offset = window.pageYOffset,
          header = document.querySelector('.header');
          header.style.backgroundPositionY = offset - header.offsetTop * 0.7 + 'px';
      
 })

// Отправка данных на сервер и вывод категорий на экран
// Переменная message содержит объект со статусом загрузки
var message = {
    loading: '<img src="image/loading.webp">',
    success:"Загрузить",
    failure: 'Что-то пошло не так...'
},
    statusMessage = document.createElement('div'),// новый элемент div сюда вывожу  статус загрузки
    content = document.querySelector('.content'),
    form = document.querySelector('.rating-form'), 
    send = document.querySelector('.download');

    statusMessage.classList.add('status');
    form.appendChild(statusMessage);


window.addEventListener('load', loader,false);

function loader(event){
    send.addEventListener('click',validate,false); // обрабатываю событие клика по кнопке
}

function validate(event) {
        // получаю значение выбранное пользователем и вызываю функцию getNews,
        // передаю параметр url и callback
        event.preventDefault();
        var group = document.querySelector('.rating-select').value,
            param = "group=" + encodeURIComponent(group),
            url = 'https://frontend-test-api.alex93.now.sh/api/languages?' + param;

            console.log(param);
            console.log(url);

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
            statusMessage.style.color= "red";
        }
        else{
            try{
                // конвентирую полученный ответ с сервера в виде JSON в обычный обьект
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
        content.innerHTML = '';
        
}

// функцтя showNews принимает объект с данными, 
//проверяет наличиие свойста logo и выводит инормацию на экран
function showNews(data){

        var  news = data.data;
             
        for(var key in news){
           if(news[key].hasOwnProperty('logo') == true){
                 content.innerHTML += 
                    `<div class="content-block">
                            <div class="img-block">
                            <img src="${news[key]['logo']}">
                            </div>
                            <div class="discription">
                            <p class="name">${news[key]['name']}</p>
                            <p class="year">Основан в ${news[key]['year']} году</p>
                            <p class="project">${news[key]['projectsCount']} проектов на GitHub</p>
                            <a class="doc" href="${news[key]['docs']}" target="_blank">Документация</a>
                            </div>
                    </div>`;     
           }
        }
 }
            
