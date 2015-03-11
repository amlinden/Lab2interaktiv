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
		var htmlDish = "";
		var meny = model.getFullMenu();
		for (i in meny){
			htmlDish += "<p>" +meny[i].name + "</p>";
		}
		dish.html(htmlDish);

		var htmlCost = "";
		for (i in meny){
			var dish1 = meny[i];
			var dishPrice = 0;
			for(k in dish1.ingredients){
				dishPrice += dish1.ingredients[k].price;
			}
			htmlCost += "<p>" + dishPrice + " kr</p>";
		}

		cost.html(htmlCost);

	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}

 