'use strict';

(function($){
	$(document).ready(function() {
		// Code

		$('.menu__burger').click(function() {
			$('.menu__items').toggleClass('active');
		});

		 $('.slider').slick({
		    dots: true,
		    infinite: true,
		    speed: 500,
		    adaptiveHeight: true,
		    prevArrow: '<img class="slick-prev" src="./images/icon/aleft.png">',
  			nextArrow: '<img class="slick-next" src="./images/icon/aright.png">'
		 });

		 $('.team-slider').slick({
		    dots: false,
		    infinite: true,
		    speed: 500,
		    adaptiveHeight: true,
		    slidesToShow: 3,
		    prevArrow: '<img class="slick-p" src="./images/icon/baleft.png">',
  			nextArrow: '<img class="slick-n" src="./images/icon/baright.png">'
		 });

	});
})(jQuery);
