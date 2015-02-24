var DishesView = function (container, model) {

	
	//vet inte vad denna gör riktigt
	var dishBrowser= this.dishBrowser = container1.find("#dishBrowser");


	var searchword ="";
	function showndishes(searchword){
		//option = starter/main/dessert
		var option = container1.find("#coursebutton").find(":selected").data("type");
		var dishes;
		if(!(searchword ==""){
			//all dishes that contains the searchword
			dishes = model.getAllDishes(option.searchword);
				//all dishes that contains the selected course
		} else { dishes = model.getAllDishes(option)};
		}
		var html="";
		var check = 0;
		//i++ means that it is tha value i? increments the variable but returns the old value
		//.length is the amount of chars in dishes
		for (i=0; i<dishes.length; i++){
			html+="<>" + dishes[i].id + ""
			+ dishes[i].image
			+ dishes[i].name
		}
		dishBrowser.html(html);
	}



	

	this.update = function(str){
		showndishes(str);
	}



	showndishes(searchword);

	this.pictures = row.find("#row"); // eller col-sm-6 col-md-3??
	this.pictures.html(model.getAllDishes());

}