$(function () {
    $('.carousel').carousel({interval: 8000});

	$(document).scroll(function() {    
		var scroll = $(this).scrollTop();
		if (scroll >= 350) {
			$("nav").addClass("on-scroll");
		}
	});
});