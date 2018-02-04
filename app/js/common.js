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




});