const clock = document.querySelector('#clock');
const greet = document.querySelector('#greet');
const nameInput = document.querySelector('.name-input');
const datePrint = document.querySelector('#date');

const changeFocusBtn = document.querySelector('#changeFocus');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.modal-backdrop');
const btnclose = document.querySelector('.btn-close');

const name = localStorage.name;

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
	let now = new Date(Date.now());
	let hour = padZero(now.getHours());
	let minutes = padZero(now.getMinutes());
	let seconds = padZero(now.getSeconds());
	clock.innerHTML = hour + ':' + minutes + ':' + seconds;
	setInterval(() => {
		let now = new Date(Date.now());
		let hour = padZero(now.getHours());
		let minutes = padZero(now.getMinutes());
		let seconds = padZero(now.getSeconds());
		clock.innerHTML = hour + ':' + minutes + ':' + seconds;
	}, 1000);

    // get date, note: ini tidak interval jadi ketika pergantian hari tidak akan berubah
    let day = now.getDay(); // hari berdasarkan index array (mulai dari minggu)
    let date = now.getDate();
    let month = now.getMonth(); // bulan berdasarkan index array (mulai dari januari)
    let year = now.getFullYear();
    // note : index dimulai dari 0

    const allDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const allMonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    datePrint.innerHTML = `${allDay[day]}, ${date} ${allMonth[month]} ${year}`;

    // add class active to day now
    setTimeout(() => {
    	const semuaHariDiDOM = document.querySelectorAll('.hari');
        day = (day == 0 ? 6 : day - 1); // use your brain to understand this
        semuaHariDiDOM[day].classList.add('active');
    }, 300);

    setTimeout(() => {
    	document.querySelector('.left').classList.add('m');
    	document.querySelector('.left-clock').classList.add('m');
    	document.querySelector('.center-clock').classList.add('m');
    	document.querySelector('.clock').classList.add('m');
    	document.querySelector('.right').classList.add('m');
    }, 500);

    setTimeout(() => {
    	const buttons = document.querySelectorAll('.btn');
    	buttons.forEach(e => {
    		e.classList.add('m');
    	});

    	const titles = document.querySelectorAll('.title');
    	titles.forEach(e => {
    		e.classList.add('m');
    	});

    }, 600);
}

function greetFunction(name) {
	if (name == 'undefined') {
		name = 'Tanpa Nama';
	}
	let now = new Date(Date.now());
	let title = '';
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

function hideInput() {
	nameInput.classList.add('d-none');
	greet.classList.remove('d-none');
	return greetFunction(localStorage.name);
}


ready(() => {
	time();

	greetFunction(name);

	greet.addEventListener('click', function(event) {
		event.preventDefault();
		this.classList.add('d-none');
		nameInput.classList.remove('d-none');
		nameInput.value = localStorage.name;
		nameInput.select();
		nameInput.focus();
	});

	nameInput.addEventListener('keyup', function(event) {
		if (event.code == 'Enter') {
			let nama = this.value;
			localStorage.setItem('name', nama);
			hideInput();
		}
	});

	function toggleClass() {
		modal.classList.toggle('show');
		backdrop.classList.toggle('show');
	}

	changeFocusBtn.addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('focusValue').value = (localStorage.getItem('focus') == null || localStorage.getItem('focus') == '' ? '' : localStorage.getItem('focus'));
		toggleClass();
	});

	backdrop.onclick = function(event) {
		event.preventDefault();
		toggleClass();
	}

	btnclose.onclick = function(event) {
		event.preventDefault();
		toggleClass();
	}

	function changeFocusDOM(focus) {
		if (focus == null || focus == '') {
			focus = 'Hanya terdapat 2 pilihan untuk jadi yang terbaik, perbaiki diri sendiri, atau hancurkan orang lain.<br /><br /> ~Syafiq Afifuddin';
		}
		
		document.querySelector('.focus').innerHTML = focus;
	}

	document.querySelector('#formFocus').addEventListener('submit', function(event) {
		event.preventDefault();
		let val = document.getElementById('focusValue').value;
		localStorage.setItem('focus', val);
		toggleClass();
		changeFocusDOM(localStorage.getItem('focus'));
	});

	changeFocusDOM(localStorage.getItem('focus'));
});
