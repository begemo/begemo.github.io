$(function(){
	var $slider = $('.carousel-slick').slick({
		dots: false,
		arrows: true,
		draggable: false,
		fade: false,
		focusOnSelect: true,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		autoplaySpeed: 5000,
		prevArrow: '<div class="arrow prev"></div>',
		nextArrow: '<div class="arrow next"></div>'
	});

});