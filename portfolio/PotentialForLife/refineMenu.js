/*Refine Menu Class
 * Coded by Lauren Cunningham
 * This is the class for the refining menu screen of the game
 */

var img = document.createElement("img");
img.src = "refine_menu copy.png";

//creates a refine menu object. This is called by the station menu and stored in the screen manager
function refineMenu(){
	img.src = "refine_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

refineMenu.prototype.type = "refine";

//handles the buttons on the refine menu
refineMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		button.play();
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 153) && (x <= 389) && (y >= 193) && (y <= 264)){ //minerals->fertilizer
		if(control.Minerals != 0){
			button.play();
			control.fertilizer += 1;
			control.Minerals -= 10;
		}
		else
			badButton.play();
		console.log("fertilizer");
		//do something
	}
	if ((x >= 153) && (x <= 389) && (y >= 334) && (y <= 407)){ //minerals->nitrates
		if(control.Minerals != 0){
			button.play();
			control.nitrates += 1;
			control.Minerals -= 10;
		}
		else
			badButton.play();
		console.log("nitrates");
		//do something
	}
};

//updates the refine menu (image and text)
refineMenu.prototype.update = function(){
	ctx.drawImage(img, 0, 0);
	ctx.fillStyle = "black";
	ctx.font = "30px Georgia";
	ctx.fillText("x10", 97, 275); //minerals for fertilizer
	ctx.fillText("x10", 97, 425); //minerals for nitrates
	ctx.fillText("x1", 475, 275); //fertilizer
	ctx.fillText("x1", 475, 425); //nitrates
	hud.draw();
};
