/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new SeanDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class SeanDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.rotationSpeed = 0.04;
    this.radius = 50;
    this.amplitude = 20;
    this.action1 = 0;
    this.action2 = 0;
    this.timebreak = 0;
    this.angle2 = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.angle += this.rotationSpeed;
    this.angle2 += 0.1
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //head
    push();
    translate(this.x, this.y);
    rotate(0.35 * sin(this.angle));
    //neck
    fill(255, 204, 153);
    rect(-10, -45, 20, 10);
    fill(255, 153, 51);
    ellipse(0, -65, 50, 50);
    fill("green");
    rect(-5, -95, 10, 5);
    fill(0);
    triangle(-15, -80, -5, -80, -10, -70);
    triangle(15, -80, 5, -80, 10, -70);
    triangle(0, -65, -5, -60, 5, -60);
    strokeWeight(3);
    line(0, -55, -6, -50);
    line(0, -55, 6, -50);
    line(-6, -50, -10, -55);
    line(6, -50, 10, -55);
    //body
    fill(96, 96, 96);
    noStroke();
    rect(-20, -35, 40, 10);
    beginShape();
    vertex(-20, -25);
    vertex(-30, -20);
    vertex(30, -20);
    vertex(20, -25);
    endShape(CLOSE);
    beginShape();
    vertex(-30, -20);
    vertex(-30, -15);
    vertex(30, -15);
    vertex(30, -20);
    endShape(CLOSE);
    beginShape();
    vertex(-25, -15);
    vertex(-18, 30);
    vertex(18, 30);
    vertex(25, -15);
    endShape(CLOSE);
    strokeWeight(1);
    stroke(0);
    line(-18, -5, -18, 30);
    line(18, -5, 18, 30);
    line(-25, -15, -18, -5);
    line(25, -15, 18, -5);
    fill(96, 96, 96);
    //legs
    if (sin(this.angle) > 0) {
      beginShape();
      vertex(-20, 30);
      vertex(-20, 50);
      vertex(-10, 50);
      vertex(-10, 30);
      endShape(CLOSE);
      beginShape();
      vertex(-20, 50);
      vertex(-20 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(-10, 50 - tan(0.35 * sin(this.angle)));
      endShape(CLOSE);
      beginShape();
      vertex(20, 30);
      vertex(20, 50);
      vertex(10, 50);
      vertex(10, 30);
      endShape(CLOSE);
      beginShape();
      vertex(20, 50);
      vertex(20 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(10, 50 - tan(0.35 * sin(this.angle)));
      endShape(CLOSE);
      //feet
      beginShape();
      vertex(-25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle))) - 10);
      vertex(-25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle))) - 10);
      endShape(CLOSE);
      beginShape();
      vertex(25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
      vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 - tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle))) - 10);
      vertex(25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle))) - 10);
      endShape(CLOSE);
      //arms
      strokeWeight(0.5);
      stroke(0);
      beginShape();
      vertex(-30, -15);
      vertex(-45, -5);
      vertex(-45, 5);
      vertex(-20, -10);
      vertex(-20, -15);
      endShape(CLOSE);
      beginShape();
      vertex(-45, -5);
      vertex(-60 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
      vertex(-60 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
      vertex(-45, 5);
      endShape(CLOSE);
      beginShape();
      vertex(30, -15);
      vertex(0 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
      vertex(0 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
      vertex(30, -5);
      endShape(CLOSE);
      beginShape();
      vertex(0 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
      vertex(-20 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
      vertex(-20 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
      vertex(0 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
      endShape(CLOSE);
      fill(255, 204, 153);
      beginShape();
      vertex(-20 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
      vertex(-20 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
      vertex(-25 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
      vertex(-25 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
      endShape(CLOSE);
      beginShape();
      vertex(-60 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
      vertex(-60 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
      vertex(-65 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
      vertex(-65 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
      endShape(CLOSE);

    }
    else {
      if (sin(this.angle) < 0) {
        beginShape();
        vertex(-20, 30);
        vertex(-20, 50);
        vertex(-10, 50);
        vertex(-10, 30);
        endShape(CLOSE);
        beginShape();
        vertex(-20, 50 - tan(0.35 * sin(this.angle)));
        vertex(-20 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(-10, 50);
        endShape(CLOSE);
        beginShape();
        vertex(20, 30);
        vertex(20, 50);
        vertex(10, 50);
        vertex(10, 30);
        endShape(CLOSE);
        beginShape();
        vertex(20, 50 - tan(0.35 * sin(this.angle)));
        vertex(20 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(10, 50);
        endShape(CLOSE);
        //feet
        beginShape();
        vertex(-25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(-10 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle))) - 10);
        vertex(-25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle))) - 10);
        endShape(CLOSE);
        beginShape();
        vertex(25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle)) - 20));
        vertex(10 + (50 * sin(0.35 * sin(this.angle))), 50 + tan(0.35 * sin(this.angle)) + (50 * cos(0.35 * sin(this.angle))) - 10);
        vertex(25 + (50 * sin(0.35 * sin(this.angle))), 50 + (50 * cos(0.35 * sin(this.angle))) - 10);
        endShape(CLOSE);
        //arms
        strokeWeight(0.5);
        stroke(0);
        beginShape();
        vertex(30, -15);
        vertex(45, -5);
        vertex(45, 5);
        vertex(20, -5);
        vertex(20, -15);
        endShape(CLOSE);
        beginShape();
        vertex(45, -5);
        vertex(60 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
        vertex(60 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
        vertex(45, 5);
        endShape(CLOSE);
        beginShape();
        vertex(-30, -15);
        vertex(0 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
        vertex(0 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
        vertex(-30, -5);
        endShape(CLOSE);
        beginShape();
        vertex(0 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
        vertex(20 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
        vertex(20 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
        vertex(0 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
        endShape(CLOSE);
        fill(255, 204, 153);
        beginShape();
        vertex(20 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
        vertex(20 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
        vertex(25 + 10 * sin(this.angle2), -5 + 10 * cos(this.angle2));
        vertex(25 + 10 * sin(this.angle2), -15 + 10 * cos(this.angle2));
        endShape(CLOSE);
        beginShape();
        vertex(60 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
        vertex(60 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
        vertex(65 - 5 * sin(this.angle2), 5 - 5 * cos(this.angle2));
        vertex(65 - 5 * sin(this.angle2), -5 - 5 * cos(this.angle2));
        endShape(CLOSE);
      }
    }
    pop();



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    push();
    translate(this.x, this.y);
    this.drawReferenceShapes()
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/