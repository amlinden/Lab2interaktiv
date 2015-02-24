var PreparationView = function(container, model){

	var dishImage = this.dishImage = container.find("#dishImage");
	var dishName = this.dishName = container.find("#dishName");
	var dishIngredients = this.dishIngredients = container.find('#dishIngredients');
	var dishDescription = this.dishDescription = container.find("#dishDescription");

	function viewThis(){

		var dishToView = model.getDish(model.getDishToView());
		var htmlIngredients = '';
		for(k in dishToView.ingredients){
			htmlIngredients += '<br>' 
			+ dishToView.ingredients[k].quantity 
			+ ' ' 
			+ dishToView.ingredients[k].unit 
			+ ' ' 
			+ dishToView.ingredients[k].name 
			+ '</br>';
		}

		dishImage.html('<img src="images/' + dishToView.image + '">');
		dishName.html(dishToView.name);
		dishIngredients.html(htmlIngredients);
		dishDescription.html(dishToView.description);

		/*

	var ingredients = "";
	var ingredientsArray = model.getDishIngredients(model.getDishToView());
	for (i in ingArray){

		ingredients += ingredientsArray[i].name + "\n";
	}

		this.dish.html(model.getDish(model.getDishToView()).name);
		this.dishDescription.html(model.getDish(model.getDishToView()).description);
		this.dishIngredients.html(ingredients)
		this.dishImage.html(model.getDish(model.getDishToView()).image);
	
	*/
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}