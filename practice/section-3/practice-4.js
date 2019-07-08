'use strict';

function createUpdatedCollection(collectionA, objectB) {
  Array.prototype.remove = function(val) { 
    var index = this.indexOf(val); 
    if (index > -1) { 
    this.splice(index, 1); 
    } 
  };

  for(let val of collectionA) {
    if(val.indexOf("-") != -1 ){
      var arr = val.split("-");
      collectionA.remove(val);
      for(var i=0;i<arr[1];i++){
        collectionA.push(arr[0]);
      }
    }
  }

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
