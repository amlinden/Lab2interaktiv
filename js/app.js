$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishesView = new dishesView();
	


    //views
	//var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	//var 
	//new ska vara samma som funktionens namn i viewn
	var Createdinnerview = new CreatedinnerView($("#firstview"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var dishesView = new DishesView($("#dishesView"), model);

	//var ingredientsView = new IngredientsView($("#ingredientsView"), model);
	//var selectedMenuView = new SelectedMenuView($("#selectedMenuView"), model);
	//var menuOverviewView = new MenuOverviewView($("#menuOverviewView"), model);

	//controlers
	//
	//var dishescontroler = new Dishescontroler(dishesView,model)
	var createdinnercontroler = new Createdinnercontroler(Createdinnerview, model);
	var mydinnercontroler = new Mydinnercontroler(myDinnerView, model);
	var dishescontroler = new Dishescontroler(dishesView, model);

});