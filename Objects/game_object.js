class GameObject {

  isCollidingWithAny (objectX, objectY, collection) {
    return !collection.map( collectionElement =>
      objectX == collectionElement.x && objectY == collectionElement.y
    ).every( collision => collision === false )
  }

  hasLeftCollisionWith (collection) {
    return this.isCollidingWithAny(this.x - 50, this.y, collection)
  }

  hasRightCollisionWith (collection) {
    return this.isCollidingWithAny(this.x + 50, this.y, collection)
  }

  hasUpperCollisionWith (collection) {
    return this.isCollidingWithAny(this.x, this.y - 50, collection)
  }

  hasInferiorCollisionWith (collection) {
    return this.isCollidingWithAny(this.x, this.y + 50, collection)
  }

  gravity () {
    this.y += 50;
  }

}

