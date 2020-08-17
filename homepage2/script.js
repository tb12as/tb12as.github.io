const clock = document.querySelector('#clock');
const greet = document.querySelector('#greet');
function ready(fn) {
	if (document.readyState == 'complete' || document.readyState == 'interactive') {
		fn;
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
function padZero(data) {
	if (data < 10) {
		return '0'+data;
	} else {
		return data;
	}
}
function timeAndGreet() {
	var now = new Date(Date.now());
	var hour = padZero(now.getHours());
	var minutes = padZero(now.getMinutes());
	var seconds = padZero(now.getSeconds());
	clock.innerHTML = hour +':'+ minutes +':'+ seconds;
	setInterval(() => {
		var now = new Date(Date.now());
		var hour = padZero(now.getHours());
		var minutes = padZero(now.getMinutes());
		var seconds = padZero(now.getSeconds());
		clock.innerHTML = hour +':'+ minutes +':'+ seconds;
	}, 1000);

	if (now.getHours() >= 0 && now.getHours() < 11) {
		greet.innerHTML = 'Selamat Pagi, Syafiq Afifuddin';
		title = 'Pagi';
	} else if(now.getHours() >= 11 && now.getHours() < 15) {
		greet.innerHTML = 'Selamat Siang, Syafiq Afifuddin';
		title = 'Siang';
	}	else if(now.getHours() >= 15 && now.getHours() < 18) {
		greet.innerHTML = 'Selamat Sore, Syafiq Afifuddin';
		title = 'Sore';
	} else {
		greet.innerHTML = 'Selamat Malam, Syafiq Afifuddin';
		title = 'Malam';
	}
	document.title = title;

	// get date, note: ini tidak interval jadi ketika pergantian hari tidak akan berubah
	var day = now.getDay(); // hari berdasarkan index array (mulai dari minggu)
	var date = now.getDate();
	var month = now.getMonth(); // bulan berdasarkan index array (mulai dari januari)
	var year = now.getFullYear();
	// note : index dimulai dari 0

	var allDay = ["Minggu",	"Senin", "Selasa", "Rabu", "Kamis",	"Jum'at",	"Sabtu",
	];
	var allMonth = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember"
	];
	var print = allDay[day]+', '+date+' '+allMonth[month]+' '+year;
	document.querySelector('#date').innerHTML = print;
	// add class active to day now
	var semuaHariDiDOM = Array.prototype.slice.call = (document.querySelector('.left-clock').children);
	day = (day == 0 ? 6 : day -1); // use your brain to understand this
	semuaHariDiDOM[day].classList.add('active');
}

ready(() => {
	timeAndGreet();
});
