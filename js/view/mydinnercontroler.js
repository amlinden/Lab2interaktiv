var Mydinnercontroler = function(view, model){

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log("hej");
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() -1);

	});
}