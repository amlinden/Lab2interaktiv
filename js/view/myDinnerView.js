
var MyDinnerView = function (container, model) {

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishName = container.find("dishName");

	this.numberOfGuest.html("Nu borde det stå 2 här: " + model.getNumberOfGuests());
	this.dishName.html(model.getDish("main dish").name);
}

