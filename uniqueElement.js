/* find unique element
in an array
*/

var arr =[1,2,3,4,5,1,2,3,5,6,6,4],i=0;
arr.sort();
console.log(arr);
function reverseArr(arr){
  if(arr[i]==arr[i+1]){
    arr.splice(i,1);
    return reverseArr(arr);
  }else{
    i++;
    if(i==arr.length){
      return ;

    }else{
      return reverseArr(arr);
    }
  }
}
reverseArr(arr);
console.log(arr);
