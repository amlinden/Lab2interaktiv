
var IngredientsView = function(container, model){

	this.allIngredients = container.find("#allIngredients");

	this.allIngredients.html(model.getAllIngredients());
}