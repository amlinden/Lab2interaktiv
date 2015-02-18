$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
<<<<<<< HEAD
	var headerView = new HeaderView($("#headerView"), model);
	var startquicklyView = new StartquicklyView($("#headerView"), model);
	var mydinnerView = new mydinnerView($("#section"), model);

=======
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var ingredientsView = new IngredientsView($("#ingredientsView"), model);
	var selectedMenuView = new SelectedMenuView($("#selectedMenuView"), model);
=======
>>>>>>> 189d1a7ac6ffe462936b10ca1bc0a2653e2a7bda
>>>>>>> 9170805aba8452fc788692ab08afa624cdd82040
});