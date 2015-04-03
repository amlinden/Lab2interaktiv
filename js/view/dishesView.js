var DishesView = function (container, model) {
	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	var dishesshow = this.dishesshow = container.find("#dishesview");
	var searchstring ="";
	this.coursebutton = container.find("#coursebutton");
	var buttonArray = this.buttonArray = [];
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
		for(k=0; k<dishes.length; k++){
			dishesIDs.push(dishes[k].id);
			var $uniqueButton= $('<button/>').attr({ type:'button', name:'btn' + k, text: dishes[k].name, id: dishes[k].id, class:"btn btn-default", style: "float:left; "});
			buttonArray.push($uniqueButton);
			$("#dishesview").append('<div id="rutor" class="col-xs-6 col-md-3">'
	      		+ '<a href="#" class="thumbnail">' 
	      		+ '<img src="images/' + dishes[k].image + '"HEIGHT="150px" WIDTH="150px" alt="...">');
			$("#dishesview").append($uniqueButton);
			$("#dishesview").append("</div>");
		}
	}


	this.update = function(searchstring){
		viewThis(searchstring);
	}

	model.addObserver(this);

	viewThis(searchstring);
}