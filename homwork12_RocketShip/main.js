let rotationAngle = 0;
let car;
let donut = [];
var donutX = 24,
    donutY = 16;

function setup() {
    createCanvas(700, 600, WEBGL);
    car = loadModel("models/meCar.obj");
    train = loadModel("models/trian.obj.obj", true);
    donut.push(new newShapeClass("torus", 100, 50, donutX, donutY, 200, 200));
    donut.push(new newShapeClass("torus", 100, 50, donutX, donutY, -200, 200));
    donut.push(new newShapeClass("torus", 500, 150, donutX, donutY, 0, 0));
    donut.push(new newShapeClass("torus", 100, 50, donutX, donutY, 200, -200));
    donut.push(new newShapeClass("torus", 100, 50, donutX, donutY, -200, -200));
}

function draw() {
    background(100, 30, 100);


    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(0, 0, 0);
    cone(50, -75, 20, 16, 30);
    rotationAngle++;
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial();
    translate(0, 100, 0);
    cylinder(50, -125, 24, 1, 30, 30);
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial();
    translate(50, 150, 0);
    cylinder(25, 50, 24, 1, 30, 30);
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial();
    translate(-50, 150, 0);
    cylinder(25, 50, 24, 1, 30, 30);
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(50, 100, 0);
    cone(25, -50, 20, 16, 30);
    //rotationAngle++;
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(-50, 100, 0);
    cone(25, -50, 20, 16, 30);
    //rotationAngle++;
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(-50, 175, 0);
    cone(25, -50, 20, 16, 30);
    //rotationAngle++;
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(50, 175, 0);
    cone(25, -50, 20, 16, 30);
    //rotationAngle++;
    pop();
    push();
    rotateY(rotationAngle);
    normalMaterial(1, 100, 0);
    translate(0, 175, 0);
    cone(50, -50, 20, 16, 30);
    //rotationAngle++;
    pop();
    push();
    rotateZ(rotationAngle);
    rotateX(rotationAngle);
    normalMaterial();
    translate(-100, 0, -100);
    model(train);
    pop();
    push();
    rotateZ(rotationAngle);
    rotateX(rotationAngle);
    translate(100, 0, 100);
    normalMaterial();
    model(car);
    pop();
    if (mouseIsPressed) {
        for (var i = 0; i < donut.length; i++) {
            donut[i].draw(frameCount);
        }
        translate(random, random, random);
        text("transport", -100, -100);
    }
}