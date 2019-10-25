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

$('#form1 input').on('change', function () {
    var userInput1 = $('input[name=radioName]:checked', '#form1').val();
    console.log("question #1=" + userInput1);
});

$('#form2 input').on('change', function () {
    var userInput2 = $('input[name=radioName]:checked', '#form2').val();
    console.log("question #2=" + userInput2);
});

$('#form3 input').on('change', function () {
    var userInput3 = $('input[name=radioName]:checked', '#form3').val();
    console.log("question #3=" + userInput3);
});

$('#form4 input').on('change', function () {
    var userInput4 = $('input[name=radioName]:checked', '#form4').val();
    console.log("question #4=" + userInput4);
});
$('#form5 input').on('change', function () {
    var userInput5 = $('input[name=radioName]:checked', '#form5').val();
    console.log("question #5=" + userInput5);
});
$('#form6 input').on('change', function () {
    var userInput6 = $('input[name=radioName]:checked', '#form6').val();
    console.log("question #6=" + userInput6);
});
$('#form7 input').on('change', function () {
    var userInput7 = $('input[name=radioName]:checked', '#form7').val();
    console.log("question #7=" + userInput7);
});
$('#form8 input').on('change', function () {
    var userInput8 = $('input[name=radioName]:checked', '#form8').val();
    console.log("question #8=" + userInput8);
});

// I need to create two arrays (I think). One array includes the correct answers, one includes the wrong answers. 

// Then I can take the usersubmissions, and 




