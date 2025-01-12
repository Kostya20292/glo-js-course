export const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let intervalId;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    const { timeRemaining, hours, minutes, seconds } = getTimeRemaining();
    timerHours.textContent = hours < 10 ? `0${hours}` : hours;
    timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
    timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (timeRemaining < 0) {
      clearInterval(intervalId);
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  updateClock();

  intervalId = setInterval(updateClock, 1000);
};
