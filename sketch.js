var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.010;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprite = Math.round(random(1,3));
  if (frameCount % 80==0){
    if(select_sprite ==1){
      createaples();
    }else if (select_sprite == 2){
      createOrange();
    }else{
      createred();
    }
  }rabbit.x = World.mouserX;
  drawSprites();
  
}function createaples(){
  aples=createSprite(random(50,350),40,10,10);
  aples.addImage(appleImg);
  aples.scale=0.07;
  aples.velocityY = 3;
  aples.lifetime = 150;
}
function createOrange(){
  orange=createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY = 3;
  orange.lifetime = 150;
}
function createred(){
  red=createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.06;
  red.velocityY = 3;
  red.lifetime = 150;
}
