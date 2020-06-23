var car1,car2,car3,car4;
var ground;
var bg;
var wall1,wall2,wall3,wall4;
var car1Img,car2Img,car3Img,car4Img;

function preload(){
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight - 110);

  //car1 = createSprite(100,200,0,0);

  bg = createSprite(640,360,displayWidth,displayHeight);
  bg.shapeColor = "lightskyblue";

  

  ground = createSprite(640,305,500,500);
  ground.shapeColor = "sienna"

  wall1 = createSprite(640,45,540,20);
  wall1.shapeColor = "yellow";

  wall2 = createSprite(640,550,540,20);
  wall2.shapeColor = "yellow";

  wall3 = createSprite(900,300,20,520);
  wall3.shapeColor = "yellow";

  wall4 = createSprite(380,300,20,520);
  wall4.shapeColor = "yellow";


  car1 = createSprite(425,125,300,300);
  car2 = createSprite(425,475,300,300);
  car3 = createSprite(850,125,300,300);
  car4 = createSprite(850,475,300,300);

  car1.addImage("car1",car1Img);
  car2.addImage("car2",car2Img);
  car3.addImage("car3",car3Img);
  car4.addImage("car4",car4Img);
}

function draw() {
  background(0);  
  console.log(displayWidth);
  console.log(displayHeight);
  drawSprites();


  fill("red")
  textSize(25);
  text("Yellow is a warning zone", 950, 320);
  textSize(23);
  text("If you pass it and go into the blue", 925, 345);
  textSize(50);
  text("YOU LOSE", 950, 400);
}