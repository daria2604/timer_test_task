const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const formatTimer = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [hours + ' hours', minutes + ' minutes', seconds + ' seconds'].join(" : ");
};

const createTimerAnimator = () => {
  let timeInterval;

  return (seconds) => {
    clearInterval(timeInterval);
    let currentTime = seconds;

    const decreaseTime = () => {
      timerEl.textContent = formatTimer(currentTime);
      currentTime = currentTime > 0 ? currentTime - 1 : 0;
    }

    timeInterval = setInterval(decreaseTime, 1000);
  };
};

const animateTimer = createTimerAnimator();

const startCountdown = () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
};

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", startCountdown);
