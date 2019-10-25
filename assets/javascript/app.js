// First I'll create a function to countdown from 90 seconds. This will be the total amount of time the user has to guess on the answers. 
function start() {
    var timer = 90
    var interval = setInterval(function () {
        timer--;
        // When the timer starts, the countdown gets added to the timeRemaining div. 
        $(".timeRemaining").html(timer);
        console.log(timer);
        if (timer === 0) {
            console.log("Time's Up");
            // Don't want the timer to go past 0. Probably won't matter because we'll hide all of that anyway. 
            clearInterval(interval);
            // Let's place a "Time's Up" function, which we can define later. It will pop up with a new screen that lists the right and wrong answers. 
            timesUp();
        }
    }
        , 1000);
}
// But we only want to run the Start function when a button is clicked. Otherwise, the countdown will immediately start when the page loads. 
$(".start").click(function () {
    start();
    console.log("and go.");
});

// I need the radio form to capture the user's submission. I'm not sure I know the most efficient way to do it, so for now, I'm going to repeat the capture function for each form, with each form increasing in number. 

// But first, I want to create a tally of the variable to be added to if the user gets the question correct. Then, I can run a function that listed the correct answers, and I will create something like Incorrect = (8 - correct), and finally, I'll create something like Unanswered = (8-correct - false).

var correct = 0
var incorrect = 0

$('#form1 input').on('change', function () {
    userInput1 = $('input[name=radioName1]:checked', '#form1').val();
    console.log("question #1=" + userInput1);
    if (userInput1 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput1 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});

$('#form2 input').on('change', function () {
    var userInput2 = $('input[name=radioName2]:checked', '#form2').val();
    console.log("question #2=" + userInput2);
    if (userInput2 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput2 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});

$('#form3 input').on('change', function () {
    var userInput3 = $('input[name=radioName3]:checked', '#form3').val();
    console.log("question #3=" + userInput3);
    if (userInput3 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput3 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});

$('#form4 input').on('change', function () {
    var userInput4 = $('input[name=radioName4]:checked', '#form4').val();
    console.log("question #4=" + userInput4);
    if (userInput4 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput4 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});
$('#form5 input').on('change', function () {
    var userInput5 = $('input[name=radioName5]:checked', '#form5').val();
    console.log("question #5=" + userInput5);
    if (userInput5 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput5 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});
$('#form6 input').on('change', function () {
    var userInput6 = $('input[name=radioName6]:checked', '#form6').val();
    console.log("question #6=" + userInput6);
    if (userInput6 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput6 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});
$('#form7 input').on('change', function () {
    var userInput7 = $('input[name=radioName7]:checked', '#form7').val();
    console.log("question #7=" + userInput7);
    if (userInput7 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput7 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});
$('#form8 input').on('change', function () {
    var userInput8 = $('input[name=radioName8]:checked', '#form8').val();
    console.log("question #8=" + userInput8);
    if (userInput8 === "true") {
        correct++;
        console.log(correct);
    }
    if (userInput8 === "false") {
        incorrect++;
        console.log(incorrect);
    }
});
$(".doneButton").click(function () {
    // This will list the unanswered. 
var unanswered = (8 - correct - incorrect)
console.log("Total correct Answers: " + correct);
console.log("Total incorrect Answers: " + incorrect);
console.log ("Total unanswered: " + unanswered);
// Alright, now let's log the total number of correct answers. It will apply when the user hits the done button. 
});



// Bugs:
// 1. Clicking buttons multiple times increases the value of the correct and incorrect submissions. 
// 




