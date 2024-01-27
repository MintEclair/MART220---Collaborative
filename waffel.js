function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(255);

    // Draw the waffle base
    fill(210, 180, 140);
    rect(50, 50, 300, 300);

    // Draw the waffle grid
    stroke(0);
    strokeWeight(2);
    for (let i = 0; i <= 300; i += 100) {
      line(50 + i, 50, 50 + i, 350);
      line(50, 50 + i, 350, 50 + i);
    }

    // Draw syrup (you can customize the syrup color and shape)
    fill(128, 0, 0); // Reddish color for syrup
    noStroke();
    ellipse(125, 125, 50, 50); // Syrup drop 1
    ellipse(275, 275, 50, 50); // Syrup drop 2
  }