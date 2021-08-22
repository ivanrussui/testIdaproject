window.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
		form = document.querySelector('.form'),
		formClose = document.querySelector('.form__close'),
		bodyLock = document.querySelector('body'),
		mainCard = document.querySelectorAll('.main__card'),
		img = document.querySelectorAll('.card__del'),
		inputName = document.querySelector('#name'),
		inputDescript = document.querySelector('#description'),
		inputLink = document.querySelector('#link'),
		inputPrice = document.querySelector('#price');


	class MenuCard {
		constructor(src, title, descr, price, parentSelector) {
			this.src = src;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<li class="card main__card">
				<img class="card__image" src=${this.src} alt="card">
				<div class="card__text">
				<h3 class="card__header">${this.title}</h3>
				<p class="card__descr">${this.descr}</p>
				<div class="card__price">${this.price} руб.</div>
				</div>
				</li>
				`;
			this.parent.append(element);
		}
	}


	form.addEventListener("submit", (e) => {
		e.preventDefault();
		new MenuCard(
			inputLink.value,
			inputName.value,
			inputDescript.value,
			inputPrice.value,
			'.main .main__catalog'
		).render();
		form.reset();
	});


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