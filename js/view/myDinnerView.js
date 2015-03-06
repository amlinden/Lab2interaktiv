var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dish = this.dish = container.find("#dish");

	function viewThis(){
		numberOfGuests.html(model.getNumberOfGuests(2));
		//for (k in model.)
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

 