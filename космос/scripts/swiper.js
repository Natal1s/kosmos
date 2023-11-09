"use strict"

/********** Initialize Swiper ***********/
var swiper = new Swiper(".swiper-main", {
    grabCursor: true,
    centeredSlides: true,
	slidesPerView: 1,

	pagination: {
		el: '#swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '#swiper-button-next',
		prevEl: '#swiper-button-prev'
	},
});