function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

function updateClockHands() {
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hour = document.getElementById("hour");

    const secondsSinceStartOfDay = getSecondsSinceStartOfDay();

    const secondsRotation = (secondsSinceStartOfDay % 60) * 6;
    const minutesRotation = (secondsSinceStartOfDay / 60) * 6;
    const hourRotation = (secondsSinceStartOfDay / 3600 % 12) * 30;

    seconds.style.transform = `rotate(${secondsRotation}deg)`;
    minutes.style.transform = `rotate(${minutesRotation}deg)`;
    hour.style.transform = `rotate(${hourRotation}deg);`

}

setInterval(updateClockHands, 1000);

/*

1. Create a function that grabs the current second, minute, and hour since midnight using getSeconds() etc built in javaScript objects
2. Create a function that rotates the clock hands for different times depending on their purpose.

*/
