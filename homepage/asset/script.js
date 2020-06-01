function tampilkan(nama) {
	let now = new Date(Date.now());

	function jamDanTanggal() {
		setInterval(() => {
			let d = new Date(Date.now());
			document.getElementById('jam').innerHTML = (d.getHours() < 10 ? '0'+d.getHours() : d.getHours())+':'+(d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes())+':'+(d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds());
		}, 1000);
		document.getElementById('hari').innerHTML = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"][now.getDay()]+', '+now.getDate()+' '+['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'][now.getMonth()]+' '+now.getFullYear();
		document.getElementById('jam').innerHTML = (now.getHours() < 10 ? '0'+now.getHours() : now.getHours())+':'+(now.getMinutes() < 10 ? '0'+now.getMinutes() : now.getMinutes())+':'+(now.getSeconds() < 10 ? '0'+now.getSeconds() : now.getSeconds());
	}

	function greet(nama) {
		var jam = now.getHours();
		if (jam >= 0 && jam < 11) {
			var greet = ['Pagi', 'Morning'];
		} else if(jam >= 11 && jam < 15) {
			var greet = ['Siang', 'Afternoon'];
		} else if(jam >= 15 && jam < 18) {
			var greet = ['Sore', 'Evening'];
		} else {
			var greet = ['Malam', 'Night'];
		}
		document.title = 'Good '+greet[1];

		var text = greet[0]+', '+nama;
		document.getElementById('greet').innerHTML = text;
	}

	jamDanTanggal();
	greet(localStorage.nama);

	$('#greet').click(function(e) {
		e.preventDefault();
		$(this).css('display', 'none');
		$('#ubahNama').fadeIn();
		$('#ubahNama').val(localStorage.nama);
		var textnama = document.querySelector('#ubahNama');
		textnama.focus();
		textnama.select();
	});
	
	function ubahNama() {
		$('#ubahNama').keydown(function(e) {
			// console.log(e.code);
			if (e.code === 'Enter' || e.code === 'NumpadEnter') {
				var value = this.value;
				if (value) {
					localStorage.setItem('nama', value.toLocaleLowerCase());
					$('#ubahNama').css('display', 'none');
					$('#greet').html(value);
					$('#greet').fadeIn();
					greet(localStorage.nama);
				} else {
					return;
				}
			}
		});
	}
	ubahNama();

	$(document).ready(function() {
		setTimeout(() => {
			document.querySelector('#jam').classList.add('m');
			document.querySelector('#hari').classList.add('i');
			$('.bl').addClass('muncul');
		}, 100);
		setTimeout(() => {
			$('.aa').each(function(i) {
				setTimeout(() => {
					$('.aa').eq(i).addClass('m');
				}, 200 * i);
			});
		}, 500);
		setTimeout(() => {
			$('#greet').addClass('l');
		}, 1000);

		function reset() {
			localStorage.clear();
			$('.aa').each(function(i) {
				setTimeout(() => {
					$('.aa').eq(i).removeClass('m');
				}, 200 * i);
			});
			location.reload();
		}

		$('.btnReset').click(function(e) {
			e.preventDefault();
			reset();
		});
	});
}

function tambahNama() {
	$('#formNama').submit(function(event) {
		event.preventDefault();
		let n = $('#nama').val();
		if (n) {
			localStorage.setItem('nama', n.toLocaleLowerCase());
			$('.tengah').fadeOut();
			tampilkan(n);
		} else {
			return;
		}
	});
}

function blur() {
	$('.bgblur').toggleClass('blurN');
}

$('.btnBlur').click(function(e) {
	e.preventDefault();
	blur();
});

if (localStorage.nama) {
	$('.tengah').css('display', 'none');
	var nama = localStorage.nama;
	tampilkan(nama);
} else {
	$('.tengah').fadeIn();
	tambahNama();
}