var Dishescontroler = function(view, model){
	
	view.coursebutton.click(function(){
		$("#dishesview").show();

		
	});

	
	view.searchbutton.click(function(){
		var searchstring = $("input:first").val();  // den viewn påverkas inte av modellen
		view.update(searchstring);
		$("#selecteddish").show();
 		$("#thirdview").hide(); //searchfield
		$("#ingredients").hide();
		$("#menuOverviewView").hide();
	
	});
		

		
}

//typeselectcoursebutton