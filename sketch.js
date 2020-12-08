var santa, santaPIC;
var bg,bgpic;
var gameState="PLAY";
var score;
var pres,presp;
var presGroup

var rock,rockp;
var rockGroup


function preload(){

  santaPIC=loadImage("images-3.png");
   bgpic=loadImage("download.jpg");
  presp=loadImage("images-1.png");
rockp=loadImage("rock.png");

}

function setup() {
 createCanvas(500,700)
  
bg=createSprite(250,100,50,100);
  bg.addImage(bgpic);

  bg.scale=5
  
  gameState=PLAY=1;
   gameState=END=0;
  
  santa=createSprite(250,350,50,50);
  santa.addImage(santaPIC);
santa.scale=0.3
  
    score = 0
    presGroup = createGroup();
  rockGroup = createGroup();
}

function draw() {
   
  bg.velocityX = -3 
 santa.y = World.mouseY
    if (bg.x < 0){
      bg.x = bg.width/3;
    }
  
  
  spawngift();

   
  if (presGroup.isTouching(santa)){

  score = score+1;
        presGroup.destroyEach();
  }
   spawnrock(); 

  
      if(rockGroup.isTouching(santa)){
      gameState="END"
    }
    
  
  
  if(gameState==="END"){
    
   
    presGroup.destroyEach();
     rockGroup.destroyEach();
    bg.destroy();
   textSize(40);
    background("black");
    fill("cyan");
    text("game over",150,350);
  
  
  }
    
   
  
 
drawSprites();
 text("score"+ score,400,100);  
}






function spawngift() {
  //write code here to spawn the clouds
  if (frameCount % 70 === 0) {
    var pres = createSprite(500,350,40,10);
    pres.y = Math.round(random(100,700));
    pres.addImage(presp);
  pres.scale = 0.15;
    pres.velocityX = -3;
    
     //assign lifetime to the variable
    pres.lifetime = 500;
    
    //adjust the depth
    pres.depth = santa.depth;
    pres.depth = santa.depth + 1;
    
    //add each cloud to the group
    presGroup.add(pres);
  }
}



function spawnrock() {
  //write code here to spawn the clouds
  if (frameCount % 50 === 0) {
    var rock = createSprite(500,350,40,10);
    rock.y = Math.round(random(100,700));
    rock.addImage(rockp);
  rock.scale = 0.15;
    rock.velocityX = -5;
    
     //assign lifetime to the variable
    rock.lifetime = 500;
    
    //adjust the depth
    rock.depth = santa.depth;
    rock.depth = santa.depth + 1;
    
    //add each cloud to the group
    rockGroup.add(rock);
  }
}