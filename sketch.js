var bg, bgImg
var player, playerImg


function preload(){
bgImg = loadImage("assets/Background.png")

playerImg = loadImage("./assets/C2.png")
}

function setup(){
createCanvas(1400, 600);
//background image
bg = createSprite(165,160,1,1);
bg.addImage(bgImg);
bg.scale = 2.0
bg.x =bg.width/2;
      
player = createSprite(200, 343, 10, 10);
player.addImage(playerImg)
player.scale = 0.2;
}

function draw() {
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
background(bgImg);   
drawSprites();
if(keyDown('SPACE')){
  player.velocityY=-12;
}
if(player.y < 343){
  player.velocityY = player.velocityY + 1;
}
if(player.y > 343){
  player.y = 343;
} 
bg.velocityX = -4;
        
}
