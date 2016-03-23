$(document).ready(function(){
	var altura = $('.nav-prin').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.nav-prin').addClass('menu-fixed');
		} else {
			$('.nav-prin').removeClass('menu-fixed');
		}
	});

});
