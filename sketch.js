var Player ;
var AstaRun , AstaStand ;
var Platform1 , Platform2 , Platform3 , Platform4;

function preload () {
 AstaRun = loadImage("AstaRun.png");
 AstaStand = loadImage("AstaStand.png");
}






function setup() {
  createCanvas(800,400);
  
  Platform1 = createSprite(300 , 200 , 70 , 70 );
  Platform2 = createSprite(400 , 100 , 70 , 70 );
  Platform3 = createSprite(500 , 200 , 70 , 70 );
  Platform4 = createSprite(400 , 300 , 70 , 70 );
  Player = createSprite(400, 200, 50, 50);
  Player.shapeColor = "red" ;
  Player.addImage("p",AstaStand);
  Player.scale = 0.2;
}

function draw() {
  background(255,255,255);  

if (keyDown(UP_ARROW)){
  Player.y = 100;
  Player.x = 400;  
}
 
if (keyDown(DOWN_ARROW)){
  Player.y = 300 ;
  Player.x = 400;
}

if (keyDown(LEFT_ARROW)){
  Player.y = 200 ;
  Player.x = 300;
}

if (keyDown(RIGHT_ARROW)){
  Player.x = 500 ; 
  Player.y = 200;
}





  drawSprites();
}