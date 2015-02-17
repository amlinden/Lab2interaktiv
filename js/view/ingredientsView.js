
var IngredientsView = function(container, model){

	this.allIngredients = container.find("#allIngredients");
	this.totalMenuPrice = container.find("#totalMenuPrice");

	this.allIngredients.html();
	this.totalMenuPrice.html(model.getTotalMenuPrice());
}