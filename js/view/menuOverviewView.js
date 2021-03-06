var MenuOverviewView = function (container, model) {
	var confirmDishButton = this.confirmDishButton = container.find("#confirmDishButton");
/*
	var starter = this.starter = container.find("#starter");
	var mainDish = this.mainDish = container.find("#mainDish");
	var dessert = this.dessert = container.find("#dessert");
*/
	var starterPrice = this.starterPrice = container.find("#starterPrice");
	var mainDishPrice = this.mainDishPrice = container.find("#mainDishPrice");
	var dessertPrice = this.dessertPrice = container.find("#dessertPrice");

	function viewThis(){
/*
		starter.html(model.getDish(model.fullMenu[0]).image);
		mainDish.html(model.getDish(model.fullMenu[1]).image);
		dessert.html(model.getDish(model.fullMenu[2]).image);
*/
		starterPrice.html(model.getDishPrice(model.getFullMenu[0]) + " kr");
		mainDishPrice.html(model.getDishPrice(model.getFullMenu[1]) + " kr");
		dessertPrice.html(model.getDishPrice(model.getFullMenu[2]) + " kr");

		console.log(model.getDishPrice(model.fullMenu[2]) + " kr");
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}
