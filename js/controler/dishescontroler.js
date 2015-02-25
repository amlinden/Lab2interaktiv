var Dishescontroler = function(view, model){
	
	/*/view.dishButton.click(function(){
		console.log("working");
		model.setDishToView(100);
		$("#firstview").hide();
		$("#myDinnerView").show();
 		$("#selectdishes").hide();
		$("#dishesView").hide();
		$("#selecteddish").show();
	});/*/

	
	view.searchbutton.click(function(){
		var searchstring = $("input:first").val();  // den viewn påverkas inte av modellen
		view.update(searchstring);
	});
		

		
}

//typeselectcoursebutton