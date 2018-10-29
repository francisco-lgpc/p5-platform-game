class Platform extends GameObject {

  constructor (x, y, w = 50, h = 50) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show () {
    rect(this.x, this.y, this.w, this.h);
  }

}
