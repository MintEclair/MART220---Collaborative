var pX = 100,
    pY = 300;
var speedX, speedY;
var pWidth = 430,
    pHeight = 519;
var textX = 50,
    textY = 50;
var fontType;
var i = 0;
var time = 10;
var Idle = [];
var flipX = false;
var Idle1, Idle2, Idle3, Idle4, Idle5, Idle6, Idle7, Idle8, Idle9, Idle10, Idle11,
    Idle12, Idle13, Idle14, Idle15;
var i = 0;

function preload() {
    // idle1 = loadImage("image/Idle (1).png");
    /*  idle2 = loadImage("image/Idle (2).png")
    idle3 = loadImage("image/Idle (3).png");
    idle4 = loadImage("image/Idle (4).png");
    idle5 = loadImage("image/Idle (5).png");
    idle6 = loadImage("image/Idle (6).png");
    idle7 = loadImage("image/Idle (7).png");
    idle8 = loadImage("image/Idle (8).png");
    idle9 = loadImage("image/Idle (9).png");
    idle10 = loadImage("image/Idle (10).png");
*/
}


function setup() {
    createCanvas(1300, 1200);

    //Idle[0] = idle1;
    //Idle[1] = idle2;
    //Idle[2] = idle3;
    //Idle[3] = idle4;
    //Idle[4] = idle5;
    //Idle[6] = idle7;
    //Idle[7] = idle8;
    //Idle[8] = idle9;
    //Idle[9] = idle10;
    /* Idle1 = new imageClass("male/Idle (1).png", pX, pY, 300, 300, 100, 100);
     Idle2 = new imageClass("male/Idle (2).png", pX, pY, 300, 300, 100, 100);
     Idle3 = new imageClass("male/Idle (3).png", pX, pY, 300, 300, 100, 100);
     Idle4 = new imageClass("male/Idle (4).png", pX, pY, 300, 300, 100, 100);
     Idle5 = new imageClass("male/Idle (5).png", pX, pY, 300, 300, 100, 100);
     Idle6 = new imageClass("male/Idle (6).png", pX, pY, 300, 300, 100, 100);
     Idle7 = new imageClass("male/Idle (7).png", pX, pY, 300, 300, 100, 100);
     Idle8 = new imageClass("male/Idle (8).png", pX, pY, 300, 300, 100, 100);
     Idle9 = new imageClass("male/Idle (9).png", pX, pY, 300, 300, 100, 100);
     Idle10 = new imageClass("male/Idle (10).png", pX, pY, 300, 300, 100, 100);
     Idle11 = new imageClass("male/Idle (11).png", pX, pY, 300, 300, 100, 100);
     Idle12 = new imageClass("male/Idle (12).png", pX, pY, 300, 300, 100, 100);
     Idle13 = new imageClass("male/Idle (13).png", pX, pY, 300, 300, 100, 100);
     Idle14 = new imageClass("male/Idle (14).png", pX, pY, 300, 300, 100, 100);
     Idle15 = new imageClass("male/Idle (15).png", pX, pY, 300, 300, 100, 100);

     Idle[0] = Idle1;
     Idle[1] = Idle2;
     Idle[2] = Idle3;
     Idle[3] = Idle4;
     Idle[4] = Idle5;
     Idle[5] = Idle6;
     Idle[6] = Idle7;
     Idle[7] = Idle8;
     Idle[8] = Idle9;
     Idle[9] = Idle10;
     Idle[10] = Idle11;
     Idle[11] = Idle12;
     Idle[12] = Idle13;
     Idle[13] = Idle14;
     Idle[14] = Idle15;
    /* for (var i = 0; i < Idle.langth; i++) {
         Idle[i].resize(Idle[i].pWidth / 5, 0);
     }*/
    for (var i = 0; i < 15; i++) {
        console.log("male/Idle (" + (i + 1) + ").png");
        Idle[i] = new imageClass("male/Idle (" + (i + 1) + ").png", 50, 300, 680, 472);;

    }
    setInterval(UpdatePic, 50);

}

function draw() {
    background(120);
    Idle[i].draw();
    if (flipX) {
        push();

        // Scale -1, 1 means reverse the x axis, keep y the same.
        scale(-1, 1);

        // Because the x-axis is reversed, we need to draw at different x position.
        //   image(img, -width, 0);
        //image(Idle[i], -pX - pWidth, pY);

        pop();
    } else {
        // image(Idle[i], pX, pY);

    }
    if (keyIsPressed) {
        if (key == "w") {
            pY += 10;
            console.log(pY);
        }
        if (key == "s") {
            pY -= 10;
            console.log(pY);
        }
        if (key == "a") {
            pX -= 10;
            //  console.log(xImage);

            Idle[i].updateX(pX);
            flipX = true;
        }
        if (key == "d") {
            pX += 10;

            //console.log(i);
            // console.log()
            flipX = false;
        }

        for (var ii = 0; ii < Idle.length; ii++) {
            Idle[ii].updateX(pX);
            //  Idle[ii].updateY(pY);

        }
    }
}

function UpdatePic() {
    i++;
    if (i > Idle.length - 1) {
        i = 0;
    }
}