'use strict';

(function($){
	$(document).ready(function() {
	// Code

	//Burger-menu
	$(function(){
		$('.header__burger').on('click', function(){
			
			$('.header-menu__items').slideToggle(300, function(){
				
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}			
			});	
	 	});
	});

	$(document).not(".header-menu__items").click(function() {
	  $('.header-menu__items').animate({
	        display:"none"
	    });
	});


	//Scrolling
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	  $('body').append('<a href="#" id="go-top"><img src="images/icon/atop.png" alt="lift"></a>');
		});

		$(function() {
		 $.fn.scrollToTop = function() {
		  $(this).hide().removeAttr("href");
		  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
		  var scrollDiv = $(this);
		  $(window).scroll(function() {
		   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
		   else $(scrollDiv).fadeIn("slow")
		  });
		  $(this).click(function() {
		   $("html, body").animate({scrollTop: 0}, "slow")
		  })
		 }

		$(function() {
		 $("#go-top").scrollToTop();
		});

		$('.menu__burger').click(function() {
			$('.menu__items').toggleClass('active');
		});

	//Sliders
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
			nextArrow: '<img class="slick-n" src="./images/icon/baright.png">',
			responsive: [
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 2,
		      }
		    },

		    {
		      breakpoint: 721,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	 });

	 //Map
	 function initMap() {
	  	var mapCenter = {lat: -7.939324, lng: 112.632663};
	  	var mapDiv = document.getElementById('map');
	  	mapsTypeId: google.maps.MapTypeId.ROADMAP

	  	var map = new google.maps.Map(document.getElementById('map'), {
	  		zoom: 15,
	  		center: mapCenter,
	  		disableDefaultUI: true,
	  		styles: [
	  		{
	  			"elementType": "geometry.fill",
	  			"stylers": [
	  			{
	  				"color": "#c8c4da"
	  			},
	  			{
	  				"visibility": "on"
	  			},
	  			{
	  				"weight": 1.5
	  			}
	  			]
	  		}
	  		]
	  	});

	  	var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(-7.930695, 112.637768),
	    	map: map,
	    	icon: "images/icon/pin.png",
	  	});
	  }

	  window.onload = initMap;

	});
})(jQuery);
