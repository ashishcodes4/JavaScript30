let countDown;
const timerDisplay  = document.querySelector('.display__time-left');

const timer = (seconds) => {
  const now = Date.now();
  const then = now + seconds * 1000;

  countDown = setInterval(() => {
    //decide what the countDown will start with...
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if the time is complete or not...
    if(secondsLeft < 0 ) {
      clearInterval(countDown);
      return;
    }
    console.log(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display  = `${minutes}: ${remainderSeconds < 10 ? '10' : ''} ${remainderSeconds}`;
  document.title = display;

}