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
	// показать все отзывы
	const revBtn = document.querySelector('.btn-allReviews');
	const revItem = document.querySelectorAll('.review-col');
	revBtn.addEventListener('click', function () {
		this.parentElement.classList.add('hide');
		for (let item of revItem) {
			item.classList.add('active');
		}
	});
	// показать/скрыть весь Модуль
	const modulBtn = document.querySelector('.btn-allModul');
	const saleInfo = document.querySelector('#saleInfo');
	const modulBlock = document.querySelector('.modul-block__hidden');
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
	// VIDEO
	const videoContent = document.querySelector('#videoPlay');
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
	})

	let bodyEl = $('body');
	$('.popup-open1').click(function () {
		$('.popup-fade-1').fadeIn();
		bodyEl.addClass('noscroll');
		return false;
	});

	$('.popup-close').click(function () {
		$(this).parents('.popup-fade-1').fadeOut();
		bodyEl.removeClass('noscroll');
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-1').fadeOut();
			bodyEl.removeClass('noscroll');
		}
	});

	$('.popup-fade-1').click(function (e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
			bodyEl.removeClass('noscroll');
		}
	});
	// модал-2
	$('.popup-open2').click(function () {
		$('.popup-fade-2').fadeIn();
		bodyEl.addClass('noscroll');
		return false;
	});

	$('.popup-close2').click(function () {
		$(this).parents('.popup-fade-2').fadeOut();
		bodyEl.removeClass('noscroll');
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-2').fadeOut();
			bodyEl.removeClass('noscroll');
		}
	});

	$('.popup-fade-2').click(function (e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
			bodyEl.removeClass('noscroll');
		}
	});
})