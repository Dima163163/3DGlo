const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const divTime = document.querySelector(".timer-action");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = Math.floor((timeRemaining / 60) % 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor(timeRemaining % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  // const updateClock = () => {
  //   let getTime = getTimeRemaining();
  //   timerHours.textContent = getTime.hours;
  //   timerMinutes.textContent = getTime.minutes;
  //   timerSeconds.textContent = getTime.seconds;

  //   if (getTime.timeRemaining > 0) {
  //     setInterval(updateClock, 1000);
  //   }
  // };

  // updateClock();

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = getTime.hours;

    timerMinutes.textContent = getTime.minutes;

    timerSeconds.textContent = getTime.seconds;
  };

  const timerInterval = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      setInterval(() => {
        updateClock();
      }, 1000);
    }
    if (getTime.timeRemaining < 0) {
      divTime.innerHTML = "Акция закончилась";
    }
  };

  timerInterval();
};

export default timer;
