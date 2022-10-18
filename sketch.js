let petali = [];
let pistilli = [];
let gambo = [];
let goccia = [];
let nuvola = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 700; i++) {
    nuvola[i] = new nuv(
      random(0, windowWidth),
      random(0, windowHeight / 10),
      random(40, 120)
    );
  }
  for (let i = 0; i < 900; i++) {
    goccia[i] = new gocc(random(0, windowWidth), 10, 20);
  }

  for (let i = 0; i < 1; i++) {
    petali[i] = new pet(
      windowWidth / 2,
      windowHeight - 300,
      (windowWidth * windowHeight) / 10000
    );
  }
  for (let i = 0; i < 4; i++) {
    pistilli[i] = new pist(
      windowWidth / 2,
      windowHeight - 300,
      (windowWidth * windowHeight) / 18000
    );
  }
  for (let i = 0; i < 1; i++) {
    gambo[i] = new gamb(windowWidth / 2 - 30, windowHeight - 300, 60, 3000);
  }
}

function draw() {
  background("#3A9FFC");

  frameRate(25);
  textAlign(CENTER);
  textFont("archivo");
  textSize((windowWidth * windowHeight) / 100000);
  text("KEEP ON CLICKING TO MAKE IT GROW", windowWidth / 2, windowHeight - 600);

  fill("#96441E");

  rect(0, windowHeight - 100, windowWidth, windowHeight - 100);

  for (let i = 0; i < gambo.length; i++) {
    gambo[i].show();
    if (mouseIsPressed) {
      gambo[i].move();
      gambo[i].scale();
    }
  }

  for (let i = 0; i < petali.length; i++) {
    petali[i].show();
    if (mouseIsPressed) {
      petali[i].scale();
      petali[i].move();
    }
  }
  for (let i = 0; i < pistilli.length; i++) {
    pistilli[i].show();
    //pistilli[i].translate();

    if (mouseIsPressed) {
      pistilli[i].scale();
      pistilli[i].move();
    }
  }
  for (let i = 0; i < goccia.length; i++) {
    goccia[i].show();

    if (mouseButton) {
      goccia[i].move();
    }
  }
  for (let i = 0; i < nuvola.length; i++) {
    nuvola[i].show();
    nuvola[i].move();
  }
}

class nuv {
  constructor(posx, posy, r) {
    this.x = posx;
    this.y = posy;
    this.radius = r;
  }
  move() {
    //this.x += 0;
    this.y = random(0, windowHeight / 10);
  }
  show() {
    fill("#CFF0E6");
    noStroke();
    ellipse(this.x, this.y, this.radius);
  }
}

class gocc {
  constructor(posx, posy, r) {
    this.x = posx;
    this.y = posy;
    this.radius = r;
  }
  move() {
    this.x += 0;
    this.y += random(0, 70);
  }

  show() {
    fill("blue");
    noStroke();
    ellipse(this.x, this.y, this.radius);
  }
}

class pet {
  constructor(posx, posy, r) {
    this.x = posx;
    this.y = posy;
    this.radius = r;
  }
  move() {
    this.y -= 10;
  }
  scale() {
    this.radius += 10;
  }
  show() {
    fill("red");
    noStroke();
    ellipse(this.x, this.y, this.radius);
  }
}
class pist {
  constructor(posx, posy, r) {
    this.x = posx;
    this.y = posy;
    this.radius = r;
  }
  /*translate() {
    this.x = 100;
  }*/
  move() {
    this.y -= 10;
  }
  scale() {
    this.radius += 2;
  }
  show() {
    fill("pink");
    noStroke();
    ellipse(this.x, this.y, this.radius);
  }
}
class gamb {
  constructor(posx, posy, xW, yH) {
    this.x = posx;
    this.y = posy;
    this.w = xW;
    this.h = yH;
  }
  move() {
    this.y -= 10;
  }
  scale() {
    this.h += 10;
  }
  show() {
    fill("green");
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
