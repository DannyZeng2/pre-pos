'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionC = [];
  const collectionD = objectB.value;
  for(let valA of collectionA){
    for(let valD of collectionD){
      if(valA == valD) {
        collectionC.push(valA);
      }
    }
  }
  return collectionC;
}
