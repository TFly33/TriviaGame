$(document).ready(function(){

var gameOver = false;
$("#hidden").hide();
// First I'll create a function to countdown from 90 seconds. This will be the total amount of time the user has to guess on the answers. 
function start() {
    var timer = 90
    var interval = setInterval(function () {
        timer--;
        // When the timer starts, the countdown gets added to the timeRemaining div. 
        $(".timeRemaining").html("Time Remaining: " + timer);
        console.log(timer);
        if (timer === 0 || gameOver) {
            console.log("Time's Up");
            // Don't want the timer to go past 0. Probably won't matter because we'll hide all of that anyway. 
            clearInterval(interval);
            // Let's place a "Time's Up" function, which we can define later. It will pop up with a new screen that lists the right and wrong answers. 
            timesUp();
        }
    }
        , 1000);
}

// Let's create a way to stop everything and submit the user's results. I'll apply this to situations where the timer hits zero, or when the user hit's the done button. 
function timesUp() {
var answers = [
    $('input[name=radioName1]:checked', '#form1').val(),
    $('input[name=radioName2]:checked', '#form2').val(),
    $('input[name=radioName3]:checked', '#form3').val(),
    $('input[name=radioName4]:checked', '#form4').val(),
    $('input[name=radioName5]:checked', '#form5').val(),
    $('input[name=radioName6]:checked', '#form6').val(),
    $('input[name=radioName7]:checked', '#form7').val(),
    $('input[name=radioName8]:checked', '#form8').val()
];

    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === "true") {
            correct++;
        } else if (answers[i] === "false") {
            incorrect++;
        }
    }

    var unanswered = (8 - correct - incorrect);
    // $("#hidden").hide();
    // I want the text to be centered once the timesUp function hits. 
    $(".results").html(" Correct Answers: " + correct), 
    $(".results").append(" Incorrect Answers: " + incorrect);
    $(".results").append(" Unanswered Questions: " + unanswered);
    $(".startText").html("Thanks for playing! Before you know it, you'll be a chess master! Refresh the page to retry!");
    $("#hidden").attr("class", "text-center");
    $(".timeRemaining").html(" ");
    $(".resultsDiv").html("<img src='assets/images/chessimage.jpeg'/>")
}

// But we only want to run the Start function when a button is clicked. Otherwise, the countdown will immediately start when the page loads. 
$(".start").click(function () {
    start();
    console.log("and go.");
    $("#hidden").show();
    $(".startDiv").hide();
});

// I need the radio form to capture the user's submission. I'm not sure I know the most efficient way to do it, so for now, I'm going to repeat the capture function for each form, with each form increasing in number. 

// But first, I want to create a tally of the variable to be added to if the user gets the question correct. Then, I can run a function that listed the correct answers, and I will create something like Incorrect = (8 - correct), and finally, I'll create something like Unanswered = (8-correct - false).

var correct = 0
var incorrect = 0 

// Here's the code I originally used. 
// $('#form1 input').on('change', function () {
//     userInput1 = $('input[name=radioName1]:checked', '#form1').val();
//     console.log("question #1=" + userInput1);
//     if (userInput1 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput1 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });

// $('#form2 input').on('change', function () {
//     var userInput2 = $('input[name=radioName2]:checked', '#form2').val();
//     console.log("question #2=" + userInput2);
//     if (userInput2 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput2 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });

// $('#form3 input').on('change', function () {
//     var userInput3 = $('input[name=radioName3]:checked', '#form3').val();
//     console.log("question #3=" + userInput3);
//     if (userInput3 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput3 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });

// $('#form4 input').on('change', function () {
//     var userInput4 = $('input[name=radioName4]:checked', '#form4').val();
//     console.log("question #4=" + userInput4);
//     if (userInput4 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput4 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });
// $('#form5 input').on('change', function () {
//     var userInput5 = $('input[name=radioName5]:checked', '#form5').val();
//     console.log("question #5=" + userInput5);
//     if (userInput5 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput5 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });
// $('#form6 input').on('change', function () {
//     var userInput6 = $('input[name=radioName6]:checked', '#form6').val();
//     console.log("question #6=" + userInput6);
//     if (userInput6 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput6 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });
// $('#form7 input').on('change', function () {
//     var userInput7 = $('input[name=radioName7]:checked', '#form7').val();
//     console.log("question #7=" + userInput7);
//     if (userInput7 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput7 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });
// $('#form8 input').on('change', function () {
//     var userInput8 = $('input[name=radioName8]:checked', '#form8').val();
//     console.log("question #8=" + userInput8);
//     if (userInput8 === "true") {
//         correct++;
//         console.log(correct);
//     }
//     if (userInput8 === "false") {
//         incorrect++;
//         console.log(incorrect);
//     }
// });
$(".doneButton").click(function () {
    gameOver = true;
    timesUp();

});



});

// Bugs:
// 4. Try to get line 34 to work. 
// 5. Make sure you change the timer back to 90 at some point. 
