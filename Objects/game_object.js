class GameObject {

  isCollidingWithAny (objectH, objectW, objectX, objectY, collection) {
    return !collection.map( collectionElement =>
      collideRectRect (objectX, objectY, objectW, objectH,
                      collectionElement.h, collectionElement.w, collectionElement.x, collectionElement.y)
    ).every( collision => collision === false )
  }

  hasLeftCollisionWith (collection) {
    return this.isCollidingWithAny(1, 1, this.x - this.w/2, this.y, collection)
  }

  hasRightCollisionWith (collection) {
    return this.isCollidingWithAny(1, 1, this.x + this.w/2, this.y, collection)
  }

  hasUpperCollisionWith (collection) {
    return this.isCollidingWithAny(1, 1, this.x, this.y - this.h/2, collection)
  }

  hasRightCollisionWith (collection) {
    return this.isCollidingWithAny(1, 1, this.x, this.y + this.h/2, collection)
  }

}

