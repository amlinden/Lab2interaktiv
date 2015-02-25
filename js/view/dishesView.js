var DishesView = function (container, model) {

	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	var dishesshow = this.dishesshow = container.find("#dishesshow");
	var searchstring ="";
	var dishes;
	function viewThis(){
		var course = container.find("#coursebutton").find(":selected").data("type");
		if(!(searchstring =="")){
			dishes = model.getAllDishes(course, searchstring);
		}
		else { 
			dishes = model.getAllDishes(course);
		}

		var html="";
		for (k in dishes){
			html+= '<div class="col-xs-6 col-md-3">'
	      	+ '<a href="#" class="thumbnail">' 
	      	+ '<img src="images/' + dishes[k].image + '">'
			+ "</div>";
		}
		dishesshow.html(html);
	}


	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}