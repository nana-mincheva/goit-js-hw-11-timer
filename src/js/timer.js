const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  mins: document.querySelector('[data-value = "mins"]'),
  secs: document.querySelector('[data-value = "secs"]'),
};

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    setInterval(this.timer, 1000);
  }
  timer = () => {
    function pad(value) {
      return String(value).padStart(2, "0");
    }
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    refs.days.textContent = days;
    const hours = pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    refs.hours.textContent = hours;
    const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    refs.mins.textContent = mins;
    const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    refs.secs.textContent = secs;
  };
}
new CountdownTimer({ targetDate: new Date("Jan 19, 2022") });