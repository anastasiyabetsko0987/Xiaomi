$(function(){
	$('.bike-slider, .slider__items').slick({
		arrows: false, // убрать стрелки
		dots: true, // сделать цифры, которые потом сделаем черточками
		fade: true, // стиль анимации
		autoplay: true, // для автоматического переключения
		autoplaySpeed: 2000,
	});
});