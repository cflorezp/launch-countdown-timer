document.addEventListener('DOMContentLoaded', () => {
  const dateLimit = new Date('2021-07-12 00:00:00');

  const miliSecXSecond = 1000;
  const miliSecXMinute = miliSecXSecond * 60;
  const miliSecXHour = miliSecXMinute * 60;
  const miliSecXDay = miliSecXHour * 24;

  function updateCountDown() {
    const today = new Date();
    const duration = dateLimit - today;
    const remainingDays = Math.floor(duration / miliSecXDay);
    const remaininghHours = Math.floor((duration % miliSecXDay) / miliSecXHour);
    const remainingMinutes = Math.floor(
      (duration % miliSecXHour) / miliSecXMinute
    );
    const remainingSeconds = Math.floor(
      (duration % miliSecXMinute) / miliSecXSecond
    );

    if (remainingDays > 9) {
      document.getElementById('days').innerHTML = remainingDays;
    } else {
      document.getElementById('days').innerHTML = '0' + remainingDays;
    }
    if (remaininghHours > 9) {
      document.getElementById('hours').innerHTML = remaininghHours;
    } else {
      document.getElementById('hours').innerHTML = '0' + remaininghHours;
    }
    if (remainingMinutes > 9) {
      document.getElementById('minutes').innerHTML = remainingMinutes;
    } else {
      document.getElementById('minutes').innerHTML = '0' + remainingMinutes;
    }
    if (remainingSeconds > 9) {
      document.getElementById('seconds').innerHTML = remainingSeconds;
    } else {
      document.getElementById('seconds').innerHTML = '0' + remainingSeconds;
    }
  }
  updateCountDown();
  setInterval(updateCountDown, miliSecXSecond);
});
