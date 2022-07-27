export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(() => {
      this.secondsPassed += 1;
    }, 1000);
    if (this.secondsPassed === 60) {
      this.secondsPassed = 0;
      this.minsPassed += 1;
    }
  },
  getTime() {
    const formatSeconds = (seconds) => {
      if (seconds < 10) {
        return `0${seconds}`;
      }
      return seconds;
    };
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    setTimeout(() => {
      const startTime = this.startTimer;
      clearInterval(startTime);
      console.log("stop");
    }, 0);
  },
};
timer.startTimer();
timer.stopTimer();
console.log(timer.secondPassed);
// Тут краще записувати значення інтервалу у змінну і потім її передавати у clearInterval
// clearInterval(this.startTimer);
// Тут у назві бракує 's'
// secondPassed: 0,
// 2. getTime вже є у функції. У resetTimer викликається stopTimer() та значення з объекту ставляться до 0
// 3. Так, умову з 6 теста треба реалізувати у startTimer
// 4. stopTimer обнуляє інтервал, 
// але не secondsPassed та minsPassed. 
// тже ця умова буде виконуватись поки не буде викликан resetTimer.
//  Щоб вона працювала треба передавати
//   у clearInterval змінну зі значенням інтервала (edited)

// const formatSeconds = seconds => {
//   if (seconds < 10) {
//     return `0${seconds}`;
//   }
//   return seconds;
// };
