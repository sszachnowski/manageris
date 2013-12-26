/*
functions/doCalculation.js

Defines rules of calculation PERS estimation. Calucates results for all rows.
*/

define(["constructors/Pert", "functions/validator"], function(Pert, validator) {
	return function(){
		var listElements = [];
		var i;
		var length;
		var optimistic;
		var normal;
		var pesimistic;
		var result;

		validator();

		listElements = document.querySelectorAll('.line');
		length = listElements.length;
		i = 0;
		while(i < length) {
			optimistic = listElements[i].querySelector('.optimistic').value == "" ? 0 : listElements[i].querySelector('.optimistic').value;
			normal = listElements[i].querySelector('.normal').value == "" ? 0 : listElements[i].querySelector('.normal').value;
			pesimistic = listElements[i].querySelector('.pesimistic').value == "" ? 0 : listElements[i].querySelector('.pesimistic').value;

			var pert = new Pert(optimistic, normal, pesimistic);
			result = listElements[i].querySelector('.result');
			result.value = pert.calculate();
			i++;
		}
	}
});