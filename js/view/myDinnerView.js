
var MyDinnerView = function(container, model){

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	//this.dishName = container.find("#dishName");

	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.dishName.html(model.getDish("main dish").name);
}

