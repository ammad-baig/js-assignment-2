//ELSE IF

var a = 10;
var b = 20;
var c = 50;

if (a == b) {
  console.log("a is equal to b");
} else if (b > c) {
  console.log("b is less then c");
} else {
  console.log("Problematic Situation");
}

//NESTED IF/ELSE

var age = 18;
var student = true;
var studentCard = true;

if (age >= 20) {
  if (student == true) {
    if (studentCard == true) {
      console.log("Enter in University");
    } else {
      console.log("Ghar niklo");
    }
  } else {
    console.log("Ghar niklo");
  }
} else {
  console.log("Ghar niklo");
}

//TESTING SETS OF CONDITION

var m = 10;
var n = 20;
var o = 20;

if (m == n && n == o) {
  console.log("Condition True");
} else {
  console.log("Condition False");
}
if (m == n || n == o) {
  console.log("Condition True");
}

//Percentage Calculator & Grades

var English = +prompt("Enter English Marks");
var Urdu = +prompt("Enter Urdu Marks");
var Maths = +prompt("Enter Maths Marks");
var Computer = +prompt("Enter Computer Marks");
var Science = +prompt("Enter Science Marks");
var totalMarks = English + Urdu + Maths + Computer + Science 

var calculate =totalMarks/500 *100  ;

console.log ("Your Total Marks is "+ calculate + "%")

if (calculate >= 90  ) {
    console.log("You Have Achieve A+ Grade")
}
else if (calculate >= 80 ) {
    console.log("You Have Achieve A Grade")
}
else if (calculate >= 70 ) {
    console.log("You Have Achieve B Grade")
}
else if (calculate >= 60 ) {
    console.log("You Have Achieve C Grade")
}
else if (calculate >= 50 ) {
    console.log("You Have Achieve D Grade")
}
else if (calculate >= 40 ) {
    console.log("You Have Achieve E Grade")
}
else if (calculate <= 40){
    console.log("You Fail")
}

//ARRAYS

var sports = ['cricket','football','hockey','tennis', 'archery']

// value changed 

sports[2] = "ice hockey";
sports[10] = "table tennis"

//knowing length
console.log(sports.length)

console.log(sports)