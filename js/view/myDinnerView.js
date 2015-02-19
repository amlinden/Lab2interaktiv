
var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dishName = this.dishName = container.find("#dishName");

	function viewThis(){
		numberOfGuests.html(model.getNumberOfGuests());
		dishName.html(model.getDishName(3));
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

