"use strict"

const input = document.querySelector('input[name="search-planet"')

input.addEventListener('input', (event) => {
	const swipers = document.querySelectorAll('.swiper-slide');
	swipers.forEach(item => {
		item.classList.add('no-active');
	});
	setTimeout(function () {
		if (input.value.trim() === '') {
			swipers.forEach(item => {
				item.classList.remove('no-active');
			});
		}
		else {
			swipers.forEach(item => {
				let index = item.querySelector('#planet').textContent.toLowerCase().indexOf(input.value.toLowerCase());
				if (index >= 0) {
					item.classList.remove('no-active');
				}
			});
		}
	}, 1)
});