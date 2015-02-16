//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.totalPrice = container.find("#totalPrice");
	this.fullMenu = container.find("#fullMenu");
	this.allIngredients = container.find("#allIngredients");
	this.allIngredientNames = container.find("#allIngredientNames");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.allDishes =container.find("#allDishes");
	//this.dishName = container.find("#dishName");
	//this.dish = container.find("#dish");

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalPrice.html(model.getTotalMenuPrice());
	this.fullMenu.html(model.getFullMenu());
	this.allIngredients.html(model.getAllIngredients());
	this.allIngredientNames.html(model.getAllIngredientNames());
	this.totalMenuPrice.html(model.getTotalMenuPrice());
	this.allDishes.html(model.getAllDishes());
	//this.dishName.html(model.getDishName());

	//console.log(model.getAllIngredientNames());

	/*
	var div = $("<div>");
	//we set the constant text
	div.html("Total menu price ");
	//and we add the text-primary class to make it blue
	div.addClass("text-primary");
	//total price we store in object variable (using this) so we can access it later
	this.totalPrice = $("<span>");
	//we set the id of the total price span
	this.totalPrice.attr("id","totalPrice");
	//we add total price span to the div
	div.append(this.totalPrice);
	//finally we add the div to the view container
	container.append(div);
	*/
}
 
