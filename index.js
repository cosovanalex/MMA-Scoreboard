let countEl = document.getElementById("count-el")
let countEl2 = document.getElementById("count-el2")
let period = document.getElementById("period")

let timer = document.getElementById('timer');
timer.innerHTML = "05:00";

let count = 0
let count2 = 0
let periods = 1
let timerId = null;

let round1Clicked = false;
let round2Clicked = false;
let round3Clicked = false;

function roundWinner(round) {
    if(round === 'round1' && round1Clicked) return;
    if(round === 'round2' && round2Clicked) return;
    if(round === 'round3' && round3Clicked) return;

    if(round === 'round1') round1Clicked = true;
    if(round === 'round2') round2Clicked = true;
    if(round === 'round3') round3Clicked = true;

    if(round1Clicked && round2Clicked && round3Clicked) {
        Array.from(document.querySelectorAll('.round-btns button')).forEach(button => {
            button.disabled = true;
        });
    }

    if (count < 3 ) {
    count++
    countEl.innerText = count
    startTimer()
    }

    if (periods < 3) {
        periods++
        period.innerText = periods 
    } 

    clearTimeout(timerId); // stop current timer
    timer.innerHTML = "05:00"; // reset timer
    startTimer(); // start timer
}

function roundWinner2(round) {
    if(round === 'round1' && round1Clicked) return;
    if(round === 'round2' && round2Clicked) return;
    if(round === 'round3' && round3Clicked) return;

    if(round === 'round1') round1Clicked = true;
    if(round === 'round2') round2Clicked = true;
    if(round === 'round3') round3Clicked = true;

    if(round1Clicked && round2Clicked && round3Clicked) {
        Array.from(document.querySelectorAll('.round-btns button')).forEach(button => {
            button.disabled = true;
        });
    }

    if (count2 < 3 ) {
    count2++
    countEl2.innerText = count2
    startTimer()
    }

    if (periods < 3) {
        periods++
        period.innerText = periods 
    } 

    clearTimeout(timerId); // stop current timer
    timer.innerHTML = "05:00"; // reset timer
    startTimer(); // start timer
}

function newFight() {
    count = 0
    countEl.innerText = count
    count2 = 0
    countEl2.innerText = count2
    periods = 1
    period.innerText = periods
    round1Clicked = false;
    round2Clicked = false;
    round3Clicked = false;
    Array.from(document.querySelectorAll('.round-btns button')).forEach(button => {
        button.disabled = false;
    });

    clearTimeout(timerId); // stop current timer
    timer.innerHTML = "05:00"; // reset timer
    startTimer(); // start timer
}

function startTimer() {
  var presentTime = timer.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  timer.innerHTML = m + ":" + s;
  console.log(m)
  clearTimeout(timerId); // clear previous timer if exists
  timerId = setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
