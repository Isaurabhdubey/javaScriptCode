let array1 = [1, 3, 4, 6, 7], array2 = [2, 3, 4, 8, 9];
//output : [1,2,3,4,6,7,8,9];
let left = 0,
  right = 0,
  mergedArray = [],
  originalObj = new Set();

while (left < array1.length && right < array2.length) {
  if (array1[left] < array2[right]) {
    if (!originalObj.has(array1[left])) {
      mergedArray.push(array1[left]);
      originalObj.add(array1[left]);
    }
    left++;
  } else if (array1[left] > array2[right]){
    if (!originalObj.has(array2[right])) {
      mergedArray.push(array2[right]);
      originalObj.add(array2[right]);
    }
    right++;
  }else {
    if (!originalObj.has(array1[left])) {
      mergedArray.push(array1[left]);
      originalObj.add(array1[left]);
    }
    left++;
    right++;
  }
}

while (left < array1.length) {
  if (!originalObj.has(array1[left])) {
    mergedArray.push(array1[left]);
    originalObj.add(array1[left]);
  }
  left++;
}

while (right < array2.length) {
  if (!originalObj.has(array2[right])) {
    mergedArray.push(array2[right]);
    originalObj.add(array2[right]);
  }
  right++;
}

console.log(mergedArray);
