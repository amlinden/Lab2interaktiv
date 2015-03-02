var Dishescontroler = function(view, model){
	
	view.coursebutton.click(function(){
		$("#dishesview").show();
	});

	
	
	view.searchbutton.click(function(){
		var searchstring = $("input:first").val();  // den viewn påverkas inte av modellen
		view.update(searchstring);
	});

	view.dishbutton.click(function(){
		$("#selecteddish").show();
		$("#dishesview").hide();
		$("#thirdview").hide();

	});


		
}

//typeselectcoursebutton