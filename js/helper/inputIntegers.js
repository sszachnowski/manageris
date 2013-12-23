// Prevent from typing letters and other characters in number inputs
define(function() {
	return function(event) {
		// check if last entered char is an integer if not delete it
		var key = event.keyCode || event.which;
		var isInteger = (key >= 48 && key <=57) || (key >=96 && key <=105);
		if(!isInteger) {
			event.preventDefault();
		}
	}
});