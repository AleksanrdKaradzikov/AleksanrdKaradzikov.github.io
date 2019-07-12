window.addEventListener('load', loader, false);

var modalBlock = document.querySelector('#modal');

function loader() {
  init();
}
function init() {
    var more = document.querySelectorAll('.more');
    
    more.forEach(function(el) {
      el.addEventListener('click', modal,false);
    })

    var close = document.querySelector('.modal-close');
    close.addEventListener('click', function(){
      modalBlock.classList.remove('active');
    }, false);

}

function modal(event) {

  var content ={
    1:[
      "images/works-cardHair.png"
    ],
    2:[
      "images/brandding.jpg"
    ] ,
    3:[
      "images/branding1.png"
    ],
    4:[
      "images/design1.jpg"
    ],
    5:[
      "images/design2.jpg"
    ],
    6:[
      "images/design3.jpg"
    ],
    7:[
      "images/development1.jpg"
    ],
    8:[
      "images/development2.jpg"
    ],
    9:[
      "images/development3.jpg"
    ],
    10:[
      "images/strategy1.jpg"
    ],
    11:[
      "images/strategy2.jpg"
    ],
    12:[
      "images/strategy3.jpg"
    ]
  }
   
  var dataContent = this.getAttribute('data-content');
  modalBlock.classList.add('active');
  var parent = this.parentElement;
  console.log(parent.firstElementChild.innerHTML);
  var modalImg = modalBlock.querySelector('.modal-img');
  modalImg.src = content[dataContent];
  var contentHeading = modalBlock.querySelector('.modal-content-information h1.modal-heading');
  contentHeading.innerHTML = parent.firstElementChild.innerHTML;
}