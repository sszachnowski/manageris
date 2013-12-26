/*
functions/validator.js

This function validates entries in each row.
*/

define(["functions/setupAnimation", "functions/clearValidator"], function(setupAnimation, clearValidator) {
	return function () {
		var rows = []; // rows of task form
		var len; // number of entered tasks
		var i; // for iteration
		
		clearValidator();

		rows = document.querySelectorAll(".line");
		len = rows.length;
		
		//object containing information regarding row values. is used to compare if values are entered correctly.
		var compare = {
			optimistic: 0,
			normal: 0,
			pesimistic: 0,
			valueOptimistic: function() {
				return this.optimistic.value;
			},
			valueNormal: function() {
				return this.normal.value;
			},
			valuePesimistic: function() {
				return this.pesimistic.value;
			}
		}

		// iterate through task rows
		for (i = 0; i < len; i++) {
			var inputs = [];
			var length;
			var j;

			compare.optimistic = rows[i].querySelector('.optimistic');
			compare.normal = rows[i].querySelector('.normal');
			compare.pesimistic = rows[i].querySelector('.pesimistic');

			if (compare.valueOptimistic() >= compare.valueNormal() && compare.valueOptimistic() != "" && compare.valueNormal() != "") {
				var div = document.createElement('div');
				var parent = compare.optimistic.parentNode;
				var errorMessage = document.createTextNode("It seems that you set optimistic value bigger than or equal to normal.");
				div.appendChild(errorMessage);
				div.className = "hidden errormessage";
				parent.appendChild(div);
			} else if (compare.valueNormal() >= compare.valuePesimistic() && compare.valueNormal() != "" && compare.valuePesimistic() != 0) {
				var div = document.createElement('div');
				var parent = compare.normal.parentNode;
				var errorMessage = document.createTextNode("It seems that you set normal value bigger than or equal to pesimistic.");
				div.appendChild(errorMessage);
				div.className = "hidden errormessage";
				parent.appendChild(div);
			}

			// iterate through row's inputs
			inputs = rows[i].querySelectorAll('input');
			length = inputs.length;
			for(j = 0; j < length; j++) {
				if (inputs[j].value == "" && inputs[j].className != "result") {
					var div = document.createElement('div');
					var parent = inputs[j].parentNode;
					var errorMessage = document.createTextNode("This field should not be empty!");
					div.appendChild(errorMessage);
					div.className = "hidden errormessage";
					parent.appendChild(div);
				}
			}
		}
		setupAnimation();
	}
});