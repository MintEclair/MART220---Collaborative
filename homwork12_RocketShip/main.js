let rotationAngle = 0;

function setup() {
    createCanvas(700, 600, WEBGL);

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
}