"use strict"

requirejs(["helper/AddNewLine",
	"helper/Pert",
	"helper/SumEstimatedTime",
	"helper/taskRowElements",
	"helper/doCalculation",
	"helper/inputIntegers"],
	function(AddNewLine,
		Pert,
		SumEstimatedTime,
		taskRowElements,
		doCalculation,
		inputIntegers) {

	// remove last element from actionlist form

	function removeLastLine(el) {
		var elementToRemove = el.parentNode;
		var actionList = document.querySelector('#actionlist');
		actionList.removeChild(elementToRemove);
		
	}

	// add 'new row' listener and 'remove row' listener

	(function() {
		var addNext = document.querySelector(".addnext");
		addNext.addEventListener("click", function(e) {
			e.preventDefault();
			var newLine = new AddNewLine(taskRowElements);
			var div = newLine.newLine();
			// input integer validation
			
			var inputNumbers = [];
			var len;
			inputNumbers = div.querySelectorAll('input');
			len = inputNumbers.length
			for(var i = 0; i < len; i++) {
				if(inputNumbers[i].getAttribute("type") == "number") {
					inputNumbers[i].addEventListener("keydown", inputIntegers, false);
				}
			}

			var removeLine = div.querySelector(".removeline");
			removeLine.addEventListener("click", function(e) {
				e.preventDefault();
				removeLastLine(this);
			}, false);
		}, false);

		var removeLine = document.querySelector(".removeline");
		removeLine.addEventListener("click", function(e) {
			e.preventDefault();
			removeLastLine(this);
		}, false);

		var calculateButton = document.querySelector("#calculate");
		calculateButton.addEventListener("click", function(e) {
			e.preventDefault();
			doCalculation();
			var sum = new SumEstimatedTime();
			sum.addElement()
		}, false);
	})();

});