var SelectedDishController = function(view, model){

	view.backButton.click(function(){
		$("#selecteddish").hide();
		$("#dishesView").show();
	});
}