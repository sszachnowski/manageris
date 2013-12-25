// remove last element from actionlist form
define(function() {
	return function (el) {
		var elementToRemove = el.parentNode;
		var actionList = document.querySelector('#actionlist');
		actionList.removeChild(elementToRemove);
	}
});