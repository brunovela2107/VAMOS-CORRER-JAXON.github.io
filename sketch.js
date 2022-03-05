var runner 
var Runner
var cenario
var Cenario
var paredes

function preload(){
  //imagens pré-carregadas
  runner = loadAnimation("Runner-1.png","Runner-2.png");
  cenario = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  Cenario = createSprite(200,300,100,100);
  Cenario.addAnimation("fundo",cenario);
  Cenario.scale = 1.2;
  
  Runner = createSprite(100,250,80,80);
  Runner.addAnimation("corredor",runner);
  Runner.scale = 0.1;

  paredes = createEdgeSprites();
  
}

function draw() {
  background(0);
  drawSprites();

  Runner.collide(paredes);
    
  Cenario.velocityY = 4;

    if(keyDown(LEFT_ARROW)){
    Runner.velocityX=-4;
    Runner.velocityY=0;
    }
    if(keyDown(RIGHT_ARROW)){
    Runner.velocityX=4;
    Runner.velocityY=0;
    }
    
    if(Cenario.y > 500){
    Cenario.y = height/2;
     }
}











