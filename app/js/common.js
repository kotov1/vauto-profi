/*LIBS JS END*/

/*CUSTOM JS START*/
$(function() {

	$(".menu-collapsed").click(function() {
		$(this).toggleClass("menu-expanded");
	});


	$('#js-feedbacks').slick({
		infinite: true,
		autoplay: true,
		arrows: false

	});

	$('#js-modal-slider').slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		nextArrow: '<div class="slick-arrow slick-next"></div>'
	});

	

	//Scroll button 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {	
			$('.btn__scroll-up').fadeIn();
		} else {
			$('.btn__scroll-up').fadeOut();
		}
	});

	$('.btn__scroll-up').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});	



	$('.page-content').copyright();




	$('.mfp-btn-form').magnificPopup({
		items: {
			src: '#modal-form-wrap',
			closeBtnInside: true,
			type: 'inline'
		}
	});

	$('.mfp-btn-tel').magnificPopup({
		items: {
			src: '#modal-tel-wrap',
			closeBtnInside: true,
			type: 'inline'
		}
	});

	$('.mfp-image').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		image: {
			cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
			verticalFit: true, // Fits image in area vertically
			tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
		}

});

	



});


ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
        center: [55.887493, 37.653056],
        zoom: 16,
        controls: ['routePanelControl']
    });

    var control = myMap.controls.get('routePanelControl');

    control.routePanel.state.set({
        type: 'driving',
        fromEnabled: true,
        toEnabled: false,
        to: 'Москва, Широкая улица 10'
    });


    control.routePanel.options.set({
        allowSwitch: false,
        reverseGeocoding: true,
        types: { driving: true }
    });
  

});