'use strict';

function countSameElements(collection) {
  var map = collection.reduce((m, key) => m.set(key, (m.get(key) || 0) + 1), new Map())
  var result = [];

  for(let item of map){
    let obj = {};
    obj["key"] = item[0];
    obj["count"] = item[1];
    result.push(obj);
  }
  return result;
}
