let SmAni;

function setup() {
    createCanvas(500, 200);

    SmAni = loadAnimation('images/spaceMarine.jpg', { frameSize: [70, 95], frames: 6 });
}

function draw() {
    backgound(100, 30, 100);
    clear();
    animation(SmAni, 100, 100);

    //scale(0.6);
    //image(SmAni.spriteSheet, 320, 80, 500, 154);

}