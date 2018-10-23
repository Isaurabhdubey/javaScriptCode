/*
* check wether both string are anagram to each other or not
*/

function checkAnagram(str, str2){
  var newStr1= str.split('').sort().join('');
  var newStr2 = str2.split('').sort().join('');
  if(newStr1===newStr2){
    console.log('both string are anagram to each other');
  }else{
    console.log('both string are not an anagram to each other');
  }
}

checkAnagram('Aabdcdd','aAdbdcd');
