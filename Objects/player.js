class Player {
  constructor () {
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
        if (!hasLeftCollisionBetween(this, platformsHandler.collection)) this.x -= 50;
        break;
      case UP:
        this.y -= 50;
        if (hasUpperCollisionBetween(this, platformsHandler.collection)) this.y += 50;
        break;
      case RIGHT:
        this.x += 50;
        if (hasRightCollisionBetween(this, platformsHandler.collection)) this.x -= 50;
        break;
    }
  }

}
