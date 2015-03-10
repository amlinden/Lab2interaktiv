var MyDinnerView = function(container, model){
//var är globalt
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var dish = this.dish = container.find("#dishname");
	var cost = this.cost = container.find("#cost");
	var createDinnerButton = this.createDinnerButton = container.find("#createDinner");

	function viewThis(){

		//kopierade in koden från selected dishcontroller problemet är att du satt in dishtoview till 100
	//	dishToView = model.getDish(model.getDishToView());

		//var dishPrice = 0;
		//for(i in dishToView.ingredients){
		//	dishPrice += dishToView.ingredients[i].price;
		//}
		numberOfGuests.html(model.getNumberOfGuests(2));
		//cost.html(model.getNumberOfGuests()*dishPrice);
		dish.html(model.getFullMenu());
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

 