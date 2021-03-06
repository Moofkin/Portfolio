/**
 * Music created by Eric Skiff (ericskiff.com) under a Creative Commons Attribution License
 * -Arpanauts (var backgroundMusic): added fade in and fade out, converted from mp3 to wav
 * -We're All Under the Stars (var winMusic): converted from mp3 to wav
 */

var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");

//declaration of the screen manager. This is used as a stack and holds on the top the currently-active screen
var screenManager = [];
screenManager[0] = new mainMenu();

//for loading screen
var loaded = false;

//Canvas stuff
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cw = 20;

var globalatmosphere = new Array();
var globalwin = 0;

//load sounds
var plantRustle = new Audio("PlantRustle.wav");
var button = new Audio("Button Click.wav");
var badButton = new Audio("Bad Button.wav");
var bootUp = new Audio("Turn On.wav");
var shutDown = new Audio("Turn Off.wav");
var energyDown = new Audio("Boop.wav");
var rootGrowing = new Audio("Roots Growing.wav");
var lvlUpSound = new Audio("Level Up.wav");
var droppingOff = new Audio("DroppingOff - Lots.wav");
var pickUp = new Audio("Suck Up.wav");
var youLost = new Audio("Sad Trombone.wav");
var winMusic = new Audio("We're All Under the Stars.wav");
var backgroundMusic = new Audio("Arpanauts.wav");
backgroundMusic.addEventListener('ended', function(){
	this.currentTime = 0;
	this.play();
}, false);
backgroundMusic.addEventListener('canplaythrough', function(){
	this.play();
}, false);
var moving = new Audio("Tire Over Dirt.wav");
moving.addEventListener('ended', function(){
	this.currentTime = 0;
	this.play();
}, false);
var checkMovement = true;

//global declarations
var RIGHT_KEY = 68;
var LEFT_KEY = 65;
var UP_KEY = 87;
var DOWN_KEY = 83;
var X_FLAG = -1;
var Y_FLAG = -1;
var map;
var player;

//cam stuff
var CAM_HEIGHT = 600;
var CAM_WIDTH = 600;
var TOP;
var LEFT;
var CAM_X_OFFSET;
var CAM_Y_OFFSET;

//keyboard
var keyspressed = {};
keyspressed[RIGHT_KEY] = false;
keyspressed[LEFT_KEY] = false;
keyspressed[UP_KEY] = false;
keyspressed[DOWN_KEY] = false;
var keybuf = false;

//plant stuff
var plant;
var growTiles = [];
var growSourceTile;

//control station
var control;

//the HUD
var hud;

//the arrow that directs players back to the station
var arrow;
var isArrow;

document.addEventListener('keydown',keyDown,false);
document.addEventListener('keyup',keyUp,false);

//on a mousedown event, calls the "buttonPress" function of the screen manager's active screen (the last one)
c.onmousedown = function(e){
	screenManager[screenManager.length - 1].buttonPress(e);
};

//redraws the active screen
function redraw(){
	screenManager[screenManager.length - 1].update();
};

setInterval(redraw, 1000/30);