const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const digitClock = document.querySelector(".date");

function clock () {
    
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    
    const secDeg = ((sec * 360) / 60) + 90;
    const minDeg = ((min * 360) / 60) + 90;
    const hourDeg = ((hour * 360) / 12) + 90;
    console.log(hourDeg);  
    
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    function addZero (elem) {
        if (elem < 10) {
            return "0" + elem;
        } else {
            return elem;
        }
    }
//    digitClock.innerHTML = addZero(hour) + ":" + addZero(min) + ":" + addZero(sec);
    // after 2-3 weeks I have found this solution on stack overflow and decided to try it here.
    // works great, and I don't need function addZero anymore.
    digitClock.innerHTML = now.toLocaleTimeString();
}
setInterval(clock, 1000);


