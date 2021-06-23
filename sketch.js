//creating objects
var sky,skyImg;
var airplain,airplainImg;
var thunderstrome,thundrestromeImg,thunderstromeGroup;
var obstacles,obstaclesImg,obstaclesGroup;


    function preload(){

  //loading image for background,airplain,thunderstrome and obstacles
  skyImg=loadImage("background.jpg");
  airplainImg=loadImage("airplain.png");
  thunderstromeImg=loadImage("thunderstrome.png");
  obstacleImg=loadImage("statue.png");

}
function setup(){

  //creating canvas
  createCanvas(600,400);

  //creating sky
  sky=createSprite(200,180,400,20);
  sky.addImage(skyImg);
  sky.x = sky.width /2;
  sky.scale=1.5;

  //creating ground
  ground=createSprite(0,390,1200,20);
  ground.visible=false;

  //creating airplain
  airplain=createSprite(200,200,10,10);
  airplain.addImage("airplain",airplainImg);
  airplain.scale=0.09;

  //creating group for obstacle and thunderstrome
  obstaclesGroup=new Group();
 thunderstromeGroup =new Group();

}

function draw(){

background("pink");

//moving ground
sky.velocityX = -2;

//resetting the positon of the sky
if (sky.x < 0){
  sky.x = sky.width /2;
}  
      
  //making the airplain move
  if(keyDown("space") && airplain.y >= 100){
    airplain.velocityY=-10;
    }

    //adding gravity to airplain
    airplain.velocityY = airplain.velocityY + 0.8


//moving airplain with left and right arrow key
  if(keyDown("left_arrow")){
    airplain.x=airplain.x-3;
  }

   if(keyDown("right_arrow")){
    airplain.x=airplain.x+3;
      }

  //calling function
   object();

   //ollided airplane with invisible ground
   airplain.collide(ground);
  drawSprites();
}

function object(){

  // creating sprite for thunderstrome 
  if(frameCount%240===0){

    //created thunderstrome sprite
     thunderstrome=createSprite(600,50);
     thunderstrome.scale=0.2;
  
    //placing thunderstrome on random position 
    thunderstrome.y=Math.round(random(10,40));
   
    //adding image to thunderstrome 
    thunderstrome.addImage(thunderstromeImg);

     //giving velocity to thunderstrome 
    thunderstrome.velocityX=-2;
    
    //giving lifetime to thunderstrome 
    thunderstrome.lifetime=300;
  
     }
  
}
    
  
