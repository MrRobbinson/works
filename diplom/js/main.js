
(function () {
	//dropdown-menu
	document.addEventListener('click', function (e) {
		// Ищем клик по второму пункту меню
		const solutionsLink = e.target.closest('.nav__list > .nav__item:nth-child(2) .nav__link');
		const solutionsItem = document.querySelector('.nav__list > .nav__item:nth-child(2)');

		// Если клик по Solutions - добавляем/убираем модификатор
		if (solutionsLink) {
			e.preventDefault();
			solutionsItem.classList.toggle('nav__item--dropdown');
		}
		else {
			solutionsItem.classList.remove('nav__item--dropdown');
		}
	});

	//burger-menu
	document.addEventListener('click', burgerInit)
	function burgerInit(e) {

		const burgerIcon = e.target.closest('.burger-icon')
		const burgerNavLink = e.target.closest('.nav__link')
		const burgerNavSubLink = e.target.closest('.nav__sublink')
		const solutionsLink = e.target.closest('.nav__item:nth-child(2) .nav__link')

		if (!burgerIcon && !burgerNavLink && !burgerNavSubLink) {
			return
		}

		if (document.documentElement.clientWidth > 900) { return }

		if (solutionsLink) {
			e.preventDefault();
			return;
		}

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	// sliders
	const swiper = new Swiper('.hero__slider', {

		slidesPerView: 1,
		spaceBetween: 30,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
})()