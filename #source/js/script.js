//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.header-middle').addClass('scroll');
	} else {
		$('.header-middle').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu').hasClass('active')) {
		$('.header-menu,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//
//====================  Video  ========================//
$('.video-play').click(function () {
	$('#video').get(0).play();
	$(this).fadeOut();
	$('.video__poster').fadeOut();
});
//====================  <!-- Video -->  ========================//

$('.header-menu__link ').click(function (e) {
	e.preventDefault();
	$('.header-menu__link').removeClass('active');
	$(this).addClass('active');

});
/*
$('.tariffs-item__favorite').click(function () {
	$('.tariffs-item__favorite').removeClass('favorite-add').html('<i class="far fa-star"></i>');
	$(this).addClass('favorite-add').html('<i class="fas fa-star"></i>');
});
*/
//

$('.tariffs-item__favorite').click(function () {
	if ($(this).hasClass('favorite-add')) {
		$(this).removeClass('favorite-add').html('<i class="far fa-star"></i>');
	} else {
		$(this).addClass('favorite-add').html('<i class="fas fa-star"></i>');;
	}
});

$('.reviews-slider').slick({
	autoplay: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 792,
			settings: {
				slidesToShow: 1,
			}
		}
	]
})