var SelectedDishView = function(container, model){
	var backButton = this.backButton = container.find("#backButton");
	var dishImage = this.dishImage = container.find("#dishImage");
	var dishDescription = this.dishDescription = container.find("#dishDescription");
	var totalPrice = this.totalPrice = container.find("#totalPrice");
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");

	var ingredients = this.ingredients = container.find("#ingredients");


	var confirmDishButton = this.confirmDishButton = container.find("#confirmDishButton");

	function viewThis(){

		dishToView = model.getDish(model.getDishToView());

		var dishPrice = 0;
		for(i in dishToView.ingredients){
			dishPrice += dishToView.ingredients[i].price;
		}
		totalPrice.html(model.getNumberOfGuests()*dishPrice);

		imageHTML = '<img src="images/' + dishToView.image + '"class="img-rounded" width="220" float:right; alt="..."">';
		dishImage.html(imageHTML);

		dishDescription.html(dishToView.description);
		
		numberOfGuests.html(model.getNumberOfGuests());


		var htmlingredients = '';

		for(k in dishToView.ingredients){
			htmlingredients += '<p>' 
			+ model.getNumberOfGuests()*dishToView.ingredients[k].quantity 
			+ ' ' 
			+ dishToView.ingredients[k].unit 
			+ ' ' 
			+ dishToView.ingredients[k].name 
			+ '       SEK '
			+ model.getNumberOfGuests()*dishToView.ingredients[k].price
			+ '</p>';
		}


<<<<<<< HEAD
		ingredientList.html(htmlIngredients);
=======

		ingredients.html(htmlIngredients);
		console.log(htmlIngredients);

>>>>>>> origin/ny-branch
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}