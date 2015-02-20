
var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dish = this.dish = container.find("#dish");

	function viewThis(){
		numberOfGuests.html(model.getNumberOfGuests());
<<<<<<< HEAD

=======
		dish.html(model.getDish(model.getSelectedDinner(0)).name);
>>>>>>> 56610d0a8ca1b1d4c6254db4823d25bff6a4dbb4
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

