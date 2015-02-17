var MyDinnerView = function (container, model) {

	this.numberOfGuests = container.find("#numberOfGuests");

	this.numberOfGuest.html("Nu borde det stå 2 här: " + model.getNumberOfGuests());


}
