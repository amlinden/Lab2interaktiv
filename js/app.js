$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishesView = new dishesView();


//views
	var createdinnerview = new CreatedinnerView($("#firstview"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var dishesView = new DishesView($("#dishesshow"), model);
	

	var selectedDishView = new SelectedDishView($("#selecteddish"), model);
	var menuOverviewView = new MenuOverviewView($("#menuOverviewView"), model);
	var preparationView = new PreparationView($("#preparationView"), model);







	//controlers
	var createdinnercontroler = new Createdinnercontroler(createdinnerview, model);
	var mydinnercontroler = new Mydinnercontroler(myDinnerView, model);
	var dishescontroler = new Dishescontroler(dishesView, model);
	
	var selectedDishController = new SelectedDishController(selectedDishView, model);
	var menuOverviewController = new MenuOverviewController(menuOverviewView, model);
	

	


	
	


	


});