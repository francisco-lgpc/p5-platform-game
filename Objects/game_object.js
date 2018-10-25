class GameObject {

  isCollidingWithAny (objectX, objectY, objectW, objectH, collection) {
    return !collection.map( collectionElement =>
      collideRectRect (objectX, objectY, objectW, objectH,
                      collectionElement.x, collectionElement.y, collectionElement.w, collectionElement.h)
    ).every( collision => collision === false )
  }

  hasLeftCollisionWith (collection) {
    return this.isCollidingWithAny(this.x - this.w/4, this.y, this.w/2, this.h, collection)
  }

  hasRightCollisionWith (collection) {
    return this.isCollidingWithAny(this.x - this.w/4, this.y, this.w/2, this.h, collection)
  }

  hasUpperCollisionWith (collection) {
    return this.isCollidingWithAny(this.x, this.y - this.h/4, this.w, this.h/2, collection)
  }

  hasRightCollisionWith (collection) {
    return this.isCollidingWithAny(this.x, this.y + this.h/4, this.w, this.h/2, collection)
  }

}

