class Platform {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.w = 55;
    this.h = 55;
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

}
