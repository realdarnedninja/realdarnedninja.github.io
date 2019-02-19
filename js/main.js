$(document).ready(function() {
	 $(".typed").typed({
		strings: ["^1000 a designer", "a creator", "a maker", "Daniel Rajendran^5000", "looking for a new challenge", "a Londoner", "an 80s kid", "a story teller", "always learning", "a geek", "a developer", "Iron Man", "a tinkerer", "a leaf on the wind", "an explorer", "a HAL 9000 computer", "an illustrator", "the danger", "an adventurer", "a dungeon master", "a writer", "a master builder", "the law", "a marketer", "Legend", "a prototyper", "a wizard", "a gamer", "a movie fanatic", "the one who knocks", "a baker", "a Pokémon Master", "a bookworm", "Groot", "Daniel Rajendran"],
		typeSpeed: 35,
		startDelay: 1000,
		backSpeed: 20,
		preStringTyped: function() {
			// 
		},
		callback: function() {
			//
		}
	});
	var $header = $('body'),
		scrollClass = 'on-scroll',
		activateAtY = 200;

	function deactivateHeader() {
		if (!$header.hasClass(scrollClass)) {
			$header.addClass(scrollClass);
		}
	}

	function activateHeader() {
		if ($header.hasClass(scrollClass)) {
			$header.removeClass(scrollClass);
		}
	}

	$(window).scroll(function() {
		if($(window).scrollTop() > activateAtY) {
			deactivateHeader();
		} else {
			activateHeader();
		}
	});

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});