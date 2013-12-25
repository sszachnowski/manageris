"use strict"

requirejs([
	"constructors/AddNewLine",
	"constructors/Pert",
	"constructors/SumEstimatedTime",
	"objects/taskRowElements",
	"functions/doCalculation",
	"functions/inputIntegers",
	"functions/removeLastLine"
	], function(AddNewLine,
		Pert,
		SumEstimatedTime,
		taskRowElements,
		doCalculation,
		inputIntegers,
		removeLastLine) {

	// add 'new row' listener and 'remove row' listener

	(function() {

		// Add new listener to next element button
		var addNext = document.querySelector(".addnext");
		addNext.addEventListener("click", function(e) {
			
			// Add new line
			e.preventDefault();
			var newLine = new AddNewLine(taskRowElements);
			var div = newLine.newLine();

			// Add new input integer validation
			var inputNumbers = [];
			var len;
			inputNumbers = div.querySelectorAll('input');
			len = inputNumbers.length
			for(var i = 0; i < len; i++) {
				if(inputNumbers[i].getAttribute("type") == "number") {
					inputNumbers[i].addEventListener("keydown", inputIntegers, false);
				}
			}

			// Add new remove line listener
			var removeLine = div.querySelector(".removeline");
			removeLine.addEventListener("click", function(e) {
				e.preventDefault();
				removeLastLine(this);
			}, false);
		}, false);


		// number input validation for hardcoded elements
		var inputNumbers = [];
		var len;
		inputNumbers = document.querySelectorAll('input');
		len = inputNumbers.length
		for(var i = 0; i < len; i++) {
			if(inputNumbers[i].getAttribute("type") == "number") {
				inputNumbers[i].addEventListener("keydown", inputIntegers, false);
			}
		}

		// Add remove line listener for item hardcoded in index.html file
		var removeLine = document.querySelector(".removeline");
		removeLine.addEventListener("click", function(e) {
			e.preventDefault();
			removeLastLine(this);
		}, false);

		// Add event listener to button Calculate
		var calculateButton = document.querySelector("#calculate");
		calculateButton.addEventListener("click", function(e) {
			e.preventDefault();
			doCalculation();
			var sum = new SumEstimatedTime();
			sum.addElement()
		}, false);
	})();

});