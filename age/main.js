const timeClasses = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const year1El = document.querySelector('.box-1 .number:nth-child(1)');
const year2El = document.querySelector('.box-1 .number:nth-child(2)');
const month1El = document.querySelector('.box-1 .number:nth-child(4)');
const month2El = document.querySelector('.box-1 .number:nth-child(5)');
const day1El = document.querySelector('.box-1 .number:nth-child(7)');
const day2El = document.querySelector('.box-1 .number:nth-child(8)');

const hour1El = document.querySelector('.box-2 .number:nth-child(1)');
const hour2El = document.querySelector('.box-2 .number:nth-child(2)');
const minute1El = document.querySelector('.box-2 .number:nth-child(4)');
const minute2El = document.querySelector('.box-2 .number:nth-child(5)');
const second1El = document.querySelector('.box-2 .number:nth-child(7)');
const second2El = document.querySelector('.box-2 .number:nth-child(8)');

function renderTime() {
  const DOB = moment(new Date('February 20, 1998'));
  const now = moment(new Date());
  const years = now.diff(DOB, 'year');
  const months = now.diff(DOB.add(years, 'years'), 'month');
  const days = now.diff(DOB.add(months, 'months'), 'day');
  const hours = now.diff(DOB.add(days, 'day'), 'hour');
  const minutes = now.diff(DOB.add(hours, 'hour'), 'minute');
  const seconds = now.diff(DOB.add(minutes, 'minute'), 'second');

  const [year1, year2] = to2Digits(years).split('');
  const [month1, month2] = to2Digits(months).split('');
  const [day1, day2] = to2Digits(days).split('');
  const [hour1, hour2] = to2Digits(hours).split('');
  const [minute1, minute2] = to2Digits(minutes).split('');
  const [second1, second2] = to2Digits(seconds).split('');

  timeClasses.forEach((className) => {
    year1El.classList.remove(className);
    year2El.classList.remove(className);
    month1El.classList.remove(className);
    month2El.classList.remove(className);
    day1El.classList.remove(className);
    day2El.classList.remove(className);
    hour1El.classList.remove(className);
    hour2El.classList.remove(className);
    minute1El.classList.remove(className);
    minute2El.classList.remove(className);
    second1El.classList.remove(className);
    second2El.classList.remove(className);
  });

  year1El.classList.add(timeClasses[year1]);
  year2El.classList.add(timeClasses[year2]);
  month1El.classList.add(timeClasses[month1]);
  month2El.classList.add(timeClasses[month2]);
  day1El.classList.add(timeClasses[day1]);
  day2El.classList.add(timeClasses[day2]);
  hour1El.classList.add(timeClasses[hour1]);
  hour2El.classList.add(timeClasses[hour2]);
  minute1El.classList.add(timeClasses[minute1]);
  minute2El.classList.add(timeClasses[minute2]);
  second1El.classList.add(timeClasses[second1]);
  second2El.classList.add(timeClasses[second2]);

  setTimeout(() => {
    renderTime();
  }, 1000);
}

function to2Digits(num) {
  return `0${num}`.slice(-2);
}

renderTime();
