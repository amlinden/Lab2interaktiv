var DishesView = function (container, model) {
	
	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	var dishesshow = this.dishesshow = container.find("#dishesview");
	var searchstring ="";
	
	//var dishButton = this.dishButton = container.find("#dishButton");
	//varje knapp får egen funktion
	container.on('click', '.dish .dish-button', function() {
		$(this).attr('data-id');
	});
	
	function viewThis(searchstring){
		var course = container.find("#coursebutton").find(":selected").data("type");
		var dishes;
		if(!(searchstring =="")){
			dishes = model.getAllDishes(course, searchstring);
		}
		else { 
			dishes = model.getAllDishes(course);
		}

		var html="";
		for(k=0; k<dishes.length; k++){
			html+= '<div class="col-xs-6 col-md-3">'
	      	+ '<a href="#" class="thumbnail">' 
	      	+ '<img src="images/' + dishes[k].image + '">'
	      	+ '<button id="dishButton" data-id="' + dishes[k].id + '" class="btn btn-default" type="button" style="float: right;" >' + dishes[k].name + '</button>'
			+ "</div>";
			
		}
		dishesshow.html(html);
	}


	this.update = function(searchstring){
		viewThis(searchstring);
	}

	//model.addObserver(this);

	viewThis(searchstring);
}