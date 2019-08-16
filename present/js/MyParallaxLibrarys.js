(function (window){

  function define_library() {
     var paralaxA = {};
     paralaxA.init = function(elem) {
        var paralax = document.querySelectorAll(elem);


       window.addEventListener('scroll', function(event){
            var offset = window.pageYOffset;
            paralax.forEach(function(el){
               var speed = el.getAttribute('data-paralax-speed');
               el.style.backgroundPositionY = (offset - el.offsetTop) * speed + 'px';
            });

       }, false);
       
  }
  return paralaxA;
  }

  if(typeof (paralaxA) === 'undefined') {
     window.paralaxA = define_library();
  }
  else{
     console.log('����������� ��� �������');
  }
})(window);

// �� ������ ���������������� ���������� paralaxA.init(���� �����)