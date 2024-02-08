var x = 350;
var y = 50;
var Rx = 50;
var Ry = 50;
var IX = 100,
    IY = 250;
var pic;
var pic2;
var pic3;
var font;

var myTime = 10;

function setup() {
    createCanvas(1000, 1000);
    pic = loadImage("images/craiyon_170707_donut_with_guns.png");
    pic2 = loadImage("images/gundoge.jpg");
    pic3 = loadImage("images/poopcube.jpg");
    font = loadFont("fonts/thin_fox.ttf");
    setInterval(timer, 1000);
}

function draw() {
    background(100);
    image(pic, 500, 500)
    image(pic2, 200, 200);
    textFont(font);
    text(myTime + "secondes", 100, 300);
    //timer();
    //my name
    textFont(font);
    text("Kenny Wright", 420, 350);
    //waffle
    circle(200, 200, 100);
    line(200, 250, 200, 150);
    line(150, 200, 250, 200);
    line(155, 175, 245, 175);
    line(155, 225, 245, 225);
    line(175, 155, 175, 245);
    line(225, 155, 225, 245);
    //random
    // var i = 100;
    //while(i < 300);
    for (var i = 0; i < 5; i++) {
        rect(Rx, Ry, 30, 50);
        Rx += random(50);
        Rx -= random(50);
        Ry += random(50);
        Ry -= random(50);
    }
    for (var i = 0; i < 5; i++) {
        image(pic3, IX, IY);
        IX += random(10);
        IX -= random(10);
        IY += random(10);
        IY -= random(10);
    }
    Rx = constrain(Rx, 50, width - 50);
    Ry = constrain(Ry, 50, height - 50);
    IX = constrain(IX, 10, width - 10);
    IY = constrain(IY, 10, height - 10);
    //player
    fill(230, 150, 10);
    square(x, y, 30);
    text("Bob", x, y);
    //move square
    if (keyIsPressed) {
        if (key == 'a') {
            x -= 5;
        } else if (key == 'd') {
            x += 5;
        } else if (key == 'w') {
            y -= 5;
        } else if (key == 's') {
            y += 5;
        }
    }
}

function timer() {
    myTime--;
    if (myTime < 0) {
        // reset
        myTime = 10;
    }
}