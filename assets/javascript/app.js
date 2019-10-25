
function start() {
    var timer = 90
    var interval = setInterval(function () {
        timer--;
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

$(".start").click(function(){
    start();
    console.log ("and go.");
});


// I need to create two arrays (I think). One array includes the correct answers, one includes the wrong answers. 

// Then I can take the usersubmissions, and 




