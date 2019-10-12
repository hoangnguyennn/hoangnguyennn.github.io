let DOB = moment(new Date('February 20, 1998'));
let now = moment(new Date());

let years = now.diff(DOB, 'year');
let months = now.diff(DOB.add(years, 'years'), 'month');
let days = now.diff(DOB.add(months, 'months'), 'day');

console.log(years, months, days);

document.querySelector('.years > span').innerHTML = years;
document.querySelector('.months > span').innerHTML = months;
document.querySelector('.days > span').innerHTML = days;