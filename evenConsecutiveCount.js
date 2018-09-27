//javascript code for delete consecutive even count character from string


var str='axxzxxzyyyddddyyzzz',i=0,count=1;
console.log(str.length);
for(;i<str.length;i++){
  if((str.charAt(i)==str.charAt(i+1))&&(i+1)<str.length){
    count++
  }else{
    if(count==1&& i==(str.length-1)){
      console.log(str)
    }else{
      newStr=removeChar(count,i,str)
      if(str!==newStr){
        str=newStr;
        i=-1;
      }
      count=1;
    }
  }
}
console.log(str)


function removeChar(count,index, str){
  if(count%2==0){
    var startIndex=index-count+1;
    var strArray=str.split('');
    strArray.splice(startIndex,count);
    str=strArray.join('');
    return str;
  }else{
     return str;
  }
 
}

