var DishesView = function (container, model) {
	
	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	var dishesshow = this.dishesshow = container.find("#dishesview");
	var searchstring ="";
	this.coursebutton = container.find("#coursebutton");
	var buttonArray = this.buttonArray = [];
	var dishesIDs = this.dishesIDs = [];
	
	//var dishbutton = this.dishbutton = container.on(function(){
	//	$(this).attr('data-id');
	//	});	
	function viewThis(searchstring){
		var course = container.find("#coursebutton").find(":selected").data("type");
		var dishes = this.dishes = [];
		if(!(searchstring =="")){
			dishes = model.getAllDishes(course, searchstring);
		}
		else { 
			dishes = model.getAllDishes(course);
		}
		/*
		var html="";
		for(k=0; k<dishes.length; k++){
			html+= '<div id="rutor" class="col-xs-6 col-md-3">'
	      	+ '<a href="#" class="thumbnail">' 
	      	+ '<img src="images/' + dishes[k].image + '"HEIGHT="140" WIDTH="150" alt="...">'
	      	+ '<button id="dishButton" data-id="' + dishes[k].id + '" class="btn btn-default" type="button" style="float:left;" >' + dishes[k].name + '</button>'
			+ "</div>";
		}
		*/
		$("#dishesview").empty();
		//this.dishesshow = [];
		//dishesIDs = [];
		for(k=0; k<dishes.length; k++){
			dishesIDs.push(dishes[k].id);
			var $uniqueButton= $('<button/>').attr({ type:'button', name:'btn' + k, text: dishes[k].name, id: dishes[k].id, class:"btn btn-default", style: "float:left;"});
			buttonArray.push($uniqueButton);
			$("#dishesview").append('<div id="rutor" class="col-xs-6 col-md-3">'
	      		+ '<a href="#" class="thumbnail">' 
	      		+ '<img src="images/' + dishes[k].image + '"HEIGHT="140" WIDTH="150" alt="...">');
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