class Platform {

  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    platformsHandler.addNew(this);
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

}
