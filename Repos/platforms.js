class PlatformRepo {
  constructor () {
    this.platforms = []
  }

  all () {
    this.platforms
  }

  add(object) {
    this.platforms.push(object)
  }

  collide (object) {
    console.log(this.platforms.map( platform => {
      collideRectRect (object.x, object.y, object.w, object.h,
                      platform.x, platform.y, platform.w, platform.h);
    }).every( collision => collision === false ));
  }

}
