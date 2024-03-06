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
var idleStrings = [];
var walk = [];
var walkStrings = [];
//var player;
var flipX = false;
var brains;
var j = 0;
var points = 0;
var hp = 20;
var meTimer = 10;
var cherryBomb;
var backgroundMusic;
var pointSound;
var pointloss;
var deathSound;

function preload() {
    idleStrings = loadStrings("../text/idle.txt");
    walkStrings = loadStrings("../text/walk.txt");
    backgroundMusic = loadSound("sounds/Loonboon.mp3");
    pointSound = loadSound("sounds/8bitVideoGamePoints.mp3");
    pointloss = loadSound("sounds/woodSmash.mp3");
    deathSound = loadSound("sounds/goblinDeath.mp3");
}


function setup() {
    createCanvas(900, 800);
    for (let k = 0; k < idleStrings.length; k++) {
        Idle[k] = new imageClass(idleStrings[k], 100, 300, 680, 472);
    }
    console.log(walkStrings.length);
    for (let k = 0; k < walkStrings.length; k++) {
        walk[k] = new imageClass(walkStrings[k], 100, 300, 680, 472);
    }

    brains = new imageClass("../image/brian.png", 300, 50, 73, 48);
    cherryBomb = new imageClass("../image/badFood.png", 300, 500, 163, 185);
    fontType = loadFont("font\run_2\Run! Demo.otf");

    setInterval(UpdatePic, 50);
    setInterval(timer, 1000);

}

function draw() {
    background(150, 55, 50);
    if (brains != null) {
        brains.draw();
    }
    if (cherryBomb != null) {
        cherryBomb.draw();
    }
    if (hp > 20) {
        hp = 20;
    }
    if (hp <= 0) {
        points = 0;
        hp = 20;
        deathSound.play();
    }
    /*if (flipX) {
         push();

         // Scale -1, 1 means reverse the x axis, keep y the same.
         scale(-1, 1);

         // Because the x-axis is reversed, we need to draw at different x position.
         //   image(img, -width, 0);
         //image(Idle[i], -pX - pWidth, pY);

         pop();
     } else {
         // image(Idle[i], pX, pY);

     }*/
    if (keyIsPressed) {
        if (key == "w") {
            pY -= 10;
            console.log(pY);
        }
        if (key == "s") {
            pY += 10;
            console.log(pY);
        }
        if (key == "a") {
            pX -= 10;
            //  console.log(xImage);

            //Idle[i].updateX(pX);
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
            Idle[ii].y = pY;
        }
        for (var q = 0; q < walk.length; q++) {
            walk[q].updateX(pX);
            walk[q].y = pY;
            if (brains != null && walk[q].checkCollision(brains.x, brains.y, brains.w, brains.h)) {
                console.log("nom");
                brains = null;
                points++;
                hp++;
                pointSound.play();
                console.log("socre" + points);
                if (brains == null) {
                    console.log("make new brain");
                    brains = new imageClass("../image/brian.png", random(50, width - 73), random(50, height - 48), 73, 48);
                }
            }
            if (cherryBomb != null && walk[q].checkCollision(cherryBomb.x, cherryBomb.y, cherryBomb.w, cherryBomb.h)) {
                console.log("nom");
                cherryBomb = null;
                hp--;
                pointloss.play();
                console.log("socre" + points);
                if (cherryBomb == null) {
                    console.log("new bomb");
                    cherryBomb = new imageClass("../image/badFood.png", random(50, width - 163), random(50, height - 185), 163, 185);
                }
            }
        }
        console.log(i);
        walk[j].draw();
    } else {
        Idle[i].draw();
    }
    fill(100, 250, 100);
    textSize(24);
    textFont(fontType);
    text("score" + points, 50, 50);
    fill(100, 250, 100);
    textSize(24);
    textFont(fontType);
    text("health" + hp, 150, 50);

    fill(100, 250, 100);
    textSize(24);
    text(meTimer + "seconds", 50, 75);
}


function UpdatePic() {
    i++;
    if (i > Idle.length - 1) {
        i = 0;
    }
    j++;
    if (j > walk.length - 1) {
        j = 0;
    }
}

function timer() {
    meTimer--;
    if (meTimer < 0) {
        meTimer = 10;
    }
}

function mousePressed() {
    backgroundMusic.loop();
}