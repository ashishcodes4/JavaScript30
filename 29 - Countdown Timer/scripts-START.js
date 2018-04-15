let countDown;
const timerDisplay  = document.querySelector('.display__time-left');
const displayEnd = document.querySelector('.display__end-time');

const timer = (seconds) => {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countDown = setInterval(() => {
    //decide what the countDown will start with...
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if the time is complete or not...
    if(secondsLeft < 0 ) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display  = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

const dispayEndTime = (timeStamp) => {
  const end  = new Date(timeStamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  displayEnd.textContent = `BE BACK AT ${houors}:${minutes}`
}