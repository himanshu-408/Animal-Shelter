'use strict';

let prevBtn = document.querySelector('.main-pets__button--prev');
let nextBtn = document.querySelector('.main-pets__button--next');
let itemsList = document.querySelector('.pets__list');
let items = document.querySelectorAll('.pets__list-item');
let width = 320;
let count = 3;
let position = 0;

prevBtn.addEventListener('click', function() {  
  position += width * count;
  position = Math.min(position, 0);
  itemsList.style.transform = 'translateX(' + position + 'px)';

  nextBtn.classList.remove('main-pets__button--disable');

  if (position === 0) {
    prevBtn.classList.add('main-pets__button--disable');
  }

});

nextBtn.addEventListener('click', function() {  
  position -= width * count;
  position = Math.max(position, -width * (items.length - count));
  itemsList.style.transform = 'translateX(' + position + 'px)';  

  prevBtn.classList.remove('main-pets__button--disable');

  if (position === -width * (items.length - count)) {
    nextBtn.classList.add('main-pets__button--disable');
  }

});
