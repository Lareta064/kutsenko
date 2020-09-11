$(document).ready(function () {

	$('[data-fancybox="gallery"]').fancybox();

	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ
	let headerSection = document.querySelector('section.quote-block')
	let bg = document.querySelectorAll('.img-quote');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of bg) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}

	});

	// показать/скрыть весь Модуль
	const modulBtn = document.querySelector('.btn-allModul');
	const saleInfo = document.querySelector('#saleInfo');
	const modulBlock = document.querySelector('.modul-block__hidden');
	if (modulBlock) {
		const btnCloseModul = modulBlock.querySelector('.btn-closeModul');
		modulBtn.addEventListener('click', function () {
			// console.log('555');
			this.classList.add('hide');
			modulBlock.classList.add('active');
			saleInfo.classList.add('active');

		});


		if (btnCloseModul) {
			btnCloseModul.addEventListener('click', function () {

				modulBtn.classList.remove('hide');
				modulBlock.classList.remove('active');
				saleInfo.classList.remove('active');

			});
		}
	}
	// VIDEO
	const videoContent = document.querySelector('#videoPlay');
	if (videoContent) {
		const videoBtn = videoContent.querySelector('.video-btn');
		const videoText = videoContent.querySelector('.video-text');
		const videoClip = document.querySelector('#video');
		videoContent.addEventListener('click', function () {
			if (videoClip.paused) {
				videoClip.play();
				videoBtn.style.opacity = "0";
				videoText.style.opacity = "0";
				this.classList.add("active");
			} else {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				videoText.style.opacity = "1";
				this.classList.remove("active");
			}
			//videoClip.play();
		});
		videoClip.addEventListener("ended", function () {
			videoClip.pause();
			videoBtn.style.opacity = "1";
			videoText.style.opacity = "1";
			this.classList.remove("active");
		});
	}


	let bodyEl = $('body');

	function setupPopup(popupClass, openButtonClass, closeButtonClass) {
		$(openButtonClass).click(function () {
			$(popupClass).fadeIn();
			bodyEl.addClass('noscroll');
			return false;
		});
		$(closeButtonClass).click(function () {
			$(this).parents(popupClass).fadeOut();
			bodyEl.removeClass('noscroll');
			return false;
		});
		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$(popupClass).fadeOut();
				bodyEl.removeClass('noscroll');
			}
		});
		$(popupClass).click(function (e) {
			if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();
				bodyEl.removeClass('noscroll');
			}
		});
	}

	setupPopup('.popup-fade-1', '.popup-open1', '.popup-close');
	setupPopup('.popup-fade-2', '.popup-open2', '.popup-close2');
	setupPopup('.popup-fade-3', '.popup-open3', '.popup-close3');
	setupPopup('.popup-fade-4', '.popup-open4', '.popup-close4');

	// slider sertif
	$('.sertificates-slider').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		margin: 20,
		navSpeed: 1000,
		smartSpeed: 1000,
		nav: true,
		navText: ['<span class="arr-left"><i class="fas fa-arrow-left"></i></span>', '<span class="arr-left"><i class="fas fa-arrow-right"></i></span>'],

	});

	//плавающая кнопка
	let element = document.querySelector('#modul-footer');

	let Visible = function (target) {
		// Все позиции элемента
		var targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top,
				left: window.pageXOffset + target.getBoundingClientRect().left,
				right: window.pageXOffset + target.getBoundingClientRect().right,
				bottom: window.pageYOffset + target.getBoundingClientRect().bottom
			},
			// Получаем позиции окна
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

		if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
			targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
			targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
			targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
			// Если элемент полностью видно, то запускаем следующий код
			$('#floatingBtn').removeClass("active");
		} else {
			// Если элемент не видно, то запускаем этот код
			$('#floatingBtn').addClass("active");
		};
	};

	// Запускаем функцию при прокрутке блока

	$(".modul-block__body").on("scroll", function (e) {
		if ($(".modul-block__body").scrollTop() > 0) {
			Visible(element);
		} else {
			$('#floatingBtn').removeClass("active");
		}

	});

	// Навигация по Модулю
	const toggleMenuBtn = document.querySelectorAll(".toggle-menu__btn");
	console.log(toggleMenuBtn)
	for (let i = 0; i < toggleMenuBtn.length; i++) {
		toggleMenuBtn[i].addEventListener('click', function () {
			for (let j = 0; j < toggleMenuBtn.length; j++) {
				toggleMenuBtn[j].classList.remove('active');
			}
			this.classList.add('active');
		})
	}


});