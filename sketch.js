var player,playerImg;
var zombieImg,enemyGroup;
var bullet,bulletImg,bulletGroup;
var score = 0;
var bg;
var life = 3;
var superowerImg;
function preload(){
  playerImg=loadImage("Rishabh-removebg-preview.png");
  zombieImg=loadImage("Zombie-removebg-preview.png");
  bulletImg=loadImage("bullet-gun-bullet-pointed-images-3.png");
  bg=loadImage("War Background.jpg");
  superpowerImg=loadImage("Energy Ball.image.png"); 
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  player=createSprite(200,500,50,50);
  player.addImage(playerImg);
  player.scale=0.3;
  bulletGroup = new Group();
  enemyGroup = new Group();
}
function draw(){
  background(bg);
  fill("red");
  text("score : "+score,windowWidth-150,windowHeight-625);
  if(keyDown(UP_ARROW)){
    player.y=player.y-100;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+100;
  }
  if(keyDown("SPACE")){
    bullet=createSprite(windowWidth-1150,player.y-30,20,20);
    bullet.addImage(bulletImg);
    bullet.scale=0.05;
    bullet.velocityX=50;
    bulletGroup.add(bullet);
  }
  if(enemyGroup.isTouching(bulletGroup)){
    for(var i = 0;i<enemyGroup.length;i++){
      if(enemyGroup[i].isTouching(bulletGroup)){
        enemyGroup[i].destroy();
        bulletGroup.destroyEach();
        score = score+100;
      }
    }
    
  }
  if(enemyGroup.isTouching(player)){
    
  }
    villain();
  drawSprites();
}
function villain(){
  if(frameCount%20===0){
     enemy = createSprite(random(500,1100),random(100,500),40,40);
     enemy.addImage(zombieImg)
     enemy.velocityX=-3;
     enemy.scale=0.3;
     enemyGroup.add(enemy);
  if(frameCount%100===0){
     superpower = createSprite(enemy.x-50,enemy.y,20,20);
     superpower.addImage(superpowerImg);
     //superpower.shapeColor = "black";
     superpower.velocityX = -3;
     superpower.scale = 0.3;
     //superpower.visible = false;

  }  
  }
}