class Player {
  constructor () {
    this.x = 50;
    this.y = 500;
  }

  show () {
    rect(this.x, this.y, 55, 55);
  }

  move (direction) {
    switch (direction) {
      case LEFT:
        this.x -= 55;
        break;
      case UP:
        this.y -= 55;
        break;
      case RIGHT:
        this.x += 55;
        break;
    }
  }
}
