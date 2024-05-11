var roundCount = 0;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var tickSound = document.querySelector("#sound");
    var scooby = document.querySelector("#sound2");
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            displayDrinkAnimation();
            updateRoundCount();
            scooby.play();
        }
        else{
            tickSound.play();
        }
    }, 1000);
}

function displayDrinkAnimation() {
    var drinkAnimation = document.getElementById('drinkAnimation');
    drinkAnimation.style.display = 'block';
    setTimeout(function () {
        drinkAnimation.style.display = 'none';
    }, 3000); // Change 3000 to adjust how long the animation stays visible (in milliseconds)
}

function updateRoundCount(){
    roundCount++;
    document.querySelector("#roundCount").textContent = roundCount;
}

function sambuka(){
    // function to make sambuka noise
    var audioPlayer = document.querySelector("#sound3");
    audioPlayer.play();
}
window.onload = function () {
    document.querySelector("#timer").style.display = "none";
    var oneMinute = 60;
    display = document.querySelector('#timer');
    document.querySelector('#startButton').addEventListener('click', function() {
        document.querySelector('#timer').style.display = 'block';
        var startButton = document.querySelector('#startButton');
        startButton.style.display = 'none'; // Hide the button once clicked
        startTimer(oneMinute, display);
    });
};

setInterval(sambuka, 20 * 60 * 1000);
