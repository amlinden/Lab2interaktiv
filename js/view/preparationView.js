var PreparationView = function(container, model){

	this.dish = container.find("#dish");
	this.dishDescription = container.find("#dishDescription");
	this.dishIngredients = container.find("#dishIngredients");

	/*
	this.starter = container.find("#starter");
	this.mainDish = container.find("#mainDish");
	this.dessert = container.find("#dessert");

	this.starterIngredients = container.find("#starterIngredients");	
	this.mainDishIngredients = container.find("#mainDishsIngredients");
	this.starterIngredients = container.find("#starterIngredients");
	*/

	//
	var ingredients = "";
	var ingArray = model.getDishIngredients(0);
	for (i in ingArray){
		ingredients += ingArray[i].name + "\n";
	}

	this.dish.html(model.getDish(0).name);
	this.dishDescription.html(model.getDish(0).description);
	this.dishIngredients.html(ingredients);

	/*
	this.starter.html(model.getDish(model.getSelectedDish(0)).name);
	this.mainDish.html(model.getDish(model.getSelectedDish(1)).name);
	this.dessert.html(model.getDish(model.getSelectedDish(2)).name);
	*/
}