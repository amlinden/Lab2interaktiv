var SelectedDishController = function(view, model){

	view.backButton.click(function(){
		$("#selecteddish").hide();
 		$("#selectdishes").hide();
		$("#dishesView").hide();
		$("#menuOverviewView").hide();
	});

	view.confirmDishButton.click(function(){
		model.addDishToMenu(model.getDishToView());
		$("#selecteddish").hide();
		$("#dishesView").show();
 		$("#selectdishes").hide();
		$("#menuOverviewView").show();
	});
}