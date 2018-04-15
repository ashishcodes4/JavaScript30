let countDown;

const secondsTimer = (seconds) => {
    const now =  Date.now();
    const then = Date.now();
    
    countDown = setInterval(()=> {
        const timeLeft  = (then - Date.now())/1000;
    }, 1000);

}

secondsTimer(2);