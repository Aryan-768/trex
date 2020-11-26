
var monkey , monkey_running;
var banana ,bananaImage, obstacle,obstacleImage;
var bananaGroup, obstacleGroup;
var score,ground;
function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
         
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey_collided=loadImage("sprite_2.png");
 
}



function setup() {
  createCanvas(450,400)

  monkey=createSprite(50,340,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("white");
  
  
  if(ground.x<0){
     ground.x=ground.width/2;
     }
  
  if(keyDown("space")&& monkey.y>150){
    monkey.velocityY=-12;
  }
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1;
}
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
 var survivalTime=0
 var score=0;
 stroke("white");
  textSize(20);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  obstacle.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
  banana();
  
  obstacle();
  
  drawSprites();
  text("Score: "+ score,350,50);
}

function banana(){
  if(frameCount % 80 === 0){
   var banana=createSprite(500,200,10,10);
    banana.y=Math.round(random(120,400));            banana.addImage("banana",bananaImage);
   banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 300 === 0){
    var obstacle=createSprite(500,320,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
  }
}

