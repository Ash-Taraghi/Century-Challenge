function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            displayDrinkAnimation();
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

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
};