(function() {

	var links = $('.nav-links a');
	links.each(function() {
		$(this).click(function(event) {
			event.preventDefault();
		});
	});

})();