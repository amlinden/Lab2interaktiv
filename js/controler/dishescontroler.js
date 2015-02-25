var Dishescontroler = function(view, model){
	
	view.dishButton.click(function(){
		console.log("working");
		model.setDishToView(100);
		$("#firstview").hide();
		$("#myDinnerView").show();
 		$("#selectdishes").hide();
		$("#dishesView").hide();
		$("#selecteddish").show();
	});

	
	view.searchbutton.click(function(){

		model.getAllDishes(view.coursebutton, view.searchvalue);
		
	});
		

		
}

//typeselectcoursebutton