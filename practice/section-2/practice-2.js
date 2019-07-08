'use strict';

function countSameElements(collection) {

  Array.prototype.remove = function(val) { 
    var index = this.indexOf(val); 
    if (index > -1) { 
    this.splice(index, 1); 
    } 
  };

  for(let val of collection) {
    if(val.indexOf("-") != -1 ){
      var arr = val.split("-");
      collection.remove(val);
      for(var i=0;i<arr[1];i++){
        collection.push(arr[0]);
      }
    }
  }

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
