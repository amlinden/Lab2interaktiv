var DishesView = function (container, model) {
<<<<<<< HEAD
	this.searchbutton = container.find("#search");
	var searchvalue= this.searchvalue = container.find("#searchvalue");
	this.dishesshow = this.dishesshow = container.find("#dishesview");
	var searchstring ="";
	this.coursebutton = container.find("#coursebutton");
	//var buttonArray = this.buttonArray = [3];
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
=======

	
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



>>>>>>> master
}