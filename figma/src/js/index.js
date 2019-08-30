import '../scss/style.scss';

let  search = document.querySelector('.search-block__img');
let  searchInput = document.querySelector('.search-block__input-search');
let groupLogo = document.querySelector('.brand-block__logo');
let moreBtn = document.querySelectorAll('.more');



search.addEventListener('click', function() {
    searchInput.classList.toggle('active-input');
    groupLogo.classList.toggle('hidden');
})

moreBtn.forEach(function(el) {
    el.addEventListener('click', function(event) {
        this.classList.toggle('more--active');
        let hiddenBlock = this.previousElementSibling;
        console.log(hiddenBlock);
        if(hiddenBlock.style.maxHeight){
             hiddenBlock.style.maxHeight = null;
        }else{
            hiddenBlock.style.maxHeight = hiddenBlock.scrollHeight + 'px';
        }
    })
})


let mobileSearchInput = document.querySelector('.mobile-search-block__input-search');
let mobileSearch = document.querySelector('.mobile-search-block__img');
let mobileGroupLogo = document.querySelector('.mobile-brand-block__logo');
let burgMenu = document.querySelector('.burg-block');
let mobileMenu = document.querySelector('.navbar-container');
let closeMenu = document.querySelector('.close-block');
let overflowWrapp = document.querySelector('.overflow-wrapp');
let showFeedbackBtn = document.querySelector('.show-feedback-modal');
let feedbackModal = document.querySelector('.modal-feedback');
let closeFeedbackBtn = feedbackModal.querySelector('.modal-feedback__close');
let modalPnone = document.querySelector('.modal-phone');
let showPhoneBtn = document.querySelector('.show-phone-modal');
let closePhoneBtn = document.querySelector('.modal-phone__close');


mobileSearch.addEventListener('click', function() {
     mobileSearchInput.classList.toggle('active-input');
     mobileGroupLogo.classList.toggle('hidden');
})

burgMenu.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overflowWrapp.classList.add('overflow-wrapp--active');
});

closeMenu.addEventListener('click', function() {
    overflowWrapp.classList.remove('overflow-wrapp--active');
    mobileMenu.classList.remove('active');
     mobileSearchInput.classList.remove('active-input');
     mobileSearchInput.value = '';
     mobileGroupLogo.classList.remove('hidden');
});

showFeedbackBtn.addEventListener('click', function() {
    feedbackModal.classList.add('feedback-modal--active');
    if(overflowWrapp.classList.contains('overflow-wrapp--active')){
        console.log('good');
    }else{
        overflowWrapp.classList.add('overflow-wrapp--active'); 
    }
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active');
    }
    
})

closeFeedbackBtn.addEventListener('click', function() {
    feedbackModal.classList.remove('feedback-modal--active');
    overflowWrapp.classList.remove('overflow-wrapp--active');
})

showPhoneBtn.addEventListener('click', function() {
    modalPnone.classList.add('feedback-modal--active');
    if(overflowWrapp.classList.contains('overflow-wrapp--active')){
        console.log('good');
    }else{
        overflowWrapp.classList.add('overflow-wrapp--active'); 
    }
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active');
    }
})

closePhoneBtn.addEventListener('click', function() {
    modalPnone.classList.remove('feedback-modal--active');
    overflowWrapp.classList.remove('overflow-wrapp--active');
})
