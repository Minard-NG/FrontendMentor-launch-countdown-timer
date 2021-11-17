const  deadline = '2021-12-25';

let daySpan = document.getElementById('day');
let hourSpan = document.getElementById('hour');
let minuteSpan = document.getElementById('minute');
let secondSpan = document.getElementById('second');


function getRemainingTime(endTime){
    let distance = Date.parse(endTime) - Date.parse(new Date());
    
    seconds = Math.floor((distance/1000) % 60);
    minutes = Math.floor((distance/(1000*60)) % 60);
    hours = Math.floor((distance/(1000*60*60)) % 24);
    days = Math.floor((distance/(1000*60*60*24)));

    return {
        seconds,
        minutes,
        hours,
        days,
        distance
    };
}

function initializeTime(endTime){

    function updateCounter(){
        let counterData = getRemainingTime(endTime);

        daySpan.innerText = ('0'+ counterData.days).slice(-2);
        hourSpan.innerText = ('0' + counterData.hours).slice(-2);
        minuteSpan.innerText = ('0' + counterData.minutes).slice(-2);
        secondSpan.innerText = ('0' + counterData.seconds).slice(-2);

        if (counterData.distance <= 0){
            clearInterval(timeInterval)
        }
    }
    updateCounter();
    let timeInterval = setInterval(updateCounter, 1000);
}

initializeTime(deadline);