window.onload = function () {
    var timer = 0;
    var interval = "";

    function start() {
        var timer = 90
        var interval = setInterval(function () {
            timer--;
            $(".timeRemaining").html(timer);
            console.log(timer)
            if (timer === 0) {
                console.log("Time's Up");
                clearInterval(interval);
            }
        }
            , 1000);
    }
    $(".start").on("click");
    start();
}








// $("<button>").text("hello there");