// // var str='axzzxyyyddddyzzz',i=0,count=1;
// /gyh up/ console.log(str.length);
// // for(;i<str.length;i++){
// //   if((str.charAt(i)==str.charAt(i+1))&&(i+1)<str.length){
// //     count++
// //   }else{
// //     if(count==1&& i==(str.length-1)){
// //       console.log(str)
// //     }else{
// //       newStr=removeChar(count,i,str)
// //       if(str!==newStr){
// //         str=newStr;
// //         i=-1;
// //       }
// //       count=1;
// //     }
// //   }
// // }
// // console.log(str)


// // function removeChar(count,index, str){
// //   if(count%2==0){
// //     var startIndex=index-count+1;
// //     var strArray=str.split('');
// //     strArray.splice(startIndex,count);
// //     str=strArray.join('');
// //     return str;
// //   }else{
// //      return str;
// //   }

// // }

// var sortAlphabets = function (text) {
//   text = text.toLowerCase()
//   return text.split('').sort().join('');
// };
// var firstString = sortAlphabets('OutliEt')
// var secondString = sortAlphabets('LetiOut')
// if (firstString.length === secondString.length) {

//   for (var i = 0; i < firstString.length; i++) {
//     if (firstString.charAt(i) === secondString.charAt(i)) {
//       if (i == firstString.length - 1) {
//         console.log(true)
//       }
//       continue;
//     } else {
//       console.log(false)
//       break;
//     }
//   }

// } else {
//   console.log(false)
// }
// // var oldString = "azxxzyyyddddyzzz";

// // //var oldString = "aazzza";

// // var arr = oldString.split(''),
// // index = 0, i = 0,
// // cnt = 1;
// // removeEvenCharCount(index, arr)

// // function removeEvenCharCount(index, arr) {
// //    while (i < arr.length) {

// //        if (arr[i] == arr[i + 1]) {
// //            cnt++;
// //            i++;
// //        } else if (cnt == 1 && i == arr.length) {
// //            break;
// //        } else {
// //            if (cnt % 2 == 0) {
// //                var startIndex = i - cnt + 1;
// //                arr.splice(startIndex, cnt);
// //                i = 0;
// //                cnt = 1;
// //            } else {
// //                i++;
// //                cnt = 1;
// //            }
// //        }
// //    }
// // }
// // console.log(arr.join(''))

// (function(){
//   var a = b = 3;
//   console.log(typeof a);
//     console.log(typeof b);

// })();
//   console.log(typeof a);
//   console.log(typeof b);

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// const arr=[1,2,34,45];
// for(let i=0;i<arr.length;i++){
//   setTimeout(()=>{
//     console.log(i,arr[i]);
//   },1000)
// }
// console.log('1');
// (function(){setTimeout(function(){ console.log('2')},100)})();
// console.log('3')
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();
// console.log(typeof NaN === 'n');
// var obj=[1,2,3,4];
// console.log(Object.prototype.toString.call(obj));
// var y = 1;
// function f(){
//   var a=2;
//   console.log("Hum Pagal hai");
// }
//   // if (function f(){}) {
//   //   // console.log(f)
//   //   y += typeof f;
//   // }
//   // function f(){}
//   // y += typeof f;
//   console.log(f);
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());
/*
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
*/


// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();



// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
// javascript clone an object
// var obj = {a: 1 ,b: 2}
// var objclone = Object.assign({c:2},obj);
// console.log(objclone)
// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false

// var myArray = ['a', 'b', 'c', 'd'];
// myArray./push('end');
// myArray.unshift('start');
// console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
// var x=[1,2,3];
// x[10]=99;
// console.log(x[6]);
// console.log(typeof typeof 1);
// var x=10;
// function git(){
//   var x=19
//   return x;
// }
// console.log(git());
// console.log(x)
// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){

//         console.log(b)
//         var b = 35;   
//     }
//     inner();
//     console.log(b);
// }
// outer();
// console.log(typeof undefined)
// console.log(typeof undefined == typeof NULL)
// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
// console.log(false == '0')
// console.log(false === '0')


// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }


// console.log(1 +  "2" + "2");
// console.log(typeof(-"1"),-"1")
// console.log(1 + +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "7" - "2" + 2);
// var arr1 = "john".split('');
// console.log(arr1)
// var arr2 = arr1.reverse();
// console.log(arr1)
// console.log(arr2)
// var arr3 = "jones".split('');
// arr2.push(arr3); //['n','h','o','j',['j','o','h','e','s']]
// console.log(arr3);
// console.log(arr2);
// console.log(arr1)
// console.log(arr1.length+"" + arr1);
// // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// var arr=[1,2,3,[4,5,6,5,8]];
// console.log("ee"+arr)
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }
// var k = 1;
//   if (1) {
//     eval(function foo(){});
//     k += typeof foo;
//   }
//   console.log(k); 

/*
* Closure Example
*/
// var globalVar = "abc"; 

// (function outerFunction (outerArg) { 
//     var outerFuncVar = 'x';    
//     (function innerFunction (innerArg) {
//         var innerFuncVar = "y"; 
//         console.log(          
//             "outerArg = " + outerArg + "\n" +
//             "outerFuncVar = " + outerFuncVar + "\n" +
//             "innerArg = " + innerArg + "\n" +
//             "innerFuncVar = " + innerFuncVar + "\n" +
//             "globalVar = " + globalVar);

//     })(5)
// })(7)

// var promise=new Promise((resolve,reject)=>{
//   resolve('ok');
// });
// promise.then((result)=>{
// console.log(result);
// })
// var Promise = require('bluebird');

// function annonymous() {
//   if (true) {
//     return Promise.resolve('true');
//   } else {
//     return Promise.reject('false');
//   }
// }
// function secondannonymous(result) {
//   if (false) {
//     return Promise.resolve(result);
//   } else {
//     return Promise.reject("result");
//   }
// }
// function thirdannonymous(result) {
//   if (false) {
//     return Promise.resolve(result);
//   } else {
//     return Promise.reject("error");
//   }
// }


// annonymous().then((result) => {
//   return secondannonymous(result);
// }).then((result) => {
//   return thirdannonymous(result);
// }).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// })

// var x="str jkjdf";
// console.log(x.constructor===String)
// var Person= function(firstName, lastName, age){
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.age=age;
// }
// person =new Person("john", "doe", 30);
// Person.prototype.setName= function(){
//   console.log("hello"+ this.firstName+ this.lastName);
// }
// person.setName();
// function func(){
//   console.log('alpha');
//   setTimeout(function(){
//     console.log('bita')
//   }, 0);
//   console.log('gamma')
// }
// //func();
// var x-y=10;
// console.log(x-y)

function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + dayString + " old!";
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString + " old. Happy Birthday!!";
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + " and " + age.months + monthString + " old.";
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString + " and " + age.days + dayString + " old.";
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString + " and " + age.days + dayString + " old.";
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString + " old.";
  else ageString = "Oops! Could not calculate age!";

  return ageString;
}


console.log(getAge('26/02/1991'));
