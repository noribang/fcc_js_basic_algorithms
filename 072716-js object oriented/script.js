///////////////////////////////////
//Make Unique Objects by Passing Parameters to our Constructor
///////////////////////////////////
var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(6, 3, 1);

function clickConstructor() {
  window.document.getElementById('demo').innerHTML = myCar.seats;
}


///////////////////////////////////
//Reverse Arrays with reverse
///////////////////////////////////
var something='obama';

var myArray = [1, 2, 3, 4, 5];
myArray.reverse();

function clickArray() {
	window.document.getElementById('demo').innerHTML = myArray;
}

///////////////////////////////////
//Concatenate Arrays with concat
///////////////////////////////////
var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6, 7, 8, 9];

newArray = oldArray.concat(concatMe);

function clickConcat() {
	window.document.getElementById('demo').innerHTML = newArray;
}


///////////////////////////////////
//Split Strings with split
///////////////////////////////////
var string = "Split me into an array";
var arraySplit = [];

arraySplit = string.split('');

function clickSplit() {
	window,document.getElementById('demo').innerHTML = arraySplit;
}


///////////////////////////////////
//Join Strings with join
///////////////////////////////////
var joinMe = ["Join", "me", "into", "an", "array"];
var joinedString = '';

// joinedString = joinMe.join(' or ');
// joinedString = joinMe.join('___');
joinedString = joinMe.join(' ');

function clickJoin() {
	window.document.getElementById('demo').innerHTML = joinedString;
}


