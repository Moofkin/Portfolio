/*Controls Screen Class
 * Coded by Lauren Cunningham
 * This is the class for the controls screen of the game
 */

var img = document.createElement("img");

//creates a controls screen object. This is called from either main menu or pause menu and is stored in screen manager
function controlsMenu(){
	img.src = "controls_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

controlsMenu.prototype.type = "controls";

//handles the back button on the screen
controlsMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 504)){ //back button
		button.play();
		screenManager.splice((screenManager.length - 1), 1);
	}
};

//updates the screen
controlsMenu.prototype.update = function(){
	img.src = "controls_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
