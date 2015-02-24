var DishesView = function (container, model) {
	this.pictures = row.find("#row"); // eller col-sm-6 col-md-3??
	this.pictures.html(model.getAllDishes());
}