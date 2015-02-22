var DishesView = function (container, model) {
	var allpictures = this.allpictures = containerpictures.find("#pictures");
	var coursebutton = this.coursebutton = container1.find("#coursebutton");
	var starter1 = this.starter1 = containerpictures.find("#starter1");


	function viewThis(){
		allpictures.html(model.getNumberOfGuests());
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}
