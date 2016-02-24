var DishesView = function (container, model) {
	var allpictures = this.allpictures = container.find("#pictures");


	function viewThis(){
		allpictures.html(model.getNumberOfGuests());
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}
