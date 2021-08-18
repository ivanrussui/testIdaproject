window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger'),
    form = document.querySelector('.form'),
    formClose = document.querySelector('.form__close'),
    bodyLock = document.querySelector('body'),
    mainCard = document.querySelectorAll('.main__card'),
    img = document.querySelectorAll('.card__del');

  // animation & img
  mainCard.forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
      item.style.cssText = `animation: card 1.5s 1 ease-in-out; cursor: pointer;`;
      img[i].classList.add('img_del');
    });
  });

  mainCard.forEach((item, i) => {
    item.addEventListener('mouseleave', () => {
      item.style.cssText = `animation: none; border: none`;
      img[i].classList.remove('img_del');
    });
  });

  // delCard
  img.forEach((item, i) => {
    item.addEventListener('click', () => {
      mainCard[i].remove();
    });
  });

  // hamburger
  hamburger.addEventListener('click', () => {
    form.classList.add('active');
    bodyLock.classList.add('lock');
  });

  formClose.addEventListener('click', () => {
    form.classList.remove('active');
    bodyLock.classList.remove('lock');
  });
});
