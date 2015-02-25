$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishesView = new dishesView();

	var createdinnerview = new CreatedinnerView($("#firstview"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
//	var dishesView = new DishesView($("#dishesView"), model);


	var preparationView = new PreparationView($("#preparationView"), model);

	//hämar htmlkod
	var menuOverviewView = new MenuOverviewView($("#menuOverviewView"), model);
	var selectedDishView = new SelectedDishView($("#selecteddish"), model);

	//controlers

	var menuOverviewController = new MenuOverviewController(menuOverviewView, model);
	var selectedDishController = new SelectedDishController(selectedDishView, model);

	var createdinnercontroler = new Createdinnercontroler(createdinnerview, model);
	//var mydinnercontroler = new Mydinnercontroler(myDinnerView, model);

//	var dishescontroler = new Dishescontroler(dishesView, model);


});