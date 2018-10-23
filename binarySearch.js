/*
binary search
*/


var arr=[1,2,3,4,5];
var min=0, max=arr.length;

function searchArray(element){
  var x=Math.floor((min+max)/2);
  if(arr[x]<element){
    min=x;
    max = arr.length;
    if(max==(min+1)){
      console.log('element not found');
      return;
    }else{
      return searchArray(element);
    }
  }else if(arr[x] > element){
    min=0;
    max = x;
    console.log('e',max,min)
    if(max==min){
      console.log("element not fount");
      return ;
    }else{
      return searchArray(element);
    }
  }else{
    console.log('find element at index',x);
    return ;
  }
}
searchArray(5);
