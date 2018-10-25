// class GameObject {

//   isCollidingWithAny (objectX, objectY, objectW, objectH, collection) {
//     return !collection.map( collection =>
//       collideRectRect (objectX, objectY, objectW, objectH,
//                       collection.x, collection.y, collection.w, collection.h)
//     ).every( collision => collision === false )
//   }

//   hasLeftCollisionBetween (object, collection) {
//     return isCollidingWithAny(object.x + object.w/4, object.y, object.w/2, object.h, collection)
//   }

//   hasRightCollisionBetween (object, collection) {
//     return isCollidingWithAny(object.x - object.w/4, object.y, object.w/2, object.h, collection)
//   }

//   hasUpperCollisionBetween(object, collection) {
//     return isCollidingWithAny(object.x, object.y - object.h/4, object.w, object.h/2, collection)
//   }

//   hasRightCollisionBetween (object, collection) {
//     return isCollidingWithAny(object.x, object.y + object.h/4, object.w, object.h/2, collection)
//   }

// }

