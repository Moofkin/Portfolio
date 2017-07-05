/*Win Condition Graphic Class
 * Coded by Lauren Cunningham
 * This is the class for the ending screen of the game (win screen)
 */

//screen graphics
var win1img = document.createElement("img");
win1img.src = "win1 copy.png";
var win2img = document.createElement("img");
win2img.src = "win2 copy.png";
var win3img = document.createElement("img");
win3img.src = "win3 copy.png";
var win4img = document.createElement("img");
win4img.src = "win4 copy.png";
var win5img = document.createElement("img");
win5img.src = "win5 copy.png";
var win6img = document.createElement("img");
win6img.src = "win6 copy.png";
var win7img = document.createElement("img");
win7img.src = "win7 copy.png";
var win8img = document.createElement("img");
win8img.src = "win8 copy.png";
var win9img = document.createElement("img");
win9img.src = "win9 copy.png";
var win10img = document.createElement("img");
win10img.src = "win10 copy.png";
var win11img = document.createElement("img");
win11img.src = "win11 copy.png";
var win12img = document.createElement("img");
win12img.src = "win12 copy.png";
var win13img = document.createElement("img");
win13img.src = "win13 copy.png";

//creates a win object. These are put into the screen manager declared in "main.js"
function win(){
	moving.pause();
	backgroundMusic.pause();
	winMusic.play();
	img.onload = function(){
		ctx.drawImage(win1img, 0, 0);
	};
	this.imgNum = 1;
}

win.prototype.type = "win";

//handles the button on the credits menu graphic (handles mouse clicks)
win.prototype.buttonPress = function(e){};

//updates the win screen
win.prototype.update = function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 600, 600);
	ctxh.fillStyle = "black";
	ctxh.fillRect(0, 0, 600, 100);	
	switch (this.imgNum){
		case 1:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 1.5:
			ctx.drawImage(win2img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 2:
			ctx.drawImage(win2img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 2.5:
			ctx.drawImage(win3img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 3:
			ctx.drawImage(win3img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 3.5:
			ctx.drawImage(win4img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 4:
			ctx.drawImage(win4img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 4.5:
			ctx.drawImage(win5img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 5:
			ctx.drawImage(win5img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 5.5:
			ctx.drawImage(win6img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 6:
			ctx.drawImage(win6img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 6.5:
			ctx.drawImage(win7img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 7:
			ctx.drawImage(win7img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 7.5:
			ctx.drawImage(win8img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 8:
			ctx.drawImage(win8img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 8.5:
			ctx.drawImage(win9img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 9:
			ctx.drawImage(win9img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 9.5:
			ctx.drawImage(win10img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 10:
			ctx.drawImage(win10img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 10.5:
			ctx.drawImage(win11img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 11:
			ctx.drawImage(win11img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 11.5:
			ctx.drawImage(win12img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 12:
			ctx.drawImage(win12img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 12.5:
			ctx.drawImage(win13img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 13:
			ctx.drawImage(win13img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 13.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 14:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 14.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 15:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 15.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 16:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 16.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 17:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 17.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 18:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 18.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 19:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 19.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 20:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum += 0.5;
			break;
		case 20.5:
			ctx.drawImage(win1img, 0, 0);
			this.imgNum = 1;
			break;
	}
	ctx.fillStyle = "white";
	ctx.font = "50px Georgia";
	ctx.fillText("Congratulations!", 115, 315);
};