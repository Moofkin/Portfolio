/*Lose Condition Graphic Class
 * Coded by Lauren Cunningham
 * This is the class for the ending screen of the game (lose screen)
 */

//screen graphics
var lose1img = document.createElement("img");
lose1img.src = "lose1 copy.png";
var lose2img = document.createElement("img");
lose2img.src = "lose2 copy.png";
var lose3img = document.createElement("img");
lose3img.src = "lose3 copy.png";
var lose4img = document.createElement("img");
lose4img.src = "lose4 copy.png";
var lose5img = document.createElement("img");
lose5img.src = "lose5 copy.png";
var lose6img = document.createElement("img");
lose6img.src = "lose6 copy.png";
var lose7img = document.createElement("img");
lose7img.src = "lose7 copy.png";
var lose8img = document.createElement("img");
lose8img.src = "lose8 copy.png";
var lose9img = document.createElement("img");
lose9img.src = "lose9 copy.png";
var lose10img = document.createElement("img");
lose10img.src = "lose10 copy.png";
var lose11img = document.createElement("img");
lose11img.src = "lose11 copy.png";
var lose12img = document.createElement("img");
lose12img.src = "lose12 copy.png";

//creates a lose object. These are put into the screen manager declared in "main.js"
function lose(){
	moving.pause();
	backgroundMusic.pause();
	youLost.play();
	lose1img.onload = function(){
		ctx.drawImage(lose1img, 0, 0);
	};
	this.imgNum = 1;
}

lose.prototype.type = "lose";

//this does nothing on mouse clicks
lose.prototype.buttonPress = function(e){};

//updates the lose screen
lose.prototype.update = function(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 600, 600);
	ctxh.fillStyle = "black";
	ctxh.fillRect(0, 0, 600, 100);	
	switch (this.imgNum){
		case 1:
			ctx.drawImage(lose1img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 1.25:
			ctx.drawImage(lose1img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 1.5:
			ctx.drawImage(lose1img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 1.75:
			ctx.drawImage(lose1img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 2:
			ctx.drawImage(lose2img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 2.25:
			ctx.drawImage(lose2img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 2.5:
			ctx.drawImage(lose2img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 2.75:
			ctx.drawImage(lose2img, 0, 0);
			this.imgNum += 0.25;
			break;	
		case 3:
			ctx.drawImage(lose3img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 3.25:
			ctx.drawImage(lose3img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 3.5:
			ctx.drawImage(lose3img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 3.75:
			ctx.drawImage(lose3img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 4:
			ctx.drawImage(lose4img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 4.25:
			ctx.drawImage(lose4img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 4.5:
			ctx.drawImage(lose4img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 4.75:
			ctx.drawImage(lose4img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 5:
			ctx.drawImage(lose5img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 5.25:
			ctx.drawImage(lose5img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 5.5:
			ctx.drawImage(lose5img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 5.75:
			ctx.drawImage(lose5img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 6:
			ctx.drawImage(lose6img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 6.25:
			ctx.drawImage(lose6img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 6.5:
			ctx.drawImage(lose6img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 6.75:
			ctx.drawImage(lose6img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 7:
			ctx.drawImage(lose7img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 7.25:
			ctx.drawImage(lose7img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 7.5:
			ctx.drawImage(lose7img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 7.75:
			ctx.drawImage(lose7img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 8:
			ctx.drawImage(lose8img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 8.25:
			ctx.drawImage(lose8img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 8.5:
			ctx.drawImage(lose8img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 8.75:
			ctx.drawImage(lose8img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 9:
			ctx.drawImage(lose9img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 9.25:
			ctx.drawImage(lose9img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 9.5:
			ctx.drawImage(lose9img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 9.75:
			ctx.drawImage(lose9img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 10:
			ctx.drawImage(lose10img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 10.25:
			ctx.drawImage(lose10img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 10.5:
			ctx.drawImage(lose10img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 10.75:
			ctx.drawImage(lose10img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 11:
			ctx.drawImage(lose11img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 11.25:
			ctx.drawImage(lose11img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 11.5:
			ctx.drawImage(lose11img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 11.75:
			ctx.drawImage(lose11img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 12:
			ctx.drawImage(lose12img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 12.25:
			ctx.drawImage(lose12img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 12.5:
			ctx.drawImage(lose12img, 0, 0);
			this.imgNum += 0.25;
			break;
		case 12.75:
			ctx.drawImage(lose12img, 0, 0);
			this.imgNum = 1;
			break;
	}
	ctx.fillStyle = "red";
	ctx.font = "50px Georgia";
	ctx.fillText("You Have Lost.", 140, 315);
};