/*Arrow Class
 * Coded by Lauren Cunningham
 * This is the class for the in-game guiding arrow
 */

var arrown = document.createElement("img");
arrown.src = "arrow_north copy.png";

var arrowne = document.createElement("img");
arrowne.src = "arrow_northeast copy.png";

var arrowe = document.createElement("img");
arrowe.src = "arrow_east copy.png";

var arrowse = document.createElement("img");
arrowse.src = "arrow_southeast copy.png";

var arrows = document.createElement("img");
arrows.src = "arrow_south copy.png";

var arrowsw = document.createElement("img");
arrowsw.src = "arrow_southwest copy.png";

var arroww = document.createElement("img");
arroww.src = "arrow_west copy.png";

var arrownw = document.createElement("img");
arrownw.src = "arrow_northwest copy.png";

var arrowot = document.createElement("img");
arrowot.src = "arrow_ontarget copy.png";

//creates an arrow. This is called on the creation of a game object
function arrow(){
	this.stationx = 5000 - 30;
	this.stationy = 5000 - 22;
};

//updates the arrow so that it points back to the command station
arrow.prototype.draw = function(){
	if (player.x > this.stationx){
		if(player.y == this.stationy)
			ctx.drawImage(arroww, 262.5, 300, 75, 75);
		if(player.y < this.stationy && player.y != this.stationy)
			ctx.drawImage(arrowsw, 262.5, 300, 75, 75);
		if(player.y > this.stationy && player.y != this.stationy)
			ctx.drawImage(arrownw, 262.5, 300, 75, 75);
	}
	if (player.x < this.stationx){
		if(player.y == this.stationy)
			ctx.drawImage(arrowe, 262.5, 300, 75, 75);
		if(player.y < this.stationy && player.y != this.stationy)
			ctx.drawImage(arrowse, 262.5, 300, 75, 75);
		if(player.y > this.stationy && player.y != this.stationy)
			ctx.drawImage(arrowne, 262.5, 300, 75, 75);
	}
	if (player.x == this.stationx){
		if (player.y == this.stationy)
			ctx.drawImage(arrowot, 262.5, 300, 75, 75);
		if(player.y < this.stationy && player.y != this.stationy)
			ctx.drawImage(arrows, 262.5, 300, 75, 75);
		if(player.y > this.stationy && player.y != this.stationy)
			ctx.drawImage(arrown, 262.5, 300, 75, 75);	
	}
};
