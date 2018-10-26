const player = new Player;


const platform1 = new Platform(200, 200);
const platform2 = new Platform(150, 100);

const UP = 0;
const LEFT = 1;
const DOWN = 2

function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
  frameRate(120);
}

function draw() {
  background(0);
  player.show();
  platform1.show();
  platform2.show();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && !player.hasLeftCollisionWith(Platform.all())) {
    player.move(LEFT);
  } else if (keyCode === RIGHT_ARROW && !player.hasRightCollisionWith(Platform.all())) {
    player.move(RIGHT);
  } else if (keyCode === UP_ARROW && !player.hasUpperCollisionWith(Platform.all())) {
    player.move(UP);
  }
}
