
god = new God;
god.testPhaseWorldCreation();
god.gravityForce = 1;

player = god.player;
platforms = god.platformCollection;

const UP = 0;
const LEFT = 1;
const DOWN = 2

function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
  frameRate(60);
}

function draw() {
  background(0);
  god.inlightTheWorld();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && !player.hasLeftCollisionWith(platforms)) {
    player.move(LEFT);
  } else if (keyCode === RIGHT_ARROW && !player.hasRightCollisionWith(platforms)) {
    player.move(RIGHT);
  } else if (keyCode === UP_ARROW && !player.hasUpperCollisionWith(platforms)) {
    player.move(UP);
  }
}

setInterval(function() {god.gravityPower()}, 1000);
