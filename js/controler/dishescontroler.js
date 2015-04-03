var Dishescontroler = function(view, model){
	function viewThis(){

		var searchstring = $("input:first").val();  // den viewn påverkas inte av modellen

		view.coursebutton.click(function(){	
			viewThis();
		});

		view.searchbutton.click(function(){
			view.update(searchstring);
			viewThis();
		});

		view.dishesshow.click(function(){
			for(k=0; k<view.buttonArray.length; k++){
				
				model.setDishToView(this.id);
				$("#dishesview").hide();
				$("#thirdview").hide();
				$("#myDinnerView").show();
				$("#selecteddish").show();
				$("#ingredients").show();
				$("#preparationView").hide();
				view.update(searchstring);
				viewThis();
				
			}
		});
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	viewThis();
}

//typeselectcoursebutton