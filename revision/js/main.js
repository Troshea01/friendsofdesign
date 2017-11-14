$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollOverflow: true
	});

	$.fn.fullpage.setAllowScrolling(false);
	$.fn.fullpage.setKeyboardScrolling(false);
});

var introVideo = videojs('intro', {
  controls: true,
  autoplay: true,
  preload: 'auto'
});

introVideo.on('canplaythrough', function() {
	var body = document.getElementsByTagName('body')[0];

	body.classList.remove('is-loading');

	$.fn.fullpage.setAllowScrolling(true);
	$.fn.fullpage.setKeyboardScrolling(true);
});