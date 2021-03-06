var canvas =document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var hexiceimg = document.createElement("img");
hexiceimg.src = "ice_crystal_icon copy.png";
var hexmineralsimg = document.createElement("img");
hexmineralsimg.src = "mineral_icon copy.png";
var hexllamagod = document.createElement("img");
hexllamagod.src = "Llama_GOD copy.png";

function Hex(x,y,cw,color,h){
	this.x = x;
	this.y = y;
	this.drawy = y*cw;
	if (y%2){
		this.drawx = x*cw - (1.5*cw);
	} else {
		this.drawx = x*cw;
	}
	this.h = h;
	this.cw = cw;
	this.color = color;
	this.realcolor = color;
	this.bordercolor = "#FC9854";
	this.imagescale = (.7);//+Math.random()*.3);
}
Hex.beenchecked = false;
Hex.prototype.type = 0;
Hex.prototype.resource = 200;
Hex.prototype.hasPlant = false;
Hex.prototype.atmosphere = false;
Hex.prototype.plant = null;
Hex.prototype.image = 0;
Hex.prototype.line = 1;
Hex.prototype.displaying = 0;

Hex.prototype.paint = function(h,xoffset,yoffset){
	ctx.fillStyle = this.color;
	ctx.strokeStyle = this.bordercolor;
	var cw = this.cw;
	var nx = this.drawx-xoffset;
	var ny = this.drawy-yoffset;
	this.beenchecked = false;
	ctx.lineWidth = this.line;
		ctx.beginPath();
		ctx.moveTo(nx-cw,ny);
		ctx.lineTo(nx-(cw/2),ny-cw);
		ctx.lineTo(nx+(cw/2),ny-cw);
		ctx.lineTo(nx+cw,ny);
		ctx.lineTo(nx+(cw/2),ny+cw);
		ctx.lineTo(nx-(cw/2),ny+cw);
		ctx.lineTo(nx-cw,ny);
		ctx.stroke();
	ctx.fill();
	if (this.atmosphere == true){
		ctx.strokeStyle = "#ABDCF9";
		ctx.beginPath();
		ctx.moveTo(nx-cw+1,ny);
		ctx.lineTo(nx-(cw/2)+1,ny-cw+1);
		ctx.lineTo(nx+(cw/2)-1,ny-cw+1);
		ctx.lineTo(nx+cw-1,ny);
		ctx.lineTo(nx+(cw/2)-1,ny+cw-1);
		ctx.lineTo(nx-(cw/2)+1,ny+cw-1);
		ctx.lineTo(nx-cw+1,ny);
		ctx.stroke();
	}
	if (this.image != 0){
		ctx.drawImage(this.image, nx-20, ny-27, 50*this.imagescale, 50*this.imagescale);	
	}
	if (this.displaying != 0){
		ctx.fillStyle = "black";
		ctx.fillText(Math.floor(this.displaying),nx,ny);
	}
};

/**
 * Returns true if player collided with hex tile of given position within map Array
 * 
 * @param {Object} x: first-dimensional position of hex in map Array
 * @param {Object} y: second-dimensional position of hex in map Array
 */

Hex.prototype.check_tri = function(x,y){
	var cw = this.cw;
	var nx = this.x*cw;
	var ny = this.y*cw;
	var relY = y-ny;
	if (!(this.y%2)){
		nx+=(1.5*cw);
	}
	var relX = x-nx;
	if (relY < -2*relX + (2*cw) && relY > -2*relX - (2*cw) && relY < 2*relX + (2*cw) && relY > 2*relX - (2*cw)){
		return true;
	}
};

/**
 * Check for collision between player and hex tile of given position within map Array
 * 
 * @param {Object} x: first-dimensional position of hex in map Array
 * @param {Object} y: second-dimensional position of hex in map Array
 * @param {Object} player: ...the player object
 */

Hex.prototype.collision = function(x,y,player){
	var cw = this.cw;
	var nx = this.x*cw;
	var ny = this.y*cw;
	if (!(this.y%2)){
		nx+=(1.5*cw);
	}
	//this.color = this.realcolor;
	if (y < (ny+cw+1) && y > (ny-cw)){
		if (this.check_tri(x,y)){
			if (player.height ==-1){
				player.height = this.h;
			}
			if (Math.abs(player.height-this.h)>1){
				if (player.up == true){
					player.y+=player.speed;
				} if (player.down == true){
					player.y-=player.speed;
				} if (player.right == true){
					player.x-=player.speed;
				} if (player.left == true){
					player.x+=player.speed;
				}
			}else{
				//this.color = "white";
				player.height = this.h;
				console.log(this.type);
				if (this.type == 'plant'){
					plantRustle.play();
					player.onPlant = true;
				}
				else{player.onPlant = false;}
				if (this.type == 'water'){player.onWater = true;}else{player.onWater = false;}
				if (this.type == 'mineral'){player.onMinerals = true;}else{player.onMinerals = false;}
				if(control.PlayerEnergy != 0)
					if (this.atmosphere){control.PlayerEnergy = 100;}else{control.PlayerEnergy-=control.PlayerEnergyLossRate;}
				if (this.type == 'control'){
					if(player.hasWater > 0 || player.hasMinerals > 0)
						droppingOff.play();
					player.inControl = true;
					control.Water+=player.hasWater;
					control.Minerals+=player.hasMinerals;
					player.capacity = 0;
					player.hasWater = 0;
					player.hasMinerals = 0;
				}else{player.inControl = false;}
				return true;
			}
		}
	}
};



