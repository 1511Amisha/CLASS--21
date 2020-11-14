var fixedRect,movingRect


function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400,400,50,50);
  fixedRect.velocityX=3;
  movingRect=createSprite(500,400,50,50);
  movingRect.velocityX=-3;
}

function draw() {
  background(255,255,255);  
//movingRect.x=mouseX;
//movingRect.y=mouseY;

bounceOff(movingRect,fixedRect);
  drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.width/2+object2.width/2 ){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
      
  }
  
}