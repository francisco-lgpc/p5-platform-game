class God {

  constructor () {
    this.platformCollection = [];
    this.platform = "";
    this.player = "";
    this.gravityForce = 0;
  }

  createNewPlatform (x, y) {
    platform = new Platform(x, y);
    platformCollection.push(platform);
  }

  testPhaseWorldCreation () {

    this.platformCollection.push(new Platform(200, 200));
    this.platformCollection.push(new Platform(150, 100))

    this.player = new Player();

  }

  inlightTheWorld () {
    this.platformCollection.forEach (
      platform => platform.show()
    );

    this.player.show();
  }

  gravityPower () {
    for (var i = this.gravityForce; i > 0; i--) {
      if (this.player.y < 500) {this.player.gravity()};
    }
  }

}
