$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);

	//amandas views
	//var headerView = new HeaderView($("#headerView"), model);
	//var startquicklyView = new StartquicklyView($("#headerView"), model);
	//var mydinnerView = new mydinnerView($("#section"), model);

	//alex views
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	//var ingredientsView = new IngredientsView($("#ingredientsView"), model);
	//var selectedMenuView = new SelectedMenuView($("#selectedMenuView"), model);
	//var preparationView = new PreparationView($("#preparationView"), model);

	//controlers
	var mydinnercontroler = new Mydinnercontroler(myDinnerView,model)

});