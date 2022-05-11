$(document).ready(function() {
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll > 200) 
		{
			$('nav').css({'box-shadow': '0px 0px 10px black'});
			$('nav').removeClass('bg-none')
			$('nav').addClass('bg-dark')
		} 
		else
		{
			$('nav').css('box-shadow', '');
			$('nav').removeClass('bg-dark')
			$('nav').addClass('bg-none')

		}
	});
});