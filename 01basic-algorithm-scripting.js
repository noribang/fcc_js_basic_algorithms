/////////////////////////////
//1.Reverse a String
/////////////////////////////
function reverseString(str) {
	var str = str.split('').reverse().join('');
	return str;
}

reverseString("hellobuugu");

/////////////////////////////
//2.Factorialize a Number 
/////////////////////////////
function factorialize(num) {
	var n = 1;

	for (i = 1; i <= num; i++) {
		n *= i;
		console.log(n);

	}
	// return n;	
}

factorialize(5);

/////////////////////////////
//3.Check for Palindromes
/////////////////////////////
//FINAL PALIDROME FUNCTION
function palindrome(str) {
	var pattern = /(_*)(\W*)(\s*)/gi;
	str = str.replace(pattern, '').toLowerCase();
	console.log(str);

	var newStr = str.split('').reverse().join('');
	console.log(newStr);
    if (str == newStr) {
   	  return true;	
    }
    else {
  	  return false;
    } 
}


//REVERSE STRING
function palindrome(str) {
  //console.log(str);
  var newStr = str.split('').reverse().join('');
  if (str == newStr) {
  	console.log(newStr);
   	return true;	
   }
  else {
  	return false;
  } 
  
}

palindrome("racecare");

//LOWERCASE METHOD
function palindrome(str) {
	str = str.toLowerCase();
	return str;
}

palindrome("RACE CAR");

//REGULAR EXPRESSION
function palindrome(str) {
	var patt = /c/gi;
	var findStr = str.match(patt);
	return findStr;
}

palindrome("RACE CAR");

//REGULAR EXPRESSION TO FIND NON-WORD CHARACTERS(\W+) 
//and WHITE SPACE(\s+)
function palindrome(str) {
	var patt = /(\W+)(\s+)/gi;
	var findStr = str.match(patt);
	return findStr;
}


//SPLIT STRING INTO SEPARATE ELEMENTS OF AN ARRAY
function palindrome(str) {
	var splitStr = str.split('');
	return splitStr;
}

//REPLACE METHOD FOR STRING OBJECT
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, '-');
console.log(newstr);


var patt = /(_*)(\W*)(\s*)/gi;
var str = 'race *&%$ &(** CAR&%$#';
var newStr = str.replace(patt, '');
console.log(newStr);
///////////
//FINAL PALINDROME FUNCTION
///////////
function palindrome(str) {
	var pattern = /(_*)(\W*)(\s*)/gi;
	str = str.replace(pattern, '').toLowerCase();
	console.log(str);

	var newStr = str.split('').reverse().join('');
	console.log(newStr);
    if (str == newStr) {
   	  return true;	
    }
    else {
  	  return false;
    } 
}


/////////////////////////////
//Find the Longest Word in a String
/////////////////////////////

function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//SPLIT STRING
var str = 'The quick brown fox jumped over the lazy dog dog'
var strArray = str.split(' ');
//console.log(strArray.length);
//PASS CALLBACK FUNCTION TO ARRAY SORT METHOD
var sortArray = strArray.sort(function(a, b) {return a-b});

console.log(sortArray);

//FINAL FUNCTION TO FIND LONGEST WORD IN ARRAY
//ITERATE THROUGH ARRAY
function findLongestWord(str) {
	var strArray = str.split(' ');
	strArray = strArray.map(function(val) {return val.length;});
	strArray.sort(function(a, b) {return b-a;});
	console.log(strArray);
	return strArray[0];
}

findLongestWord('The quick brown fox jumped over the lazy dog dog');


/////////////////////////////
//Title Case a Sentence
/////////////////////////////

//STARTING FUNCTION
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

//SPLIT METHOD
function titleCase(str) {
	str = str.toLowerCase();//lowercase sting
	console.log(str);
	str = str.split(' ');//split into array
	return str;
}

titleCase("I'm a little tea pot");


//STRING SLICE METHOD
function titleCase(str) {
	str = str.toLowerCase();//lowercase sting
	console.log(str);
	str = str.split(' ');//split into array
	console.log(str);
    var newStr = str.map(function(val) {return val.slice(0, 1).toUpperCase() + val.slice(1, val.length);});
	return newStr;
}

titleCase("I'm a little tea pot");

//FINAL FUNCTION
//ARRAY JOIN METHOD
function titleCase(str) {
	str = str.toLowerCase();//convert string to lowercase
	console.log(str);
	str = str.split(' ');//split strings into separate elements of an array
	console.log(str);
	var newStr = str.map(function(val) {return val.slice(0, 1).toUpperCase() + val.slice(1, val.length);});
	console.log(newStr);
	newStr = newStr.join(' ');
	return newStr;
}

titleCase("sHoRt AnD sToUt");



/////////////////////////////
//Return Largest Numbers in Arrays
/////////////////////////////
function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//FOR LOOP SYNTAX:
//for ([initialization]; [condition]; [final-expression]) {
//}
var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

for(var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

//NESTING FOR LOOPS
var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

for(var i = 0; i < arr.length; i++) {
	for(var j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}

//CALL SORT METHOD
var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

for(var i = 0; i < arr.length; i++) {
	console.log(arr[i].sort());
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//DOES NOT WORK TO SOLVE PROBLEM
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//CALL SORT METHOD AND REVERSE METHOD
var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

for(var i = 0; i < arr.length; i++) {
	console.log(arr[i].sort().reverse());
}



//SORT FROM LARGEST TO SMALLEST
// function descendSort(a, b) {
// 	return b - a;
// }


function largestOfFour(arr) {
	var newArr;

	for(var i = 0; i < arr.length; i++) {
		newArr = arr[i].sort(function(a, b) { return b - a});
		console.log(newArr);
	}
	//return ;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


////////////////////////////////
//FINAL FUNCTION - PUSH LARGEST VALUE INTO EMPTY ARRAY
////////////////////////////////
// function descendSort(a, b) {
// 	return b - a;
// }


function largestOfFour(arr) {
	var finalArr = [];
	var newArr;

	for(var i = 0; i < arr.length; i++) {
		newArr = arr[i].sort(function(a, b) { return b - a});
		//console.log(newArr);
		finalArr.push(newArr[0]);
		//console.log(finalArr);
	}
	return finalArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/////////////////////////////
//CONFIRM THE ENDING
/////////////////////////////
//GIVEN
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

//SUBSTR() method
function confirmEnding(str, target) {
	str = str.substr(str.length - 1);
	return str;
}

confirmEnding("Bastian", "n");


//SPLIT method
//SPLIT NOT USEFUL FOR THIS PROBLEM
function confirmEnding(str, target) {
	var newArray;
	newArray = str.split(' ');
	return newArray;
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");


//SUBSTRING method
function confirmEnding(str, target) {
	str = str.substring(str.length - target.length);
	console.log(str);

	if(str == target) {
		return true;
	}
	else {
		return false;
	}
}

confirmEnding("He has to give me a new name", "name");



/////////////////////////////
//Repeat a string repeat a string
/////////////////////////////
//GIVEN
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);


//REPEAT METHOD
//FINAL FUNCTION//
function repeatStringNumTimes(str, num) {
	if (num > 0) {
		str = str.repeat(num);
		return str;
	}
	else {
		return "";
	}
}

repeatStringNumTimes("abc", 3);



/////////////////////////////
//Truncate a string
/////////////////////////////
//GIVEN
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//CONDITIONAL CHECK LENGTH
function truncateString(str, num) {
	if (str.length > num) {
		return "Longer than " + num;
	}
	 else {
	 	return str;
	 }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//CONDITIONAL CHECK LENGTH USE SLICE
function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, str.length);
	}
	else {
		return "Less than or equal to " + num;
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//CONDITIONAL CHECK LENGTH USE SLICE II
function truncateString(str, num) {
	if (str.length > num) {
		// return str.slice(0, num);//RETURN STRING INDEX 0 TO INDEX NUM
		return str.slice(0, num - 3) + '...';
	}
	else {
		return str.slice(0, num);
	}
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);


//CONDITIONAL CHECK LENGTH USE SLICE III
//FINAL FUNCTION//
function truncateString(str, num) {
	if (num <= 3) {
		return str.slice(0, num) + '...';
	}
	if (str.length > num) {
		// return str.slice(0, num);//RETURN STRING INDEX 0 TO INDEX NUM
		return str.slice(0, num - 3) + '...';
	}
	else {
		return str.slice(0, num);
	}
}

truncateString("A-", 1);


/////////////////////////////
//Chunky Monkey
/////////////////////////////
//GIVEN
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//ARRAY SLICE METHOD
function chunkArrayInGroups(arr, size) {
	arr = arr.slice(0,size);
	console.log(arr);
	return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//ARRAY SLICE METHOD and PUSH METHOD
function chunkArrayInGroups(arr, size) {
	var newArr = [];
	//diffArr = arr.slice(0,size);
	newArr.push(arr.slice(0,size));
	newArr.push(arr.slice(2, size + size));
	newArr.push(arr.slice(4, size + size + size));
	newArr.push(arr.slice(6, size + size + size + size));
	return newArr;
	// var newArr = [];
	// newArr.push(arr);
	// return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "h"], 2);


//ARRAY SLICE METHOD AND PUSH METHOD WITH LOOP
////FINAL FUNCION////
function chunkArrayInGroups(arr, size) {
	var newArr = [];

	for (i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
		console.log(newArr);
	}
	return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "h"], 2);



/////////////////////////////
//Slasher Flick
/////////////////////////////
//GIVEN
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 2, 3], 2);


//SPLICE METHOD
function slasher(arr, howMany) {
	arr.splice(0, 2);
	return arr;
}

slasher([1, 2, 3], 2);


//SPLICE METHOD II
////FINAL FUNCION////
function slasher(arr, howMany) {
	arr.splice(0, howMany);
	return arr;
}

slasher([1,2,3], 2);


/////////////////////////////
//Mutations
/////////////////////////////
//GIVEN
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

//ACCESS EACH STRING ELEMENT OF ARRAY
function mutation(arr) {
	var newArr;

	//FIND LENGTH OF ARRAY arr
	newArr = arr.length;
	console.log(newArr);
	//ACCESS ARRAY INDEX 0
	newArr = arr[0];
	console.log(newArr);
	//ACCESS ARRAY INDEX 1
	newArr = arr[1];
	console.log(newArr);
	// return arr;
}

mutation(["hello", "hey"]);

//USE indexOf METHOD ON ARRAY
function mutation(arr) {
	var indexArr;
	indexArr = arr[0].indexOf(arr[1]);
	return indexArr !== -1;
}

mutation(["hello", "hey"]);

//USE indexOf METHOD ON ARRAY with toLowerCase
function mutation(arr) {
	var indexArr;
	var firstArr;
	firstArr = arr[0].toLowerCase();
	console.log(firstArr);
	indexArr = firstArr.indexOf(arr[1].toLowerCase());
	console.log(indexArr !== -1);
}

mutation(["HELLO", "Hel"]);


//LOOP THRU indexOf METHOD ON ARRAY with toLowerCase
//1st draft
function mutation(arr) {
	var indexArr;
	var firstArr;
	firstArr = arr[0].toLowerCase();
	console.log(firstArr);
	indexArr = firstArr.indexOf(arr[1][0].toLowerCase());
	console.log(indexArr !== -1);
	indexArr = firstArr.indexOf(arr[1][1].toLowerCase());
	console.log(indexArr !== -1);
	indexArr = firstArr.indexOf(arr[1][2].toLowerCase());
	console.log(indexArr !== -1);
}

mutation(["HELLO", "pHeZ"]);

//2nd draft
////FINAL FUNCTION!!!!!!////
function mutation(arr) {
	var firstArrElement;
	var secondArrElement;
	firstArrElement = arr[0].toLowerCase();
	console.log(firstArrElement);
	for (var i = 0; i < arr[1].length; i++) {
		secondArrElement = firstArrElement.indexOf(arr[1][i].toLowerCase());
		console.log(i);
		console.log(secondArrElement !== -1);
		if (secondArrElement == -1) {
			return false;
		}
		// else {
		// 	return true;
		// }
	}
	return true;
}

mutation(["HELLO", "lhlo"]);

/////////////////////////////
//Falsy Bouncer
/////////////////////////////
//GIVEN
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);

//1st: Boolean object
//ALL BELOW EVALUATE TO FALSE
var x = Boolean(false);
console.log(x);

var x = Boolean(null);
console.log(x);

var x = Boolean(0);
console.log(x);

var x = Boolean("");
console.log(x);

var x = Boolean(undefined);
console.log(x);

var x = Boolean(NaN);
console.log(x);

//2nd: Boolean object
//ALL BELOW EVALUATE TO TRUE
var x = Boolean('some string');
console.log(x);

var x = Boolean(6789234);
console.log(x);

//3rd: LOOP THRU ARRAY
function bouncer(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i];
		console.log(arr[i]);
	}
	// return arr;
}

bouncer([7, "ate", "", false, 9]);

//4th: FILTER METHOD
////!!!!!FINAL FUNCTION!!!!!!////
function filterFalse(val) {
	return Boolean(val);
}

function bouncer(arr) {
	// var x = Boolean(arr);
	var filteredArr = arr.filter(filterFalse);
	return filteredArr;
}

bouncer([7, "ate", "", false, 9]);


/////////////////////////////
//Seek and Destroy
////////////////////////////

//GIVEN
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//////1st
function destroyer(arr) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/////2nd

function filterArguments() {

}

function destroyer(arr) {
	var a = arguments[0];
	var b = arguments[1];
	var c = arguments[2];
	console.log(a);
	console.log(b);
	console.log(c);
	// var filteredArr = arr.filter();
	// return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

////////DOES NOT WORK!!!!!!
/////3rd
function filterArguments(val) {
	var a = arguments[0];
	var b = arguments[1];
	var c = arguments[2];
	// console.log(a);
	// console.log(b);
	// console.log(c);

	// if (a !== b || a !== c) {
	// 	return true;
	// }
	return a;
}

function destroyer(arr) {
	// var a = arguments[0];
	// var b = arguments[1];
	// var c = arguments[2];
	// console.log(a);
	// console.log(b);
	// console.log(c);
	var filteredArr = arr.filter(filterArguments);
	return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

///////
//4TH - HARD CODED THE THE 2ND AND 3RD PARAMETERS
//////
function filterArguments(val) {
	return val !== 2 && val !== 3;
	//return val;
}

function destroyer(arr) {
	var a = arguments[0];
	var b = arguments[1];
	var c = arguments[2];

	//filteredArguments();

	var filteredArr = arr.filter(filterArguments);
	return filteredArr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);


///////
//5th-CONVERT ALL ARGUMENTS INTO ONE ARRAY
//////
function filterArguments(val) {
	//CALL indexOf()
	return val;
	// if(val !== 2 && val !== 3) {
	// 	return true;
	// }
}

function destroyer(arr) {
	//CONVERT ALL ARGUMENTS INTO ONE ARRAY
	var a = Array.prototype.slice.call(arguments);
	// console.log(a);
	// console.log(a[0]);
	// console.log(a[1]);
	// console.log(a[2]);
	var filteredArr = a.filter(filterArguments);
	return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


///////
//6th-
//////
function filterArguments(val) {
	console.log('logging from filterArguments(): '+val);
}

function destroyer(arr) {
	//filterArguments(arr);
	var a = Array.prototype.slice.call(arguments);
	// console.log(a);
	// console.log(a[0]);
	// console.log(a[1]);
	// console.log(a[2]);
	filterArguments(a);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

filterArguments();

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//!!!!!! HAD TO LOOK UP SOLUTION IN WIKI !!!!!!
//http://forum.freecodecamp.com/t/algorithm-seek-and-destroy/16046
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//SOLUTION FROM WIKI//
//////////////////////
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//COMMENTS
function destroyer(arr) {
  //CONVERT ALL ARGUMENTS INTO SINGLE ARRAY	AND ASSIGN AS ARGS	
  var args = Array.prototype.slice.call(arguments);
  // console.log(args);

  //INCREMENT i STARTING FROM 0 AND KEEP INCREMENTING WHILE 
  //i IS STILL LESS THAN LENGTH OF arr WHICH WILL BE THE FIRST ARRAY 
  //PASSED TO destroy(arr) FUNCTION. THESE WILL LOOP THRU 
  //EACH ELEMENT OF THE FIRST ARRAY. 
  for (var i = 0; i < arr.length; i++) {
  	//INCREMENT j STARTING FROM 0 AND KEEP INCREMENTING WHILE 
    //j IS STILL LESS THAN LENGTH OF args. args ARE ALL THE  
    //ARGUMENTS PASSED TO destroy(arr) FUNCTION AND THEN CONVERTED 
    //INTO SINGLE ARRAY. THESE WILL LOOP THRU 
    //EACH ELEMENT OF THE CONVERTED ARRAY. 
    for (var j = 0; j < args.length; j++) {
      //IF ELEMENT IN FIRST ARRAY EQUALS VALUE AND TYPE OF 
      //ELEMENT IN CONVERTED ARRAY DELETE ELEMENT IN FIRST ARRAY. 
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  //PASSING BOOLEAN METHOD AS CALLBACK METHOD TO .FILTER METHOD
  //CAN ALSO WRITE AS .filter(function (x) {return Boolean(x)})
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/////////////////////////////
//Where do I belong
/////////////////////////////
///////
//GIVEN
///////
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);


//1st
function getIndexToIns(arr, num) {
	//SORT METHOD CONVERTS ELEMENTS INTO STRINGS AND THEN SORTED
	//arr = arr.sort();
	//PASS COMPARE CALLBACK FUNCTION TO SORT METHOD
	//TO COMPARE AS NUMBERS INSTEAD OF STRINGS
	arr = arr.sort(function(a, b) { return a-b; });
	return arr;
}

getIndexToIns([60, 40], 50);


//2nd
///////////////////
//FINAL FUNCTION
///////////////////
function getIndexToIns(arr, num) {
	console.log(arr);
	console.log(num);
	arr.push(num);
	console.log(arr);
	arr = arr.sort(function(a, b) { return a - b; });

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			return i;
		}
	}
	// return arr;
}

getIndexToIns([60, 40], 50);



/////////////////////////////
//Caesars Cipher
/////////////////////////////
///////
//GIVEN
///////
function rot13(str) { // LBH QVQ VG!
  
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


//1st
//CALL STRING METHOD .charCodeAt ON argument passed to "str" PARAMETER
function rot13(str) {
	var strCode = str.charCodeAt(0);
	console.log(str[0] + ' = ' + strCode);
	strCode = str.charCodeAt(1);
	console.log(str[1] + ' = ' + strCode);
	strCode = str.charCodeAt(2);
	console.log(str[2] + ' = ' + strCode);
	strCode = str.charCodeAt(3);
	console.log(str[3] + ' = ' + strCode);
	strCode = str.charCodeAt(4);
	console.log(str[4] + ' = ' + strCode);
	console.log(str[4] + ' = ' + typeof(str[4]));
}
 
rot13("SERR PBQR PNZC");


//2ND
//CALL STRING METHOD .charCodeAt ON argument passed to "str" PARAMETER
//BY USING FOR LOOP

function rot13(str) {
	var strCode;

	for (var i = 0; i < str.length; i++) {
		strCode = str.charCodeAt(i);
		console.log(str[i] + ' = ' + strCode);
	}
}

rot13("SERR PBQR PNZC");

//3RD
//CALL STRING METHOD .charCodeAt ON argument passed to "str" PARAMETER
//THEN PUSH UNICODE OF str INTO ARRAY arrCode 
//BY USING FOR LOOP

function rot13(str) {
	var arrCode = [];
	var strCode;

	for (var i = 0; i < str.length; i++) {
		strCode = str.charCodeAt(i);
		arrCode.push(strCode);
		console.log(arrCode);
	}
}

rot13("SERR PBQR PNZC");


//4TH
//CALL STRING METHOD .charCodeAt ON argument passed to "str" PARAMETER
//THEN PUSH UNICODE OF str INTO ARRAY arrCode 
//BY USING FOR LOOP

function rot13(str) {
	var arrCode = [];
	var strCode;
	// var pattern = /(_*)(\W*)(\s*)/gi;
	var pattern = /\w/;

	for (var i = 0; i < str.length; i++) {
		if (str[i] === /\w/) {
			strCode = str.charCodeAt(i) + 13;
			arrCode.push(strCode);
		}
		else {
			strCode = str.charCodeAt(i);
			arrCode.push(strCode);
		}
		
		console.log(arrCode);
	}
}

rot13("SERR PBQR PNZC");

function rot13(str) {
	var arrCode = [];
	var strCode;
	// var pattern = /(_*)(\W*)(\s*)/gi;
	var pattern = /\w/;

	for (var i = 0; i < str.length; i++) {
		console.log(str[i]);
		
		if (str[i] === /\w/) {
			console.log(str.charCodeAt(i) + 13);
		}
		else {
			console.log('not a letter');
		}
	}
}

rot13("SERR PBQR PNZC");


//REGULAR EXPRESSION
/(_*)(\W*)(\s*)/gi;

///////SYNTAX///////
//   /PATTERN/ MODIFIERS

//MODIFIERS
//   g = global match
//   i = case insensitive

//METACHARACTER
//     \W = find non-word character
//     \s = find whitespace character

//QUANTIFIER
//     * = matches any string that contains zero or more occurrences 
//


//5TH
//CALL STRING METHOD .charCodeAt ON argument passed to "str" PARAMETER
//THEN PUSH UNICODE OF str INTO ARRAY arrCode 
//BY USING FOR LOOP

function rot13(str) {
	var arrCode = [];
	var strCode;
	// var pattern = /(_*)(\W*)(\s*)/gi;
	var pattern = /\w/;

	for (var i = 0; i < str.length; i++) {
			strCode = str.charCodeAt(i);
			// arrCode.push(strCode);
			console.log(strCode);

	}
}

rot13("ABCDEFGHIJKLM");
rot13("NOPQRSTUVWXYZ");
rot13("SERR PBQR PNZC");

//6th
function rot13(str) {
	var arrCode = [];
	var strCode;
	var newStrCode;
	// var pattern = /(_*)(\W*)(\s*)/gi;
	// var pattern = /\w/;

	for (var i = 0; i < str.length; i++) {
		strCode = str.charCodeAt(i);
		// arrCode.push(strCode);
		
		if (strCode >= 65 && strCode <= 77) {
			newStrCode = strCode + 13;
			console.log(str[i] + ' = ' + (newStrCode) + ' = ' + String.fromCharCode(newStrCode));
		}

		else if (strCode >= 78 && strCode <= 90) {
			newStrCode = strCode - 13;
			console.log(str[i] + ' = '+ (newStrCode) + ' = ' + String.fromCharCode(newStrCode));
		}
		else {
			console.log(str[i] + ' = ' + strCode + ' = ' + String.fromCharCode(strCode));
		}
	}
}

rot13("SERR CVMMN!");

rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
rot13("ABCDEFGHIJKLM");
rot13("NOPQRSTUVWXYZ");
rot13("SERR PBQR PNZC");

//7th
//////////////////
//FINAL FUNCTION
//////////////////
function rot13(str) {
	var arrCode = [];//PUSH CONVERTED ROT13 CHARACTER OF STR INTO EMPTY ARRAY
	var strCode;
	var newStrCode;
	var convertedStrCode;
	// var pattern = /(_*)(\W*)(\s*)/gi;
	// var pattern = /\w/;

	for (var i = 0; i < str.length; i++) {
		strCode = str.charCodeAt(i);
		// arrCode.push(strCode);
		
		if (strCode >= 65 && strCode <= 77) {
			newStrCode = strCode + 13;
			convertedStrCode = String.fromCharCode(newStrCode);
			console.log(str[i] + ' = ' + (newStrCode) + ' = ' + convertedStrCode);
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}

		else if (strCode >= 78 && strCode <= 90) {
			newStrCode = strCode - 13;
			convertedStrCode = String.fromCharCode(newStrCode);
			console.log(str[i] + ' = '+ (newStrCode) + ' = ' + String.fromCharCode(newStrCode));
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}
		else {
			convertedStrCode = String.fromCharCode(strCode);
			console.log(str[i] + ' = ' + strCode + ' = ' + convertedStrCode);
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}
	}

	console.log(arrCode);
	return arrCode.join('');
}

rot13("SERR CVMMN!");

rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
rot13("ABCDEFGHIJKLM");
rot13("NOPQRSTUVWXYZ");
rot13("SERR PBQR PNZC");
