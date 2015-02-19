var Dishescontroler = function(view, model){
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);

	});

}