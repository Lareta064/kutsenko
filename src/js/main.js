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

})