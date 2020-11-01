const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Unity",
				weight: 12.3
			}, {
				text: "Websites",
				weight: 8
			}, {
				text: "C#",
				weight: 14
			}, {
				text: "Java Script",
				weight: 8
			}, {
				text: "Learning",
				weight: 7
			}, {
				text: "Games Programming",
				weight: 10
			}, {
				text: "Python",
				weight: 3
			}, {
				text: "Swift",
				weight: 6
			}, {
				text: "Kristian",
				weight: 15
			}, {
				text: "Student at SAE Institute Berlin",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Game Developer.", "love everything about code.", "also build iOS games.", "solve problems.", "love GameJams", "love working in a team", "love being a entrepreneur :)"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#00400d"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
