var fix1;    
var fix2;    
var fix3;   
var fix4;  
var moving; 
var canvas;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  
moving=createSprite(random(10,750),300,20,20);
moving.shapeColor="white";
moving.velocityX=5
moving.velocityY=5;

    fix1=createSprite(100,590,180,20);
    fix1.shapeColor="red";

    fix2=createSprite(300,590,180,20);
    fix2.shapeColor="green";


    fix3=createSprite(500,590,180,20);
    fix3.shapeColor="blue";

    fix4=createSprite(700,590,180,20);
    fix4.shapeColor="yellow"; 

}

function draw() {
    background(rgb(169,169,169));

    if(moving.x<0){
        music.stop()
        moving.velocityX=-3

    }
    else if(moving.x>800){
        music.stop()
        moving.velocityX=3
    }
    if(moving.isTouching(fix4)){
        moving.shapeColor="yellow"
        moving.bounceOff(fix4)
    }
    else if(moving.isTouching(fix3)){
        moving.shapeColor="blue"
        moving.bounceOff(fix3)
    }
    else if(moving.isTouching(fix1)){
        moving.shapeColor="red"
        moving.bounceOff(fix1)
    }
     else if(moving.isTouching(fix2)){
        moving.shapeColor="green"
        moving.bounceOff(fix2)
        moving.velocityX=0
        moving.velocityY=0
    }
    edges=createEdgeSprites()
    moving.bounceOff(edges)
   drawSprites()



}
