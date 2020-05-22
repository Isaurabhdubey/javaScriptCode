(function () {
  _.mixin({
    findAllIndex: findAllIndex
  });
  /*
     * data: <array || Array Object> 
     * find: 
       ** if data is array it should be <string || number>
       ** if data is Array Obejct it should be an Object with single key value
    */
    function findAllIndex(data, find) {
      var arr=[],
      isObject = Object.prototype.toString.call(find)==="[object Object]";
      data.forEach(function(n, index){
        if(!isObject && n===find){
          arr.push(index);
        }
        if(isObject && n[Object.keys(find)[0]]===Object.values(find)[0]) {
          arr.push(index);
        }
      });
      return arr;
    }
})();
