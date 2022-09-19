
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow, background, redB, darkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage,blue_balloonImage, dark_balloonImage, backgroundImage;
var tijolo, tijolo2;

function preload(){
  
  backgroundImage = loadImage("background0.jpg");
  

  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");

  blue_balloonImage = loadImage("blue_balloon0.png");
  dark_balloonImage = loadImage("dark_balloon0.png");

}



function setup() {
  createCanvas(600, 400);
  
  //crie o fundo
  scene = createSprite(300,200,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 0.5;
  
  // criando arco para a flecha

  tijolo = createSprite(300,400,600,10);
  tijolo.visible=false;

  tijolo2 = createSprite(300,150,600,10);
  tijolo2.visible=false;

  bow = createSprite(200,350,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.2;
  
   score = 0  
  redB= new Group();
  //Crie um grupo para greenBalloon (balão verde)
  greenB = new Group();
 //Crie um grupo para blueBalloon (balão azul)
 blueB = new Group();
 //Crie um grupo para pinkBalloon (balão rosa)
 pinkB = new Group();

 darkB = new Group();
  

 
  
}

function draw() {
 background(0);
 if(gameState === PLAY){

  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 100){
      scene.x = scene.width/4;
    }
  
  
  
  
  
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 200 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:darkBalloon();
      break;
      case 4:greenBalloon();
      break;

      default:break;
    }
  }

  if(bow.isTouching(redB) || bow.isTouching(darkB) || bow.isTouching(greenB) || bow.isTouching(blueB)){
    gameState= END;
  }

  bow.velocityY=4;

  if(keyDown("space")){
    bow.velocityY=-5;
    
  }



  bow.collide(tijolo);
  bow.collide(tijolo2);

 }

 if(gameState===END){
  scene.velocityX=0;

redB.destroyEach();
darkB.destroyEach();
greenB.destroyEach();
blueB.destroyEach();

bow.velocityY=0;
 }
  
  drawSprites();

  
}


function redBalloon() {
  var red = createSprite(600,360, 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = -3;
  red.lifetime = 300;
  red.scale = 0.3;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(600,360, 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = -3;
  blue.lifetime = 300;
  blue.scale = 0.3;
 //Adicione o grupo
 blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(600,360, 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = -3;
  green.lifetime = 300;
  green.scale = 0.3;
  //Adicione o grupo
  greenB.add(green);
}

function darkBalloon() {
  var dark = createSprite(600,360, 10, 10);
  dark.addImage(dark_balloonImage);
  dark.velocityX = -3;
  dark.lifetime = 300;
  dark.scale = 0.3;
 //Adicione o grupo
 darkB.add(dark);
}

