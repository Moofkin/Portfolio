/**
* @author Joseph
*/
/**
* @class: A tree structure of nodes, each with properties denoting location, type, and children
* @property: {PlantNode} stem: "root" node of the tree
* @property: {number} lvl: current level reached by the plant; increases on 'exp' reaching 'expLimit'
* @property: {number} exp: amount of experience acquired for current level; initially returns to 0 on increase in 'lvl'
* @property: {number} expMax: amount of 'exp' required to increase 'lvl' by 1; increases upon increase in 'lvl'
* @property: {number} growthPoints: how many times player may "grow" plant by stretching Plant by its roots
*/
var plantEnum = {SEEDLING: "seedling", SAPLING: "sapling", TREE: "tree", ROOT: "root"};
var hextreeimg = document.createElement("img");
hextreeimg.src = "plant_final_stage_icon copy.png";
var hexsproutimg = document.createElement("img");
hexsproutimg.src = "plant_first_stage_icon copy.png";
var tileChecks = [];
function Plant(startingTile){
//this.stem = new PlantNode(startingTile, plantEnum.SEEDLING);
this.stem = new PlantNode(startingTile, plantEnum.TREE,1);
};
Plant.prototype.stem;
Plant.prototype.lvl = 0;
Plant.prototype.exp = 0;
Plant.prototype.expMax = 100;
Plant.prototype.growthPoints = 0;
Plant.prototype.numRoots = 0;
Plant.prototype.numPlants = 1;
function PlantNode(nodeTile, nodeType,distset){
console.log("making PlantNode");
this.tile = nodeTile;//hex
this.type = nodeType;
this.tile.plant = this;
this.tile.type = "plant";
if(this.type == plantEnum.TREE){
this.tile.color = "green";
this.tile.image = hextreeimg;
}else{
this.tile.color = "darkgreen";
this.tile.image = hexsproutimg;
}
this.tile.atmosphere = true;
tileChecks.push(this.tile);
globalwin = globalwin + 1;
this.distance = distset;
this.tile.displaying = 0;
};
PlantNode.prototype.tile = null;
PlantNode.prototype.type = plantEnum.ROOT;
PlantNode.prototype.parent = null;
PlantNode.prototype.children = new Array();
/**
* Grow plant in particular direction
*
* @param {Object} parent: branch or root to be grown; if branch, root is created; if root, turns to branch and root is created
* @param {Object} tile: tile on which new root is created
*/
Plant.prototype.grow = function(parentNode, tile){
rootGrowing.play();
if(parentNode.type == plantEnum.ROOT){
this.growthPoints-=Math.floor(parentNode.distance);
parentNode.type = plantEnum.TREE;
parentNode.tile.color = 'green';
parentNode.tile.image = hextreeimg;
newRoot = new PlantNode(tile, plantEnum.ROOT,parentNode.distance+.05);
newRoot.parent = parentNode;
parentNode.children.push(newRoot);
tile.plant = newRoot;
++this.numPlants;
}
else if(parentNode.type == plantEnum.TREE){
--control.Enzyme;
++control.TotalEnzymes;
newRoot = new PlantNode(tile, plantEnum.ROOT,parentNode.distance+.05);
newRoot.parent = parentNode;
parentNode.children.push(newRoot);
tile.plant = newRoot;
++this.numRoots;
++this.numPlants;
}
};
/**
* Increases 'lvl' by 1, increases 'expMax,' and wraps extra 'exp' around
*/
Plant.prototype.lvlUp = function(){
switch(this.stem.type){
case plantEnum.SEEDLING:
this.stem.type = plantEnum.SAPLING;
break;
case plantEnum.SAPLING:
this.stem.type = plantEnum.TREE;
default:
this.growthPoints += this.numRoots;
}
this.spreadair();
var extraExp = this.exp - this.expMax;
this.expMax = Math.floor(this.expMax * 1.05);
this.exp = extraExp;
++this.lvl;
lvlUpSound.play();
};
/**
* calls 'lvlUp' if 'expMax' has been reached
*/
Plant.prototype.update = function(){
if(this.exp >= this.expMax){
this.lvlUp();
}
};
/**
* Iterates through an array of the outer-most atmosphere tiles and oxygenates their surrounding tiles
* Post: tileChecks will only contain the outer-most atmosphere tiles
*/
Plant.prototype.spreadair = function(){
console.log("length: " + tileChecks.length);
for(var extraLoops = 0; extraLoops <= Math.floor(this.numRoots / 50); ++extraLoops){
var newChecks = [];
for(var numTile = 0; numTile < tileChecks.length; ++numTile){
if(checkTileBounds((tileChecks[numTile].x-1)/3, tileChecks[numTile].y+1) && !map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y+1].atmosphere){
map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y+1].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y+1]);
globalwin = globalwin + 1;
}
if(checkTileBounds((tileChecks[numTile].x-1)/3, tileChecks[numTile].y) && !map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y].atmosphere){
map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y]);
globalwin = globalwin + 1;
}
if(checkTileBounds((tileChecks[numTile].x-1)/3, tileChecks[numTile].y-2) && !map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-2].atmosphere){
map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-2].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-2]);
globalwin = globalwin + 1;
}
if(checkTileBounds((tileChecks[numTile].x-1)/3, tileChecks[numTile].y-3) && !map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-3].atmosphere){
map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-3].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3][tileChecks[numTile].y-3]);
globalwin = globalwin + 1;
}
//left two bordering tiles' location depends on column of source tile
if(!(tileChecks[numTile].y%2)){
if(checkTileBounds((tileChecks[numTile].x-1)/3+1, tileChecks[numTile].y) && !map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y].atmosphere){
map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y]);
globalwin = globalwin + 1;
}
if(checkTileBounds((tileChecks[numTile].x-1)/3+1, tileChecks[numTile].y-2) && !map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y-2].atmosphere){
map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y-2].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3+1][tileChecks[numTile].y-2]);
globalwin = globalwin + 1;
}
}
if(tileChecks[numTile].y%2){
if(checkTileBounds((tileChecks[numTile].x-1)/3-1, tileChecks[numTile].y-2) && !map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y-2].atmosphere){
map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y-2].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y-2]);
globalwin = globalwin + 1;
}
if(checkTileBounds((tileChecks[numTile].x-1)/3-1, tileChecks[numTile].y) && !map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y].atmosphere){
map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y].atmosphere = true;
newChecks.push(map[(tileChecks[numTile].x-1)/3-1][tileChecks[numTile].y]);
globalwin = globalwin + 1;
}
}
tileChecks.splice(numTile, 1);
--numTile;
}
tileChecks = tileChecks.concat(newChecks);
console.log("Global Win: " + globalwin);
}
};
/**
* makes sure surrounding tiles of growing atmosphere are not out of bounds of map
*
* @param {number} x: x-position of bordering tile in context of map array
* @param {number} y: y-position of bordering tile in context of map array
*/
function checkTileBounds(x, y){
console.log("x: " + x + " y: " + y);
return (x > 0 && x < map.length && y > 0 && y < map[x].length);
}
/**
* Check whether a given tile can contain a new plantNode
*
* @param {hex} tile: hex tile checked for ability to contain new plantNode
*/
function checkTileGrowable(tile){
if(tile.type == 0){
tile.color = 'greenyellow';
growTiles.push(tile);
if (growSourceTile.plant.type == plantEnum.ROOT)
tile.displaying = growSourceTile.plant.distance;
}
}
/**
* Grows a new plantNode and separates the corresponding tile from the array of non-chosen tiles
*/
function growPlant(){
plant.grow(growSourceTile.plant, map[X_FLAG][Y_FLAG]);
for(var numTile = 0; numTile < growTiles.length; ++numTile){
if(map[X_FLAG][Y_FLAG].x == growTiles[numTile].x && map[X_FLAG][Y_FLAG].y == growTiles[numTile].y)
growTiles.splice(numTile, 1);
}
}