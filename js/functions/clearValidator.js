/*
functions/clearValidator.js

Clear validator entries so everyting can be check one more time.
*/

define(function() {
	return function() {
		var elements = document.querySelectorAll(".appear");
		var len = elements.length;
		if(elements.length > 0) {
			var i = 0;

			while(i < len) {
				elements[i].parentNode.removeChild(elements[i]);
				i++;
			}
		}
	}
})