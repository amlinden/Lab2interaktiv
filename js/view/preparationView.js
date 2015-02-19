var PreparationView = function(container, model){

	this.dish = container.find("#dish");
	this.dishDescription = container.find("#dishDescription");
	this.dishIngredients = container.find("#dishIngredients");
	this.dishImage = container.find("#dishImage");

	//
	var id = 3;
	var ingredients = "";
	var ingArray = model.getDishIngredients(id);
	for (i in ingArray){
		ingredients += ingArray[i].name + "\n";
	}

	this.dish.html(model.getDish(id).name);
	this.dishDescription.html(model.getDish(id).description);
	this.dishIngredients.html(ingredients);
	this.dishImage.html(model.getDish(id).image);

}