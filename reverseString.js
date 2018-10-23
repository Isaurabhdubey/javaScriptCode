/*
Reverse a string by using recursion
*/



var str="string", i=str.length,reverseString='';
function reverseStr(str){
  while(reverseString.length<str.length){
    reverseString=reverseString+str.charAt(i);
    i--;
    reverseStr(str);
  }
}
reverseStr(str);
console.log(reverseString)
