'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let val of collectionA) {
    if(objectB["value"].includes(val["key"])) {
        val["count"]--;
    }
  }
  return collectionA;
}
