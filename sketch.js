var fr, mr
var go1,go2,go3,go4

function setup() {
  createCanvas(1200,800);
  fr = createSprite(600, 400, 50, 80);
  fr.shapeColor = "green";
  fr.debug = true;
  mr = createSprite(400,200,80,30);
  mr.shapeColor = "green";
  mr.debug = true;
  go1 = createSprite(100,100,50,50);
  go1.shapeColor="green";
  go2 = createSprite(200,100,50,50);
  go2.shapeColor="green";
  go3 = createSprite(300,100,50,50);
  go3.shapeColor="green";
  go4 = createSprite(400,100,50,50);
  go4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;

if(Touching(mr,go4)) {
  mr.shapeColor="red"
  go4.shapeColor="red"
}
else {
  mr.shapeColor="green"
  go4.shapeColor="green"
}
  drawSprites();
}
function Touching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true
}
else {
  return false
}
}