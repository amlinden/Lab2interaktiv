var DishesView = function (container, model) {

	
	//cotainern i detta fall är HTMLkoden
	var dishBrowser= this.dishBrowser = container.find("#dishBrowser");


	var searchword ="";
	function showndishes(searchword){
		//option = starter/main/dessert
		var option = container.find("#coursebutton").find(":selected").data("type");
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



}