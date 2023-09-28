$(document).ready(function() {
	 $(".typed").typed({
		strings: ["^1000 a designer", "a creator", "a maker", "Daniel Rajendran^5000", "looking for inspiration", "a Londoner", "an 80s kid", "a story teller", "a dice collector", "a code monkey", "Iron Man", "a drone pilot", "a leaf on the wind", "an explorer", "an illustrator", "the danger", "an adventurer", "a dungeon master", "a writer", "a cat person", "a master builder", "the law", "Legend", "a prototyper", "a dog person", "a wizard", "a gamer", "a movie fanatic", "the one who knocks", "a baker", "a Pokémon Master", "a bookworm", "Groot", "adding to this list", "Daniel Rajendran"],
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

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

var myEvents = [
	{
		date: '<img src="img/story-logo-goldsmiths.svg" id="" title="Goldsmiths, University of London logo" alt="Goldsmiths, University of London" />',
		content: '<strong>BSc Interaction Design</strong></br><span class="font-small">The course focused on web design fundamentals, user experience and human interaction design.</span>'
	},
	{
		date: '<img src="img/story-logo-huddle.svg" id="" title="Huddle logo" alt="Huddle" />',
		content: '<strong>Web/Brand Designer</strong></br><span class="font-small">Primary designer for the Marketing team, working across web, email, graphic, and print design</span>'
	},
	{
		date: '<img src="img/story-logo-datasift.svg" id="" title="DataSift logo" alt="DataSift" />',
		content: '<strong>Front-End Designer</strong></br><span class="font-small">Lead design and coding for marketing websites, and supported the product team with UX/UI work</span>'
	},
	{
		date: '<img src="img/story-logo-content-code.svg" id="" title="Content and Code logo" alt="Content and Code" />',
		content: '<strong>Product Designer</strong></br><span class="font-small">Lead design efforts for Fresh Intranet and Fresh Mobile, whilst helping the bids and marketing teams</span>'
	},
	{
		date: '<img src="img/story-logo-concirrus.svg" id="" title="Concirrus logo" alt="Concirrus" />',
		content: '<strong>Senior Product Designer (UI)</strong></br><span class="font-small">Primary designer for Quest Automotive, and key part of introducing a cross-product design system</span>'
	},
	{
		date: '<img src="img/story-logo-proximie.svg" id="" title="Proximie logo" alt="Proximie" />',
		content: '<strong>Senior Product Designer</strong></br><span class="font-small">Lead discovery, research, and design efforts for core new data insights functionality and features</span>'
	},
	{
		date: '<img src="img/story-logo-next.svg" id="" title="The Next Adventure" alt="The Next Adventure" />',
		content: '<strong>An Exciting New Role</strong></br><span class="font-small">I&#39;m currently looking for interesting new opportunities. If you&#39;re looking for a UI-leaning product designer, let&#39;s talk.</span>'
	}
];

$(window).on('resize scroll', function() {
	if ($('#journey').isInViewport()) {
		$('#my-timeline').roadmap(myEvents,{
			eventsPerSlide: 7,
			orientation: 'auto'
		});
		$(window).off(' resize scroll');
	}
});