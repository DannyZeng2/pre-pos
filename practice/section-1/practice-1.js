'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  for(let valA of collectionA){
    for(let valB of collectionB){
      if(valA == valB) {
        collectionC.push(valA);
      }
    }
  }
  return collectionC;
} 
