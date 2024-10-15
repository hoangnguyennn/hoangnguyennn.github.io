const TET = new Date('January 29, 2025 00:00:00 GMT+07:00').toUTCString();
const TET_MOMENT = moment(TET);

setInterval(() => {
  let now = moment(new Date().toUTCString());
  let diff = (TET_MOMENT - now) / 1000;

  let days = Math.floor(diff / (60 * 60 * 24));
  diff -= days * (60 * 60 * 24);

  let hours = Math.floor(diff / (60 * 60));
  diff -= hours * (60 * 60);

  let minutes = Math.floor(diff / 60);
  diff -= minutes * 60;

  let seconds = diff;

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
}, 1000);
