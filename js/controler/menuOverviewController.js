var MenuOverviewController = function (view, model){
	view.finishButton.click(function(){
		$("#menuOverviewView").hide();
	});
	//ska hidea menuoverviewview och hämta ??ALEX?
	view.confirmDishButton.click(function(){
		$("#menuOverviewView").hide();
		$("#exampleView").hide();
		$("#preparationView").show();
	});
}
