$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('.preloader').fadeOut();

	setTimeout(() => {
		$('.socialmedia').css('margin', '0 10px');
	}, 200);

	setTimeout(() => {
		$('.profile-img').css('opacity', 1);
	}, 500);
});
