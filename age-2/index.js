function to2(number) {
	return number > 9 ? number : `0${number}`;
}

function to3(number) {
	return number > 99 ? number : (number > 9 ? `0${number}` : `00${number}`);
}

setInterval(() => {
	const dob		=	moment(new Date('February 20, 1998 00:00:00 GMT+0700'));
	let now			=	moment(new Date()),
		years		=	now.diff(dob, 'year'),
		months		=	now.diff(dob.add(years, 'years'), 'month'),
		days		=	now.diff(dob.add(months, 'months'), 'day'),
		hours		=	now.diff(dob.add(days, 'days'), 'hour'),
		minutes		=	now.diff(dob.add(hours, 'hours'), 'minute'),
		seconds		=	now.diff(dob.add(minutes, 'minutes'), 'second'),
		miliseconds	=	now.diff(dob.add(seconds, 'seconds'), 'milisecond');
	// console.log(years, months, days, hours, minutes, seconds);
	document.getElementsByClassName('years')[0].innerHTML = to2(years);
	document.getElementsByClassName('months')[0].innerHTML = to2(months);
	document.getElementsByClassName('days')[0].innerHTML = to2(days);
	document.getElementsByClassName('hours')[0].innerHTML = to2(hours);
	document.getElementsByClassName('minutes')[0].innerHTML = to2(minutes);
	document.getElementsByClassName('seconds')[0].innerHTML = to2(seconds);
	document.getElementsByClassName('miliseconds')[0].innerHTML = to3(miliseconds);
}, 1);