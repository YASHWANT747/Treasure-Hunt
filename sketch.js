var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var end, endImg;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");

}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,425,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

end = createSprite(200,200);
end.addImage(endImg);
end.scale = 0.8;
end.visible = false;
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  background(0);
  if(gameState === PLAY){
    
      boy.x = World.mouseX;
        if(cashG.isTouching(boy)){
          treasureCollection = treasureCollection + 50;
          cashG.destroyEach();
        }
        if(diamondsG.isTouching(boy)){
          treasureCollection = treasureCollection + 50;
          diamondsG.destroyEach();
        }
       if(jwelleryG.isTouching(boy)){
         treasureCollection = treasureCollection + 50;
         jwelleryG.destroyEach();
        }
  

    
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
     
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
      if(swordGroup.isTouching(boy)){
        gameState = END;
        }
    
    
    
}
  if(gameState === END){
    
        end.visible = true;
        path.velocityY = 0;
        cashG.destroyEach();
        swordGroup.destroyEach();
        jwelleryG.destroyEach();
        diamondsG.destroyEach();
  }

  
 
  
  
 //console.log(gameState)

  
  //swordGroup.setCollider("circle",10,100,500);
 // swordGroup.debug = true;
     
  edges= createEdgeSprites();
  boy.collide(edges);
  boy.setCollider("circle",10,100,500);
  //boy.debug = true;
  
  

  

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 180 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 225;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 200 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 225;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 220 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 225;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 80 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 225;
  swordGroup.add(sword);
// sword.debug = true;
  }
}





