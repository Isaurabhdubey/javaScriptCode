/*
 * Deep Copy of an object
*/
/* Only works for native objects, host objects are not
** included. Copies Objects, Arrays, Functions and primitives.
** Any other type of object (Number, String, etc.) will likely give 
** unexpected results, e.g. copy(new Number(5)) ==> 0 since the value
** is stored in a non-enumerable property.
**
** Expects that objects have a properly set *constructor* property.
*/
function copyDeepObject(source, deep) {
   var o, prop, type;

  if (typeof source != 'object' || source === null) {
    o = source;
    return o;
  }

  o = new source.constructor();

  for (prop in source) {

    if (source.hasOwnProperty(prop)) {
      type = typeof source[prop];

      if (deep && type == 'object' && source[prop] !== null) {
        o[prop] = copyDeepObject(source[prop]);

      } else {
        o[prop] = source[prop];
      }
    }
  }
  return o;
}
