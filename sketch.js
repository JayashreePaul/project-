var bg;
var sleep;
var drink;
var eat;
var gym;
var move;
var austraunaut;



function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png")
eat =loadAnimation("eat2.png","eat1.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  gymRun = loadAnimation("gym1.png","gym2.png");
  gymLift = loadAnimation("gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");

   

}


function setup() {
   
  
  createCanvas(600,600);
 
  background = createSprite(600,600);
   background.addImage("iss.png",bg)
  austraunaut = createSprite(300,230);
  austraunaut.addAnimation("sleeping",sleep);
  austraunaut.addAnimation("eating",eat);
  austraunaut.addAnimation("gyming",gymRun);
  austraunaut.addAnimation("moving",move);
  austraunaut.addAnimation("gyming2",gymLift);
  austraunaut.addAnimation("bathing", bath);
  austraunaut.addAnimation("drinking", drink);
  austraunaut.scale= 0.1;

  
}

function draw() {
  

   if (keyDown("UP_ARROW")){
     ate();
   }
   if (keyDown("DOWN_ARROW")){
     Drink();
   }
   if (keyDown("RIGHT_ARROW")){
     Bath();
   }
   if(keyDown("LEFT_ARROW")){
     Run();
     
   }
   if (keyDown(13)){
    Lift();
   }
   if (keyDown(1)){
     Move();
   }
  

  drawSprites();
  textSize(20)
  fill(255)
  text("click up_arrow to eat", 20,50);
  text("click down_arrow to drink", 20,70);
  text("click right_arrow to bath", 20,90);
  text("click left_arrow to Run", 20,110);
  text("click enter Key to Lift",20,130);
  
  
}
function ate(){

  austraunaut.changeAnimation("eating",eat);
  austraunaut.y = 400;
  austraunaut.x = 270;
  austraunaut.velocityX=0;
  austraunaut.velocityY=0;
}
function Drink(){
 
  austraunaut.changeAnimation("drinking",drink);
  austraunaut.y = 350;
  austraunaut.x = 400;
  austraunaut.velocityX=0;
  austraunaut.velocityY=0;
}
function Bath(){
  austraunaut.changeAnimation("bathing",bath);
  austraunaut.y = 270;
  austraunaut.x = 300;
  austraunaut.velocityX=0;
  austraunaut.velocityY=0;
}
function Run(){
  austraunaut.changeAnimation("gyming",gymRun);
  austraunaut.y = 230;
  austraunaut.x = 270;
  austraunaut.velocityX=0;
  austraunaut.velocityY=0;

}
function Lift(){
  austraunaut.changeAnimation("gyming2",gymLift);
  austraunaut.y = 450;
  austraunaut.x = 350;
  austraunaut.velocityX=0;
  austraunaut.velocityY=0;
}
function Move (){
  austraunaut.changeAnimation("moving",move);
  austraunaut.y = 400;
  austraunaut.x = 270;
  austraunaut.velocityX=1;
  austraunaut.velocityY=0.6;
}
