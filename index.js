function stringCompression (str) {
  if (str.length ==0) {
    console.log('Please enter valid string.');
    return;
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    //console.log(str[i+1]);    
    if (str[i] != str[i+1]) {
      if(count == 1){count = '';}
      output += str[i] + count;
      count = 0;
    }
  }
  console.log(output);
}
stringCompression('pphhhhaaacccdrrr'); //a4b2c1
stringCompression('aaabcccdd'); //a4b2c1a2b2

function fizzBuzz (int){
  for(var i=0;i<=int;i++){
    if((i%2 == 0) && (i%3 == 0)){
      console.log("Fizz Buzz");
    }
    else if(i % 2 == 0){
      console.log("Fizz");
    }
    else if(i % 3 == 0){
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}//fizzBuzz (10);

function chunkArray(myArray, size){
  var result = [];
  while(myArray.length){
      result.push(myArray.splice(0, size));
  }
  console.log(result);
}

//chunkArray([1,2,3,4,5,6,7,8], 3);
var Person = function() {};

Person.prototype.initialize = function(name) 
{
  this.name = name;
}
Person.prototype.describe = function(){
  return this.name;
}
var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching "+ this.subject);
}

var me = new Teacher();
me.initialize("Priyanka");
me.teach("Javascript");


const arr = [1,[2],[3,4,[5]], [6,[7,[8],9]]];
const flatArray = arr.flat(Infinity);
//console.log(flatArray);




function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }
};
//displayPyramid(10);

function layerTopRight (matrix){
  var top = matrix.splice(0,1);
  var right = [];
  for(var i=0;i<matrix.length;i++){
    var e = matrix[i].splice(-1,1);
    console.log(e);
    right.push(e);
    return top.concat(right).toString().split();
  }
}


function layerBottomLeft (matrix){
  var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();
  var left = [];
  for(var i=0;i<matrix.length;i++){
    var e = matrix.splice(0,1);
    left.push(e);
  }
  
  // return the top row and last column elements as a list
  return bottom.concat(left.reverse()).toString().split();
}

function spiral(matrix) {
  var spir = [];
  while(matrix.length> 0 ){
    if(matrix.length == 1){
      spir.push(matrix[0]);
      break;
    }
    var tr = layerTopRight(matrix);
    spir.push(tr);
    var bl = layerBottomLeft(matrix)
    spir.push(bl);
  }
  return console.log(spir.toString().split());
}
var M = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

spiral(M);//["1,2,3,6,9,8,7,4,5"]

function swap (alphabets, index1, index2) {
  var temp = alphabets[index1];
  alphabets[index1] = alphabets[index2];
  alphabets[index2] = temp;
  return alphabets;
}

function permute (alphabets, startIndex, endIndex) {
  var arr = [];
  if (startIndex !== endIndex) {
    var i;
    for (i = startIndex; i <= endIndex; i++) {
      swap(alphabets, startIndex, i);
      permute(alphabets, startIndex + 1, endIndex);
      swap(alphabets, i, startIndex); // backtrack
    }
  }
 // return console.log(alphabets);
}

var alphabets = ['1','2','3'];
//permute(alphabets, 0, alphabets.length-1); // ABC, ACB, BAC, BCA, CBA, CAB


let input = [3,1,78,2]

function findExistenceOfSum(inputArr){
  let total = inputArr.length;
  let isExist = false;
  for(let i = 0 ; i<total;i++){
    for(let j = 0 ; j<total ; j++){
      if(i !== j){
       // console.log(parseInt(inputArr[i]), "xcxcd",parseInt(inputArr[j]));
        let sum = parseInt(inputArr[i] + parseInt(inputArr[j]));
        if(inputArr.indexOf(sum)!== -1){
          isExist = true;
        }
      }
    }
  }
  return console.log(isExist);
}

findExistenceOfSum(input);

function pallindrome(str){
  var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  //var reverseStr = cstr.split('').reverse().join(''); 
  var reverseString = cstr.split('').reverse().join('');
  if(reverseString === cstr){
    console.log("Pallindrome");
  }
  else{
    console.log("Not Pallindrome");
  }
}

function pallindromeRevFunc(str){
  var cstrr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  const rev= [];
  const len = str.length;
  for (var i =len ;i>=0;i--){
    rev.push(str[i]);
  }
  console.log(rev.join(''));
  console.log(cstrr);
  rev = rev.join('');
  if(rev == cstrr){
    console.log("Pallindrome");
  }
  else{
    console.log("Not Pallindrome");
  }
}
pallindrome("aabbccbbaa");

pallindromeRevFunc("aabbccbbaa");


function stringExistenceInArr(arr){
  var result = 0;
  var exp = /the/gi;
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      var matchExp = arr[i][j].match(exp);
      if(matchExp != null ||matchExp != undefined ){
        result += matchExp.length;
      }
    }
  }
  console.log(result);
};
var array=[['The end','end the'],['A the','no way'],['yo man','man the']];

stringExistenceInArr(array);

//entire string
function revStr(str, por){
  var rev= [];
  for(var i =str.length; i>=0 ;i--){
      rev.push(str[i]);
  }
  rev = rev.join('');
  console.log(rev);
}
revStr("Priyanka Shrivastava")
///portion of string
function revStrPor(str, por){
  var rev= [];
  if(str.includes(por)){
    for(var i =por.length; i>=0 ;i--){
      rev.push(por[i]);
  }
  rev = rev.join('');
  console.log(rev);
}
str = str.replace(por, rev);
console.log(str);
}
  
revStrPor("Priyanka Shrivastava", "vastava");

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return console.log(ret);
}

var a = [3,5,7,8]
var b = reverseArr(a);


function sorter(array){
  var swap;
  var swapCount = 0;

  do{
      for (var i = 1, swapCount = 0; i < array.length; i++){
          if(array[i - 1]>array[i]){
              swap = array[i - 1];
              array[i - 1] = array[i];
              array[i] = swap; 
              swapCount +=1;
          }
      }
  }while(swapCount>0 ); 
  return console.log(array);
}

sorter([4,10,2,9]);
sorter(['c','d','a','b']);


function calArr(arr){
  var total = 0;
  for(let i=0;i<arr.length;i++){
    total +=Number(arr[i]);
  }
  if(arr.indexOf(total)){
    console.log(true);
  }
  console.log(total);
}

calArr([0,0,0,0,25]);


function displayPyramid(rows) {
   for(let i = 1; i <= rows; i++){
     let str = '';
     
     //Add the white space to the left
     for(let k = 1; k <= (rows - i); k++){
       str += '\xa0\xa0';
     }
     
     //Add the '#' for each row
     for(let j = 0; j != (2 * i - 1); j++){
       str += ' # ';
     }
     
     //Add the white space to the right
     for(let k =  i + 1; k <= rows; k++){
       str += ' ';
     }
     
      //Print the pyramid pattern for each row
     console.log(str);
   }
};
//displayPyramid(10);



function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]

function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

function insertionSort(arr){
  var i, len = arr.length, el, j;

  for(i = 1; i<len; i++){
    el = arr[i];
    j = i;

    while(j>0 && arr[j-1]>toInsert){
      arr[j] = arr[j-1];
      j--;
   }

   arr[j] = el;
  }

  return arr;
}

function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}


function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

//quick sort start
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
        
		
function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

//quick sort end


//linear search
var rainbow = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
function linearSearch(arr, elToFind) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == elToFind) {
      return i;
    }
  } return null;
}

linearSearch(rainbow, "green"); // returns 3
linearSearch(rainbow, "white"); // returns null


function binarySearch(sortedArray, elToFind) {
  var lowIndex = 0;
  var highIndex = sortedArray.length - 1;
  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (sortedArray[midIndex] == elToFind) {
      return midIndex;
    } else if (sortedArray[midIndex] < elToFind) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  } return null;
}

var sortedRainbow = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
binarySearch(sortedRainbow, "green"); // returns 1
binarySearch(sortedRainbow, "white") // returns null