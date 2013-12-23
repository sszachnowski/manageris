// CONSTRUCTOR PERT  Calculator Contstuctor
define(function() {
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

	return Pert;
});