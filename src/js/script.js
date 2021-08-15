window.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger'),
  form = document.querySelector('.form'),
  formClose = document.querySelector('.form__close'),
  bodyLock = document.querySelector('body'),
  mainCard = document.querySelectorAll('.main__card');


// hamburger
hamburger.addEventListener('click', () => {
  form.classList.add('active');
  bodyLock.classList.add('lock');
});

formClose.addEventListener('click', () => {
  form.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// animation
mainCard.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.cssText = `animation: card 1.5s 1 ease-in-out; cursor: pointer`;
  });
});

mainCard.forEach(item => {
  item.addEventListener('mouseleave', () => {
    item.style.cssText = `animation: none; border: none`;
  });
});

// const btnAdd = document.querySelector('.btn'),
// 	inputName = document.querySelector('#name'),
// 	inputDescr = document.querySelector('#description'),
// 	inputLink = document.querySelector('#link'),
// 	inputPrice = document.querySelector('#price');

// console.log(inputPrice);

// btnAdd.addEventListener('click', (e) => {
// 	e.preventDefault();

// });
// document.querySelector('form').submit(function (e) {
// 	e.preventDefault();

// });
});