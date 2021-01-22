var cat , cat_stay , cat_running , cat_catch;
var mouse , mouse_image;
var bg;


function preload() 
{
  cat_stay = loadImage(cat1.png );
  cat_running = loadImage (cat2.png);
  cat_catch = loadImage (cat3.png);
  mouse_image = loadAnimation (mouse1.png , mouse2.png , mouse3.png);

  bg = loadImage (garden.png);

}

function setup()
{
  createCanvas(1000,800);
  cat=createSprite(600,700);
  mouse=createSprite(100,700);

 

}

function draw() {

  background("bg");
  
  if (cat.x - mouse.x <= cat.width/2 - mouse.width/2)
  {
    cat.changeImage(cat_catch);
    cat.velocityX=0;
  }

  if(keyDown("left"))
  {
      cat.changeImage(cat_running);
      cat.velocityX=-5;
  }



  drawSprites();
}



