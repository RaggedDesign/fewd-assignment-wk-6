$(document).ready(function() {

	function setImage() {
		// get the VAL of input in #city.type
		// assign that VAL as the city
		var city = $('#city-type').val();
		// if city = austin or atx
		// change class on body to .austin
		if (city === 'Austin' || city === 'ATX') {
			$('body').attr('class', 'austin');
		}
		// else if los angeles or la or lax - .la
		else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').attr('class', 'la');
		}
		// else if new york or new york city or nyc - .nyc
		else if (city === 'New York' || city === 'New York City' || city === 'NYC') {
			$('body').attr('class', 'nyc');
		}
		// else if san francisco or sf or bay area - .sf
		else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').attr('class', 'sf');
		}
		// else if sydney or syd - .sydney
		else if (city === 'Sydney' || city === 'SYD') {
			$('body').attr('class', 'sydney');
		}
		else {
			$('body').css('background-color', 'red');	
		}
	}
// when input with #submit-btn is clicked
	$('#submit-btn').on('click', function(event) {
	// peventDefault to prevent reload
	event.preventDefault();
	// run function setImage
	setImage();
	// reset input
	$('#city-type').val('');
 });
	
});

