$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var headerView = new HeaderView($("#headerView"), model);
	var startquicklyView = new StartquicklyView($("#headerView"), model);
	var mydinnerView = new mydinnerView($("#section"), model);

});