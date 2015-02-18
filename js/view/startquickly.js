var StartquicklyView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.createDinner = container1.find("#createDinner");
	
	model.addObserver(this);
}