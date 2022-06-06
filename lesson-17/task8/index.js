export const timer = {
  secondPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(() => {
      this.secondPassed += 1;
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondPassed}`;
  },
  stopTimer() {
    setTimeout(() => {
      clearInterval(this.startTimer);
      console.log("stop");
    }, 0);
  },
};
timer.startTimer();
timer.stopTimer();
console.log(timer.secondPassed);
