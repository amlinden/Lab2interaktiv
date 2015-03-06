var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dish = this.dish = container.find("#dish");
	var cost = this.cost = container.find("#cost");

	function viewThis(){
		dishToView = model.getDish(model.getDishToView());

		var dishPrice = 0;
		for(i in dishToView.ingredients){
			dishPrice += dishToView.ingredients[i].price;
		}
		numberOfGuests.html(model.getNumberOfGuests(2));
		cost.html(model.getNumberOfGuests()*dishPrice);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

 