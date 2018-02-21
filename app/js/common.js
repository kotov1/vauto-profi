/*LIBS JS END*/

/*CUSTOM JS START*/
$(function() {

	$(".menu-collapsed").click(function() {
		$(this).toggleClass("menu-expanded");
	});


	$('#js-feedbacks').slick({
		infinite: true,
		autoplay: true,
		nextArrow: '<div class="slick-arrow slick-prev"></div>',
		prevArrow: '<div class="slick-arrow slick-next"></div>'

	});

	$('.js-modal-slider').slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		prevArrow: '<div class="slick-arrow slick-prev"></div>'
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
		$('body,html').animate({scrollTop: 0}, 200);
		return false;
	});	



	$('.page-content').copyright();


	$('.mfp-btn-form').magnificPopup({
		items: {
			src: '#modal-info-wrap',
			closeBtnInside: true,
			type: 'inline'
		}
	});

	$('.mfp-btn-form-1').magnificPopup({
		items: {
			src: '#modal-form-wrap-1',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-2').magnificPopup({
		items: {
			src: '#modal-form-wrap-2',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-3').magnificPopup({
		items: {
			src: '#modal-form-wrap-3',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-4').magnificPopup({
		items: {
			src: '#modal-form-wrap-4',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-5').magnificPopup({
		items: {
			src: '#modal-form-wrap-5',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-6').magnificPopup({
		items: {
			src: '#modal-form-wrap-6',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-7').magnificPopup({
		items: {
			src: '#modal-form-wrap-7',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-8').magnificPopup({
		items: {
			src: '#modal-form-wrap-8',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-9').magnificPopup({
		items: {
			src: '#modal-form-wrap-9',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-10').magnificPopup({
		items: {
			src: '#modal-form-wrap-10',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-11').magnificPopup({
		items: {
			src: '#modal-form-wrap-11',
			closeBtnInside: true,
			type: 'inline'
		}
	});
	$('.mfp-btn-form-12').magnificPopup({
		items: {
			src: '#modal-form-wrap-12',
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
		delegate: 'img',
		type: 'image',
		image: {
			cursor: 'mfp-zoom-out-cur',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		}
	});


	$(".send-form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.close();
			$(".form-btn").text("Отправлено");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;

	});	

	$(".page-form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.close();
			$(".page-form-btn").text("Отправлено");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;

	});	

	$(".send-form-tel").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.close();
			$(".form-tel-btn").text("Отправлено");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;

	});

	$(".top-menu").on("click","a", function (event) {
		// event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});



	$(".text-img").click(function(){
		if ($('.img-modal').hasClass('for-img-mod')){

			$('.img-modal').empty().removeClass('for-img-mod');

		}else{

			var mfpImg = $(this).data('mfp');
			$('.img-modal').append('<img src ='+mfpImg+'>');
			$('.img-modal img').css({"width":"300px","margin":"0","height":"260px","display":"block"});

			$('.img-modal').addClass('for-img-mod');
		}
	});

	$(document).mouseup(function (e){
		var div = $(".img-modal");
		if (!div.is(e.target) && div.has(e.target).length === 0) {

			$('.img-modal').empty().removeClass('for-img-mod');

		}
	});



});
