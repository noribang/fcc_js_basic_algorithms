///////////////////////////////////
//Construct JavaScript Objects with Functions
///////////////////////////////////
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

///////////////////////////////////
//Make Instances of Objects with a constructor Function
///////////////////////////////////
var myCar = new Car();

myCar.turboType = "twin";

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
  window.object.getElementById('demo').innerHTML = myCar;
}

///////////////////////////////////
//Make Object Properties Private 
///////////////////////////////////
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var myCar = new Car();

///////////////////////////////////
//Iterate over Arrays with map
///////////////////////////////////
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]



///////////////////////////////////
//Condense arrays with reduce
///////////////////////////////////
var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0);


///////////////////////////////////
//Filter Arrays with filter
///////////////////////////////////
array = array.filter(function(val) {
  return val !== 5;
});


///////////////////////////////////
//Sort Arrays with sort
///////////////////////////////////
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});



///////////////////////////////////
//Reverse Arrays with reverse
///////////////////////////////////
var myArray = [1, 2, 3];
myArray.reverse();


///////////////////////////////////
//Concatenate Arrays with concat
///////////////////////////////////
newArray = oldArray.concat(otherArray);


///////////////////////////////////
//Split Strings with split
///////////////////////////////////
var array = string.split('s');


///////////////////////////////////
//Join Strings with join
///////////////////////////////////
var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"