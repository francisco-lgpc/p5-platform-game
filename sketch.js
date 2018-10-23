const player = new Player;

const platformRepo = new PlatformRepo;
const platform1 = new Platform(200, 200);
platformRepo.add(platform1);
const platform2 = new Platform(150, 100);
platformRepo.add(platform2);


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
  if (keyCode === LEFT_ARROW) {
    player.move(LEFT);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(RIGHT);
  } else if (keyCode === UP_ARROW) {
    player.move(UP);
  }
}
