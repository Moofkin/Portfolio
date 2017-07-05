/*Cultivate Menu Class
 * Coded by Lauren Cunningham
 * This is the class for the cultivate menu screen of the game
 */

var img = document.createElement("img");
img.src = "cultivate_menu copy.png";

//create a ciltivate menu. This function is called by station meu and stored in screen manager
function cultivateMenu(){
	img.src = "cultivate_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

cultivateMenu.prototype.type = "cultivate";

//handles the buttons on the menu
cultivateMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		button.play();
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 144) && (x <= 371) && (y >= 143) && (y <= 212)){ //cultivate plant
		console.log("plant");
		if(control.Water >= 10 && control.fertilizer != 0){
			button.play();
			control.Water -= 10;
			control.fertilizer -= 1;
			console.log(control.EXP);
			plant.exp += 10;
			plant.update();
		}
		else
			badButton.play();
	}
	if ((x >= 144) && (x <= 371) && (y >= 379) && (y <= 446)){ //cultivate enzyme
		if(control.Water >= 10 && control.nitrates >= 3){
			button.play();
			control.Enzyme += 1;
			control.Water -= 10;
			control.nitrates -= 3;
			console.log(control.Enzyme);
		}
		else
			badButton.play();
		console.log("enzyme");
		//do something
	}
};

//updates the menu (image and text)
cultivateMenu.prototype.update = function(){
	ctx.drawImage(img, 0, 0);
	ctx.fillStyle = "black";
	ctx.font = "30px Georgia";
	ctx.fillText("x10", 77, 150); //water for exp
	ctx.fillText("x1", 87, 255); //fertilizer for exp
	ctx.fillText("x10", 82, 385); //water for enzyme
	ctx.fillText("x3", 92, 500); //nirtrates for enzyme
	ctx.fillText("x10", 460, 225); //exp
	ctx.fillText("x1", 470, 460); //enzyme
	hud.draw();
};
