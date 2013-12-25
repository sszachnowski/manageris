// Prevent from typing letters and other characters in number inputs
define(function() {
	return function(event) {
		// check if there are two digits already
		var that = this;
		function countDigits () {
			var number = that.value.length;
			var notTooLong = (number < 2) ? true : false;
			return notTooLong;
		}
			
		// check if last entered char is an integer if not delete it
		var key = event.keyCode || event.which;
		
		var isInteger = 
			(key >= 48 && key <= 57) || //numbers
			(key >= 96 && key <= 105); //numbers on numpad
		
		var isHelper =
			(key == 37 || key == 39) || //left and right arrow
			(key == 46 || key == 8) || //del and backspace
			(key == 9); //tab key
		
		if(!isHelper) {
			if(!isInteger || !countDigits()){
				event.preventDefault();
			}
		}
	}
});