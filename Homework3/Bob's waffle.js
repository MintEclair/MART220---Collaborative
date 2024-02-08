var x = 350;
var y = 50;
var Rx = 50;
var Ry = 50;
function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    background(300);
  //my name
  text("Kenny Wright", 320, 350);
     //waffle
     circle (200,200,100);
     line (200, 250, 200, 150);
     line (150, 200, 250, 200);
     line (155, 175, 245, 175);
     line (155, 225, 245, 225);
     line (175, 155, 175, 245);
     line (225, 155, 225, 245);
//random
       // var i = 100;
      //while(i < 300);
  for(var i = 0; i < 5; i++)
        {
            rect(Rx,Ry,30,50);
          Rx+=random(50);
          Rx-=random(50);
          Ry+=random(50);
          Ry-=random(50);
        }
        Rx = constrain(Rx,50, width - 50);
        Ry = constrain(Ry,50, height - 50);
  //player
  fill(230,150,10);
  square(x,y,30);
  text("Bob",x,y);
  //move square
  if(keyIsPressed)
    {
      if(key == 'a')
        {
          x-=5;
        }
      else if(key == 'd')
        {
          x+=5;
        }
      else if(key == 'w')
        {
          y-=5;
        }
      else if(key == 's')
        {
          y+=5;
        }
    }
}