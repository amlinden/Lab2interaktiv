$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishesView = new dishesView();


	var Createdinnerview = new CreatedinnerView($("#firstview"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var dishesView = new DishesView($("#dishesView"), model);


	var preparationView = new PreparationView($("#preparationView"), model);

	//hämar htmlkod
	var menuOverviewView = new MenuOverviewView($("#menuOverviewView"), model);

	//controlers

	var menuOverviewController = new MenuOverviewController(menuOverviewView, model);

	var createdinnercontroler = new Createdinnercontroler(Createdinnerview, model);
	var mydinnercontroler = new Mydinnercontroler(myDinnerView, model);

	var dishescontroler = new Dishescontroler(dishesView, model);


});