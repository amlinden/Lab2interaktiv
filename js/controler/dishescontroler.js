var Dishescontroler = function(view, model){
	
	view.searchbutton.click(function(){

		model.getAllDishes(view.coursebutton, view.searchvalue);
		
		
	});


		
}

//typeselectcoursebutton