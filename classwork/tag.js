//player var
/*var meX = 100,
    meY = 50;
var football;
//enemy var
var footballer;
var heX = 700,
    heY = 50;

var myTime = 10;

function setup() {
    createCanvas(1000, 1000);
    football = loadImage("images/smallball.jpg");
    footballer = loadImage("images/smallballer.jpg");
    setInterval(changeTime, 1000);
}

function draw() {
    background(100);
    //player
    image(football, meX, meY);
    Move();
    //enmey
    image(footballer, heX, heY);
    chace();
    //time
    text(myTime + " seconds", 50, 50);



}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
    }
}

function changeTime() {
    myTime--;
    if (myTime < 0) {
        // reset
        myTime = 10;
    }
    //myTime -= 1;
    //myTime = myTime - 1;
}

function Move() {
    if (keyIsPressed) {
        if (key == 'a') {
            meX -= 5;
        } else if (key == 'd') {
            meX += 5;
        } else if (key == 'w') {
            meY -= 5;
        } else if (key == 's') {
            meY += 5;
        }
    }
}

function chace() {
    /*if (HeX < MeX) {
        HeX += 5;
    }
    if (HeX > MeX) {
        HeX -= 5;
    }
}/*/