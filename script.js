
const currentDayEl = document.querySelector('.current__day');
const currentTimeEl = document.querySelector('.current__utc__time');

const getDay = () => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let date = new Date();
  let day = date.getDay();

  const today = weekday[day];
  return currentDayEl.textContent = today;
}

const getUTCTime = () => {
  const now = new Date();
  
  let ms = now.getTime();
  return currentTimeEl.textContent = ms
}


getDay();
getUTCTime()