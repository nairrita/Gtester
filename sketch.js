//drop ball test

var glass,ball;
var fail,pass;
var glassPass; 

var ball1;
const g=9.8
var h=10
var ground;
var qcImage,qc

function preload(){
  qcImage = loadImage("QC1.png")
  bg=loadImage("cleanroom.jpg")
  gl = loadImage("gpanefinal.png")
}




function setup(){
  createCanvas(800,600)

  qc = createSprite(650,580,50,50)
  qc.visible = false
  qc.scale = 0.25
  glassPass = createSprite(490,580,200,20)
  glassPass.visible = false;
  glassPass.shapeColor = "white"
  glass= createSprite(120,580,200,20)
  glass.shapeColor = "white"
  //glass.addImage("g1",gl)
  m=Math.round(random(10,80))
  ball= createSprite(100,100,m,m)
  ball.shapeColor = "brown"
  fail = createSprite(250,50,70,30)
  
  ground = createSprite(400,590,800,10)
  ground.visible = false
  console.log(m)
}

function draw(){
  background(bg)
  fill("black")
text(" GLASS QC BY DROP BALL TEST WITH DIFFERENT MASS", 10,20)
text("Press Spacebar to start the test",10,50)
text("Press Right Arrow key to move the glass for a QC approve", 300,100)
if(keyDown("SPACE")){
  ball.velocityY = 5
}
  

  strokeWeight(4)
  stroke("white")
  line(350,0,350,600)
  //collision1
  if(glass.y-ball.y<glass.height/2+ball.height/2){
    E = m*g*h
    ball.velocityY=0
    if(E>900 && E<6000){
      fail.shapeColor = "green"
     textSize(20)
      text("PASS",220,90)
      if(keyDown("RIGHT_ARROW")){
      glassPass.visible = true
      glass.visible = false
      ball.visible = false
      qc.visible = true
      qc.addImage("qc",qcImage)

     
      }

    }
    else{
      fail.shapeColor="red"
      textSize(20)
      text("FAIL",220,90)
    }

    
  }

  
  drawSprites()
}


