$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {

		if (i % 15 === 0) {
			$('.results').append('FizzBuzz');

		}
        else if (i % 3 === 0) {
			$('.results').append('Fizz');

		} 
        else if (i % 5 === 0) {
			$('.results').append('Buzz');

		} 
        else {
			$('.results').append(i);
		}
		$('.results').append('<br />');
	}
});









