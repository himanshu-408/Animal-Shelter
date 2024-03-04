'use strict';

let petsList = document.querySelector('.pets__list');
let modalWrap = document.querySelector('.modal');
let modalWindowAll = document.querySelectorAll('.modal__section');

petsList.addEventListener('click', function(evt) {
  let target = evt.target;

  if (target.closest('a')) {

    for (let modalWindow of modalWindowAll) {
      
      if (target.getAttribute('data-modal') === modalWindow.getAttribute('data-modal')) {
        modalWindow.classList.add('modal--show');
        setTimeout(() => {
          modalWindow.focus();
        }, 1)
      }

    }
    
  }

});


modalWrap.addEventListener('click', function(evt) {
  let target = evt.target;

  for (let modalWindow of modalWindowAll) {

    if (target.closest('button') || target === modalWindow) {
      modalWindow.classList.remove('modal--show');
    }
    
  }

});
  
window.addEventListener('keydown', function(evt) {
  
  for (let modalWindow of modalWindowAll) {
    
    if (evt.code == 'Escape') {
      evt.preventDefault();
      modalWindow.classList.remove('modal--show');
    }
    
  }
  
});