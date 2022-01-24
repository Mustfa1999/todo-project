'use strict';

function checkValidAnswers(myAnswers) {
    for(let i=0; i<myAnswers.length; i++) {
        if((myAnswers[i] != "yes")&&(myAnswers[i] != "no")) { 
            myAnswers[i] = "invalid"; 
        }
    }
    return myAnswers;
}

var name = prompt("Please enter your name: ");

var gender = prompt("Please enter your gender (male or female): ");

// changes for the task 5 (Thursday)  --------------------------------------------------//
while((gender != "male")&&(gender != "female")&&(gender != "")) {                       //
    alert("You have to select one of them (male/female) or leave the field empty!");    //
    gender = prompt("Please enter your gender (male or female): ");                     //
}                                                                                       //
// -------------------------------------------------------------------------------------//

var state;
if (gender == "male") { state = "Mr. "; } 
else if (gender == "female") { state = "Ms. "; } 
else {
    state = "";
    alert("You haven't select a gender!");
}

var age = prompt("Please enter your age (must be positive integer): ");
while (age <= 0) {
    alert("you have to enter a positive integer number !");
    var age = prompt("Please enter your age (must be positive integer): ");
}

var confirmation = confirm("Do you want to skip welcoming message ?");
if (confirmation) { alert("Welcoming message has been skipped !") } 
else { alert(`Hello and welcome ${state + name}, this is your todo list for today ^_^`) }


let questions = ["Do you have a job", "Have yo finished University", "Are you free from 8 AM till 4 PM"];
let answers = [];
for(let j=1; j<=3; j++) {
    answers.push(prompt(`Question number(${j}): ${questions[j-1]} ?`));
}

let validAnswers = checkValidAnswers(answers);
console.log(validAnswers);

alert("Ok ... thanks for your time ^_^");

