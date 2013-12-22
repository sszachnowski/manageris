// main.js
"use strict";

// CONSTRUCTOR PERT  Calculator Contstuctor

function Pert (optimistic, normal, pesimistic) {
	this.optimistic = parseInt(optimistic);
	this.normal = parseInt(normal);
	this.pesimistic = parseInt(pesimistic);
}

Pert.prototype = {
	constructor: Pert,
	calculate: function() {
		return Math.round((this.optimistic + 4 * this.normal + this.pesimistic) / 6);
	}
}

// CONSTRUCTOR calculation of total time result

function SumEstimatedTime() {
	this.results = [];
	this.length;
	this.i;
	this.estimation = 0;
	this.message = "Estimated time is ";
}

SumEstimatedTime.prototype = {
	constructor: SumEstimatedTime,
	// Method calculating sum of action times
	estimateProjectTime: function () {
		this.results = document.querySelectorAll(".result");
		this.length = this.results.length;
		this.i = 0;
		while (this.i < this.length) {
		this.estimation += parseInt(this.results[this.i].value);
		this.i += 1;
		}
	},
	// Method creating message about estimated hours
	createMessage: function(time) {
		var time = time;
		var estimatedTimeMessage = this.message + time; 
		return estimatedTimeMessage;
	},
	// Method adding element with estimated time
	addElement: function() {
		this.estimateProjectTime();
		if(document.querySelector("#estimation") != undefined) {
			var estimationDiv = document.querySelector("#estimation");
			estimationDiv.innerHTML = this.createMessage(this.estimation);
		} else {
			var estimationDiv = document.createElement('div');
			estimationDiv.setAttribute("id", "estimation");
			var estimationText = document.createTextNode(this.createMessage(this.estimation));
			estimationDiv.appendChild(estimationText);
			document.querySelector('body').appendChild(estimationDiv);
		}
	}
}

// object containing information about all task row elements

var taskRowElements = {
	task: {
		label: "Task",
		type: "text",
		myClass: "task",
		disabled: false
	},
	optimistic: {
		label: "Optimistic",
		type: "number",
		myClass: "optimistic",
		disabled: false
	},
	normal: {
		label: "Normal",
		type: "number",
		myClass: "normal",
		disabled: false
	},
	pesimistic: {
		label: "Pesimistic",
		type: "number",
		myClass: "pesimistic",
		disabled: false
	},
	result: {
		label: "Result",
		type: "number",
		myClass: "result",
		disabled: true
	}
}

// CONSTRUCTOR adding new line

function AddNewLine(taskRowElements) {
	this.div;
	this.taskRowElements = taskRowElements;
}

AddNewLine.prototype = {
	constructor: AddNewLine,
	// meethod adding new line
	newLine: function() {
		this.div = document.createElement("div");
		this.div.setAttribute("class", "line");

		// create inputs in row using taskElement method
		for (var el in this.taskRowElements) {
			var element = this.taskElement(this.div, this.taskRowElements[el].label, this.taskRowElements[el].type, this.taskRowElements[el].myClass, this.taskRowElements[el].disabled);
		}

		var removeButton = document.createElement('a');
		removeButton.setAttribute("href", "index.html");
		removeButton.setAttribute("class", "removeline");
		var removeButtonText = document.createTextNode('Remove task');
		removeButton.appendChild(removeButtonText);
		this.div.appendChild(removeButton);

		var actionList = document.querySelector("#actionlist");
		actionList.insertBefore(this.div, actionList.childNodes[actionList.childNodes.length - 4]); // last child is text node 'enter'

		return this.div;		
	},
	// method creating new single elements
	taskElement: function(parent, label, type, myClass, disabled) {
		var parent = parent;
		var label = label;
		var type = type;
		var myClass = myClass;
		var disabled = disabled;
		var wrapper = document.createElement('div');
		wrapper.setAttribute("class", "formelement");
		if(disabled === false) {
			wrapper.setAttribute("class", wrapper.getAttribute("class") + " lightred");
		} else {
			wrapper.setAttribute("class", wrapper.getAttribute("class") + " blue");
		}
		var labelTask = document.createElement("label");
		var labelTaskText = document.createTextNode(label);
		labelTask.appendChild(labelTaskText);
		wrapper.appendChild(labelTask);
		var inputTask = document.createElement("input");
		inputTask.setAttribute("type", type);
		inputTask.setAttribute("class", myClass);
		if(disabled === true) {
			inputTask.setAttribute("disabled", "");
			inputTask.setAttribute("readonly", "");
		}
		wrapper.appendChild(inputTask);
		parent.appendChild(wrapper);
	}
}

// calculate result for all rows

function doCalculation() {
	var listElements = [];
	var i;
	var length;
	var optimistic;
	var normal;
	var pesimistic;
	var result;
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

// Prevent from typing letters and other characters in number inputs

var inputs = document.querySelectorAll('input');
var numberInputs = [];
var i = 0;
while(i < inputs.length) {
	if(inputs[i].getAttribute("type") === "number") {
		numberInputs.push(inputs[i]);
	}
	i += 1;
}


for(var j = 0; j < numberInputs.length; j += 1){
	numberInputs[j].addEventListener('click', function(el) {
		alert(this.value);
	}, false);
}