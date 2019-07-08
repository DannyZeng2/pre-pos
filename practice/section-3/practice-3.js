'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var map = collectionA.reduce((m, key) => m.set(key, (m.get(key) || 0) + 1), new Map())

  var result = [];

  for(let item of map){
    let obj = {};
    obj["key"] = item[0];
    obj["count"] = item[1];
    result.push(obj);
  }

  for(let val of result) {
    if(objectB["value"].includes(val["key"])) {

        val["count"] -=  parseInt(val["count"]/3);
    }
  }
  return result;
}
