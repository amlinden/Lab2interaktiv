var SelectedDishView = function(container, model){
	$("#selecteddish").hide();
	var backButton = this.backButton = container.find("#backButton");
	var dishImage = this.dishImage = container.find("#dishImage");
	var dishDescription = this.dishDescription = container.find("#dishDescription");
	var totalPrice = this.totalPrice = container.find("#totalPrice");
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var ingredientList = this.ingredientList = container.find("#ingredientList");
	var confirmDishButton = this.confirmDishButton = container.find("#confirmDishButton");

	function viewThis(){

		dishToView = model.getDish(model.getDishToView());

		var dishPrice = 0;
		for(i in dishToView.ingredients){
			dishPrice += dishToView.ingredients[i].price;
		}
		totalPrice.html(model.getNumberOfGuests()*dishPrice);

		imageHTML = '<img src="images/' + dishToView.image + '">';
		dishImage.html(imageHTML);

		dishDescription.html(dishToView.description);
		numberOfGuests.html(model.getNumberOfGuests());

		var htmlIngredients = '';
		for(k in dishToView.ingredients){
			htmlIngredients += '<p>' 
			+ model.getNumberOfGuests()*dishToView.ingredients[k].quantity 
			+ ' ' 
			+ dishToView.ingredients[k].unit 
			+ ' ' 
			+ dishToView.ingredients[k].name 
			+ '       SEK '
			+ model.getNumberOfGuests()*dishToView.ingredients[k].price
			+ '</p>';
		}

		ingredientList.html(htmlIngredients);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}