class Player {
  constructor () {
    this.x = 50;
    this.y = 500;
    this.w = 55;
    this.h = 55;
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

  move (direction) {
    switch (direction) {
      case LEFT:
        this.x -= 55;
        if (platformRepo.collide(this)) this.x += 55;
        break;
      case UP:
        this.y -= 55;
        if (platformRepo.collide(this)) this.y += 55;
        break;
      case RIGHT:
        this.x += 55;
        if (platformRepo.collide(this)) this.x -= 55;
        break;
    }
  }
}
