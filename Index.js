const TIME = document.querySelector('.time');
const DAY = document.querySelector('.day');

setInterval(() => {
   TIME.innerHTML = String(new Date()).split('+')[0];
   DAY.innerHTML = getCurrentDayOfWeek();
}, 1000);

function getCurrentDayOfWeek() {
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const currentDate = new Date();
   const dayIndex = currentDate.getDay();
   return daysOfWeek[dayIndex];
}
