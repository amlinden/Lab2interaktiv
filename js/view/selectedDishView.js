var SelectedDishView = function(container, model){

	var backButton = this.backButton = container.find("#backButton");
	var dishImage = this.dishImage = container.find("#dishImage");
	var dishDescription = this.dishDescription = container.find("#dishDescription");	

	function viewThis(){

		dishToView = model.getDish(model.getDishToView());

		imageHTML = '<img src="images/' + dishToView.image + '">';
		dishImage.html(imageHTML);

		dishDescription.html(dishToView.description);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}