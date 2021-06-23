const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  getComponentsTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  start() {
    this.id = setInterval(() => {
      const dateNow = Date.now();
      const diff = this.targetDate - dateNow;
      const { days, hours, mins, secs } = this.getComponentsTime(diff);
      setTimer({ days, hours, mins, secs });
      this.stop(diff);
    }, 1000);
  }

  stop(time) {
    if (time <= 0) {
      clearInterval(this.id);
    }
  }
}

const myBirthdayDay= new  CountdownTimer({
onTick: setTimer,
selector: '#timer-1',
targetDate: new Date('jun 30, 2021'),

});
myBirthdayDay.start();

function setTimer({ days, hours, mins, secs }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${mins}`;
  secsEl.textContent = `${secs}`;
}
