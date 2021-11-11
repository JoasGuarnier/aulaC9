var jog 


function setup() {
  createCanvas(800,800);
  jog = createSprite(200, 200, 20, 20)
  jog.shapeColor = "red"
  
}

function draw() 
{
  background("green");
  movimento();
  drawSprites();
  
}

function movimento(){
if(keyDown("up")){
jog.y = jog.y - 5
}
if(keyDown("down")){
  jog.y = jog.y + 5
 }
if(keyDown("right")){
    jog.x = jog.x + 5
}
if(keyDown("left")){
      jog.x = jog.x - 5
}
}




