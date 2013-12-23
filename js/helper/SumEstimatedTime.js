// Constructor of calulation of estimated time
define(function() {

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

	return SumEstimatedTime;
});