<<<<<<< HEAD
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
<<<<<<< Updated upstream

		for(var k = 0; k < $('#list div').length; k++) {
			var curr = $('#list div')[k];
			curr.onclick = function() {
				model.setDishToView(this.id);
=======
		console.log(k);
		view.dishesshow.click(function(){
			for(k=0; k<dishes.length; k++){
				console.log(k);
				model.setDishToView(dishes[k].id);
>>>>>>> Stashed changes
				$("#dishesview").hide();
				$("#thirdview").hide();
				$("#myDinnerView").show();
				$("#selecteddish").show();
				$("#ingredients").show();
				$("#preparationView").hide();
				view.update(searchstring);
				viewThis();
<<<<<<< Updated upstream
			}
		}
=======
				}
			
		});
>>>>>>> Stashed changes
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	viewThis();
}

//typeselectcoursebutton
=======
var Mydishescontroler = function(view, model){
	
	view.coursebutton.click(function(){
		model.getAllDishes(model.getDish());

		});
}
>>>>>>> master
