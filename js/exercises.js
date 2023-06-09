(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
function max (num1, num2) {
  if(num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree (num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
// comes after the function - if (num1 > num2 && num1 > num3) {
  //return num2;
  //else {
    //return num 3;
 // }
//}



  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(char) {
  if (char === (a)) {
  return true;
  }
  return false;
}
//if (char === 'a' || char ==== 'e' || char ==== 'o' || char === 'u') {
  // return true;
  // }
  //r return false;
// }


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
function rovarspraket()
// let translation = "";
// text.split("");
// const textArr = text.split(");
// for (let i = 0; i , textArr.length; i++") {
  //const isConsonant = "bcdfghjklmnpqrstvwxyz".includes(textArr[i]);
  //if (isConsonant) {
// translation = translation + textArr[i] + "o" + textArr[i];
// else {
  // translation = translation + textArr[i];
  // return translation


// }
//rovarspraket("happy"); // "hohapoppopyoy"

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

function sum(arr) {
// const result = 0;
// for(let i = 0; i < arr.length; i++) {
  //result += arr[i];
}
// return result;
// }

function multiply(arr) {
// const result = 1;
// for(let i = 0; i < arr.length; i++)
//restult *= arr [i];
}
//return result;
//}

// multiply([1, 2, 3]);

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

//function reverse() {
  //const reversedStr = "";
  //for(let i = str.length - 1; i  >= 0; i--) {
    // reversedStr += str[i];
  //}
// return reversedStr;
// or return str.split("").reverse().join("");

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length)
    longestWord = str[i];
  }
return longestWord;

}
// function findLongestWorld(arr) {
  //let length = 0;
  //for(let i = 0; i < arr.length; i++) {
    //if (arr[i].length > length) {
      //length = arr[i].length;
   // }
  //}
  // return length;



  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

//function filterLongWorlds(arr, i) {
  // const filteredWords = [];
  //for(let j = 0; j < arr.length; j++) {
    //if(arr[j].length > i) {
      //filteredWordsArr.push(arr[j]);
   // }
  //}
  //return filteredWordsArr;
//}


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
// function charFreq() { //books
  //const freqList = {};
  //const strArr = str.split("");
  //for(let i = 0; i < strArr.length; i++) {
   // const char = strArr[i];
//if(freqList[char]) {
  //freqlist[char] = freqList[char] + 1;
//} else {
  //freqList[char] = 1;
//}
 // }
 //return freqList;
//}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
