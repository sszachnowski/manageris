/*
functions/setupAnimation.js

Defines CSS3 animation of validator error message.
*/
define(function() {
	return function() {
		var animatedElements = document.querySelectorAll('.errormessage');
		var len = animatedElements.length;
		var i = 0;

		while (i < len){
			animatedElements[i].className = "appear";
			animatedElements[i].addEventListener("click", function() {
				// to do: refactoring of the code
				this.parentNode.removeChild(this)}, false);
			i++;
		}
	}
});