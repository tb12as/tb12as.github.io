const clock = document.querySelector('#clock');
const greet = document.querySelector('#greet');
const nameInput = document.querySelector('.name-input');
var name = localStorage.name;
function ready(fn) {
	if (document.readyState == 'complete' || document.readyState == 'interactive') {
		fn;
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
function padZero(data) {
	if (data < 10) {
		return '0' + data;
	} else {
		return data;
	}
}
function time() {
	var now = new Date(Date.now());
	var hour = padZero(now.getHours());
	var minutes = padZero(now.getMinutes());
	var seconds = padZero(now.getSeconds());
	clock.innerHTML = hour + ':' + minutes + ':' + seconds;
	setInterval(() => {
		var now = new Date(Date.now());
		var hour = padZero(now.getHours());
		var minutes = padZero(now.getMinutes());
		var seconds = padZero(now.getSeconds());
		clock.innerHTML = hour + ':' + minutes + ':' + seconds;
	}, 1000);

	// get date, note: ini tidak interval jadi ketika pergantian hari tidak akan berubah
	var day = now.getDay(); // hari berdasarkan index array (mulai dari minggu)
	var date = now.getDate();
	var month = now.getMonth(); // bulan berdasarkan index array (mulai dari januari)
	var year = now.getFullYear();
	// note : index dimulai dari 0

	var allDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
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
	var print = allDay[day] + ', ' + date + ' ' + allMonth[month] + ' ' + year;
	document.querySelector('#date').innerHTML = print;
	// add class active to day now
	setTimeout(() => {
		var semuaHariDiDOM = Array.prototype.slice.call = (document.querySelector('.left-clock').children);
		day = (day == 0 ? 6 : day - 1); // use your brain to understand this
		semuaHariDiDOM[day].classList.add('active');
	}, 300);
	setTimeout(() => {
		document.querySelector('.left').classList.add('m');
	}, 50);
	setTimeout(() => {
		document.querySelector('.left-clock').classList.add('m');
	}, 100);
	setTimeout(() => {
		document.querySelector('.center-clock').classList.add('m');
	}, 350);
	setTimeout(() => {
		document.querySelector('.clock').classList.add('m');
	}, 780);
	setTimeout(() => {
		document.querySelector('.right').classList.add('m');
	}, 210 + 100 + 400 + 200);
	setTimeout(() => {
		var button = document.querySelectorAll('.btn');
		button.forEach(e => {
			e.classList.add('m');
		});

		var title = document.querySelectorAll('.title');
		title.forEach(e => {
			e.classList.add('m');
		});
	}, 210 + 100 + 400 + 400);
}

function greetFunction(name) {
	if (name == 'undefined') {
		name = 'Tanpa Nama';
	}
	var now = new Date(Date.now());
	var title = '';
	if (now.getHours() >= 0 && now.getHours() < 11) {
		greet.innerHTML = `Selamat Pagi, ${name}`;
		title = 'Pagi';
	} else if (now.getHours() >= 11 && now.getHours() < 15) {
		greet.innerHTML = `Selamat Siang, ${name}`;
		title = 'Siang';
	} else if (now.getHours() >= 15 && now.getHours() < 18) {
		greet.innerHTML = `Selamat Sore, ${name}`;
		title = 'Sore';
	} else {
		greet.innerHTML = `Selamat Malam, ${name}`;;
		title = 'Malam';
	}
	document.title = title;
}

ready(() => {
	time();

	greetFunction(name);

	greet.addEventListener('click', function (event) {
		event.preventDefault();
		this.classList.add('d-none');
		nameInput.classList.remove('d-none');
		nameInput.value = localStorage.name;
		nameInput.select();
		nameInput.focus();
	});

	function hideInput() {
		nameInput.classList.add('d-none');
		greet.classList.remove('d-none');
		return greetFunction(localStorage.name);
	}

	nameInput.addEventListener('keyup', function (event) {
		if (event.code == 'Enter') {
			var nama = this.value;
			localStorage.setItem('name', nama);
			hideInput();
		}
	});

	const changeFocusBtn = document.querySelector('#changeFocus');
	const modal = document.querySelector('.modal');
	const backdrop = document.querySelector('.modal-backdrop');
	const btnclose = document.querySelector('.btn-close');

	function toggleClass() {
		modal.classList.toggle('show');
		backdrop.classList.toggle('show');
	}


	changeFocusBtn.addEventListener('click', function (event) {
		event.preventDefault();
		document.getElementById('focusValue').value = (localStorage.getItem('focus') == null || localStorage.getItem('focus') == '' ? '' : localStorage.getItem('focus'));
		toggleClass();
	});

	backdrop.onclick = function (event) {
		event.preventDefault();
		toggleClass();
	}
	btnclose.onclick = function (event) {
		event.preventDefault();
		toggleClass();
	}

	function changeFocusDOM(focus) {
		if (focus == null || focus == '') {
			focus = '<i>"Hanya terdapat 2 pilihan untuk jadi yang terbaik, perbaiki diri sendiri, atau hancurkan orang lain."</i><br /> ~Syafiq Afifuddin';
		}
		document.querySelector('.focus').innerHTML = focus;
	}

	document.querySelector('#formFocus').addEventListener('submit', function (event) {
		event.preventDefault();
		let val = document.getElementById('focusValue').value;
		localStorage.setItem('focus', val);
		toggleClass();
		changeFocusDOM(localStorage.getItem('focus'));
	});
	changeFocusDOM(localStorage.getItem('focus'));
});
