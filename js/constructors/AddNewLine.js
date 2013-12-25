// CONSTRUCTOR adding new line
define(function() {
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

	return AddNewLine;

});