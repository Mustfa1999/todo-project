'use strict';

var name = prompt("Please enter your name: ");

var gender = prompt("Please enter your gender (male or female): ");
var state;
if (gender == "male") {
    state = "Mr. ";
} else if (gender == "female") {
    state = "Ms. ";
} else {
    state = "";
}

var age = prompt("Please enter your age (must be positive integer): ");
while (age <= 0) {
    alert("you have to enter a positive integer number !");
    var age = prompt("Please enter your age (must be positive integer): ");
}

var confirmation = confirm("Do you want to skip welcoming message ?");
if (confirmation) {
    alert("Welcoming message has been skipped !")
} else {
    alert(`Hello and welcome ${state + name}, this is your todo list for today ^_^`)
}


