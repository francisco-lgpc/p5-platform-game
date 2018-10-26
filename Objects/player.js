class Player extends GameObject {

  constructor () {
    super();
    this.x = 50;
    this.y = 500;
    this.w = 50;
    this.h = 50;
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

  move (direction) {
    switch (direction) {
      case LEFT:
        this.x -= 50;
        break;
      case UP:
        this.y -= 100;
        break;
      case RIGHT:
        this.x += 50;
        break;
    }
  }

}
