var car;
var wall;
var deformation;
var speed;
var weight;
var gameState;

function setup() {
  createCanvas(800,400);

car = createSprite(100,200,30,30);
//car.velocityX = 2;

wall = createSprite(700,200,30,150);

gameState = "stand";

speed = random(55,90);
weight = random(400,1500);

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

if(keyDown("space")){
  
gameState = "run";

}

if(gameState === "run"){

deformation = 0.5 * weight * speed * speed / 22500;

car.velocityX = speed/10;

if(car.width / 2 + wall.width / 2 > car.x - wall.x
&& car.width / 2 + wall.width / 2 > wall.x - car.x){

  car.velocityX = 0;

if(deformation < 80){

car.shapeColor = color(0,255,0);

}
if(deformation < 180 && deformation > 80){

car.shapeColor = color(230,230,0);

}
if(deformation > 180){

car.shapeColor = color(255,0,0);

} 
}

}

  drawSprites();
}