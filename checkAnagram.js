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

/*
* thinking about time complexity
*/

function checkAnagramWithTimeComplexity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) return false
    let counting = {}
    for (let c of str1) {
        counting[c] = (counting[c] + 1) || 1;
    }
    for (let c of str2) {
        if (counting[c]) {
            --counting[c];
        }
        else {
            return false;
        }
    }
    return true;
};

checkAnagram('Aabdcdd','aAdbdcd');
checkAnagramWithTimeComplexity('Aabdcdd','aAdbdcd');
