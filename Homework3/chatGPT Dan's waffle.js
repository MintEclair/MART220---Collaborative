let waffleX, waffleY;
let dan;

function setup() {
  createCanvas(400, 400);
  waffleX = width / 2;
  waffleY = height / 2;
  dan = new Square();
}

function draw() {
  background(255);

  // Draw the waffle base at the new position
  drawWaffle(waffleX, waffleY);

  // Update and display the moving square (dan)
  dan.update();
  dan.display();

  // Draw "Kenny" in the lower-right corner
  fill(0);
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  text("Kenny", width - 10, height - 10);

  // Move the waffle randomly
  moveWaffleRandomly();

  // Constrain waffle to stay within canvas boundaries
  waffleX = constrain(waffleX, 50, width - 50);
  waffleY = constrain(waffleY, 50, height - 50);
}

function drawWaffle(x, y) {
  // Draw the waffle base
  fill(210, 180, 140);
  rect(x - 150, y - 150, 300, 300);

  // Draw the waffle grid
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i <= 300; i += 100) {
    line(x - 150 + i, y - 150, x - 150 + i, y + 150);
    line(x - 150, y - 150 + i, x + 150, y - 150 + i);
  }

  // Draw syrup (you can customize the syrup color and shape)
  fill(128, 0, 0); // Reddish color for syrup
  noStroke();
  ellipse(x - 25, y - 25, 50, 50); // Syrup drop 1
  ellipse(x + 25, y + 25, 50, 50); // Syrup drop 2
}

function moveWaffleRandomly() {
  // Move the waffle randomly
  waffleX += random(-5, 5);
  waffleY += random(-5, 5);
}

class Square {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.size = 30;
    this.name = "Dan";
  }

  update() {
    if (keyIsDown(87)) { // W key
      this.y -= 5;
    }
    if (keyIsDown(83)) { // S key
      this.y += 5;
    }
    if (keyIsDown(65)) { // A key
      this.x -= 5;
    }
    if (keyIsDown(68)) { // D key
      this.x += 5;
    }

    // Constrain square to stay within canvas boundaries
    this.x = constrain(this.x, 50, width - this.size - 50);
    this.y = constrain(this.y, 50, height - this.size - 50);
  }

  display() {
    fill(0, 0, 255); // Blue color for "dan"
    rect(this.x, this.y, this.size, this.size);

    // Draw Dan's name above his head
    fill(0);
    textSize(12);
    textAlign(CENTER, BOTTOM);
    text(this.name, this.x + this.size / 2, this.y - 5);
  }
}