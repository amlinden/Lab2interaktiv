var SelectedDishController = function(view, model){

	view.backButton.click(function(){
		$("#selecteddish").hide();
		$("#menuOverviewView").hide();
		$("#selectdishes").show();
		$("#thirdview").show();
		$("#dishesview").show();

	});

	view.confirmDishButton.click(function(){
		$("#selecteddish").hide();
		$("#dishesview").show();
 		$("#selectdishes").hide();
		$("#menuOverviewView").show();

	});
}