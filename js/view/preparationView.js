var PreparationView = function(container, model){

	var dish = this.dish = container.find("#dish");
	var dishDescription = this.dishDescription = container.find("#dishDescription");
	var dishIngredients = this.dishIngredients = container.find("#dishIngredients");
	var dishImage = this.dishImage = container.find("#dishImage");

	function viewThis(){

	var ingredients = "";
	var ingredientsArray = model.getDishIngredients(model.getDishToView());
	for (i in ingArray){
		ingredients += ingredientsArray[i].name + "\n";
	}

		this.dish.html(model.getDish(model.getDishToView()).name);
		this.dishDescription.html(model.getDish(model.getDishToView()).description);
		this.dishIngredients.html(ingredients)
		this.dishImage.html(model.getDish(model.getDishToView()).image);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}