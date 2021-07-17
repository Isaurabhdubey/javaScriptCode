// @arr[],
// @target is number,
// time plexcity will be 0(n);
function pairSum(arr, target) {
  let obj = {},
    pairedSum = [];
  arr.forEach((element) => {
    // here due to object hasing concept we will get 0(1)
    if (obj[target - element]) {
      pairedSum.push("("+element + " , " + (target - element)+ ")");
    }
    obj[element] = true;
  });
  return pairedSum;
}
