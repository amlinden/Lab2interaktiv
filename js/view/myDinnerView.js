
var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dish = this.dish = container.find("#dish");

	function viewThis(){
		numberOfGuests.html(model.getNumberOfGuests());
		dish.html(model.getDish(3).name);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

