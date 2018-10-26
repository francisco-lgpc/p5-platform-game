class Platform extends GameObject {

  constructor (x, y) {
    super();
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

}
