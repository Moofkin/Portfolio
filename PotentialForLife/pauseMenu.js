/*Pause Menu Class
 * Coded by Lauren Cunningham
 * This is the class for the pause screen of the game
 */

var img = document.createElement("img");

//creates a pause menu object. This is called from game by pressing "P," and is stored in the screen manager
function pauseMenu(){
	img.src = "pause_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
	ctxh.clearRect(0,0,600,100);
	hudLoaded = false;
}

pauseMenu.prototype.type = "pause";

//handles the buttons
pauseMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 241) && (y <= 273)){ //main menu
		location.reload();
	}
	if ((x >= 189) && (x <= 416) && (y >= 336) && (y <= 369)){ //controls
		button.play();
		screenManager[screenManager.length] = new controlsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 432) && (y <= 466)){ //back button
		button.play();
		screenManager.splice((screenManager.length - 1), 1);
		noHud = false;
	}
};

//updates the pause menu
pauseMenu.prototype.update = function(){
	img.src = "pause_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
