var SelectedMenuView = function(container, model){

	this.starter = container.find("#starter");
	this.mainDish = container.find("#mainDish");
	this.dessert = container.find("#dessert");

	this.starterPrice = container.find("#starterPrice");
	this.mainDishPrice = container.find("#mainDishPrice");
	this.dessertPrice = container.find("#dessertPrice");


	this.starter.html(model.getDish(model.getSelectedDish(0)).name);
	this.mainDish.html(model.getDish(model.getSelectedDish(1)).name);
	this.dessert.html(model.getDish(model.getSelectedDish(2)).name);

	this.starterPrice.html(model.getDishPrice(0) + " SEK");
	this.mainDishPrice.html(model.getDishPrice(1) + " SEK");
	this.dessertPrice.html(model.getDishPrice(2) + " SEK");
}