var Mydishescontroler = function(view, model){
	
	view.coursebutton.click(function(){
		model.getAllDishes(model.getDish());

		});
}
