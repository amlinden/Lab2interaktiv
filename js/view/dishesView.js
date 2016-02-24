var DishesView = function (container, model) {
	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	var dishesshow = this.dishesshow = container.find("#dishesview");
	var searchstring ="";
	this.coursebutton = container.find("#coursebutton");
	var buttonArray = this.buttonArray = [3];
	var dishesIDs = this.dishesIDs = [];

	function viewThis(searchstring){
		var course = container.find("#coursebutton").find(":selected").data("type");
		var dishes = this.dishes = [];
		if(!(searchstring =="")){
			dishes = model.getAllDishes(course, searchstring);
		}
		else { 
			dishes = model.getAllDishes(course);
		}
	
		$("#dishesview").empty();
		var sessionlist = "";
		for (k = 0; k<dishes.length; k++) {
			sessionlist += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + dishes[k].id + '>' + '<img style="width:150px;height:150px;" src="' + 'images/' + dishes[k].image + '" alt ="' + dishes[k].image +
 			'">' + '<br>' + dishes[k].name + '</div>';
 		}
	
		$("#dishesview").append(sessionlist);
		var sessionlist = "";
	}


	this.update = function(searchstring){
		viewThis(searchstring);
	}

	model.addObserver(this);

	viewThis(searchstring);
}