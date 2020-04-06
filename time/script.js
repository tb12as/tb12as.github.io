function ready(fn) {
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(fn, 1);
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	var now = new Date(Date.now());
	var jam = now.getHours();
	var menit = now.getMinutes();
	var detik = now.getSeconds();
	var jamSekarang = (jam < 10 ? '0'+jam : jam)+':'+(menit < 10 ? '0'+menit : menit)+':'+(detik < 10 ? '0'+detik : detik);
	document.querySelector('#jam').innerHTML = jamSekarang;


	setInterval(function() {
		const sekarang = new Date(Date.now());
		const jamTiapDetik = sekarang.getHours();
		const menitTiapDetik = sekarang.getMinutes();
		const detikLoad = sekarang.getSeconds();
		const jamSekarangLoad = (jamTiapDetik < 10 ? '0'+jamTiapDetik : jamTiapDetik)+':'+(menitTiapDetik < 10 ? '0'+menitTiapDetik : menitTiapDetik)+':'+(detikLoad < 10 ? '0'+detikLoad : detikLoad);
		document.querySelector('#jam').innerHTML = jamSekarangLoad;
	}, 1000);

	if (jam >= 0 && jam < 10) {
		document.title = 'Selamat Pagi';
		document.getElementById('greet').innerHTML = 'Selamat Pagi';
	} else if (jam >= 10 && jam < 13) {
		document.title = 'Selamat Siang';
		document.getElementById('greet').innerHTML = 'Selamat Siang';
	} else if (jam >= 13 && jam < 18) {
		document.title = 'Selamat Sore';
		document.getElementById('greet').innerHTML = 'Selamat Sore';
	} else {
		document.title = 'Selamat Malam';
		document.getElementById('greet').innerHTML = 'Selamat Malam';
	}

	// Tanggal 
	var hari = now.getDay();
	var bulan = now.getMonth();
	var tahun = now.getFullYear();
	var date = now.getDate();

	var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
	var namaBulan = ['Januari', 'Frebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
	var tanggal = namaHari[hari]+', '+date+' '+namaBulan[bulan]+' '+tahun;
	document.querySelector('#tanggal').innerHTML = tanggal;

	// Ganti Background
	setTimeout(() => {

		document.querySelector('body').style.background = 'teal';

		setTimeout(() => {
			document.querySelector('#greet').style.transform = 'translate(0, 0)';
			document.querySelector('#greet').style.opacity = '1';
			document.querySelector('#greet').style.visibility = 'visible';

			document.querySelector('#jam').style.transform = 'translate(0, 0)';
			document.querySelector('#jam').style.opacity = '1';
			document.querySelector('#jam').style.visibility = 'visible';

			document.querySelector('#tanggal').style.transform = 'translate(0, 0)';
			document.querySelector('#tanggal').style.opacity = '1';
			document.querySelector('#tanggal').style.visibility = 'visible';

		}, 800);
	}, 100);
});