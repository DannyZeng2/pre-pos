'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  const collectionD = collectionB[0];
  for(let valA of collectionA){
    for(let valD of collectionD){
      if(valA == valD) {
        collectionC.push(valA);
      }
    }
  }
  return collectionC;
}
