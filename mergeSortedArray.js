
let array1 = [1, 3, 4, 6, 7], array2 = [2, 3, 4, 8, 9];
//output : [1,2,3,4,6,7,8,9];
let left = 0,
  right = 0,
  mergedArray = [],
  originalObj = {};

while (left < array1.length && right < array2.length) {
  if (array1[left] < array2[right]) {
    if (originalObj[array1[left]]) {
      left++;
      continue;
    }
    mergedArray.push(array1[left]);
    originalObj[array1[left]] = true;
    left++;
  } else if (array1[left] == array2[right]) {
    mergedArray.push(array1[left]);
    originalObj[array1[left]] = true;
    left++;
    right++;
  } else {
    if (originalObj[array2[right]]) {
      right++;
      continue;
    }
    mergedArray.push(array2[right]);
    originalObj[array2[right]] = true;
    right++;
  }
}

if (left < array1.length) {
  mergedArray = mergedArray.concat(array1.slice(left));
}
if (right < array2.length) {
  mergedArray = mergedArray.concat(array2.slice(right));
}

console.log(mergedArray);
