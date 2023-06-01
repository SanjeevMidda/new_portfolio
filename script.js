let scrollToTop = document.querySelector('.scrollUp');
scrollToTop.addEventListener('click', backUp);

function backUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let openModal = document.querySelector('.projectOne'); 

let closeModal = document.querySelector('.close');

let overlay = document.querySelector('.overlay');

let accessing = document.querySelector('.projectOneModal');

openModal.addEventListener('click', opening);
closeModal.addEventListener('click', closing);
overlay.addEventListener('click', closing);

function opening(){
    accessing.classList.add('activeModal');
    overlay.classList.add('activeOverlay');
}

function closing(){
    accessing.classList.remove('activeModal');
    overlay.classList.remove('activeOverlay');
}
