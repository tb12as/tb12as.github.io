
var i = 0;
var speed = 50;
var ulang = 300;
let a1 = Math.floor(Math.random() * 3900000).toString() + "SYAFIQAFIFUDDIN".charAt(Math.floor(Math.random() * 15).toString());

var a4 = '0S0Y0A0F0I0Q0';
var text = document.getElementById('text');
function tulis() {
	if (i < a1.length) {
		text.innerHTML += Math.floor(Math.random() * 15).toString() + "SYAFIQAFIFUDDIN".charAt(Math.floor(Math.random() * 15).toString()).charAt(i);
		setTimeout(tulis, speed);
		i++
	} 
}

tulis();


function hilangkan() {
	setTimeout(function() {
		text.innerText = '';
		i = 0;
		tulis();
	}, 1000);
}

hilangkan();


var xyz = setInterval(function() {
	hilangkan();
}, ulang);

setTimeout(() => {
	clearInterval(xyz);
}, 5000);

setTimeout(() => {
	text.innerText = '';
	var s = 0;
	var prn = 'Sy4f1Q AAFfidUdin';
	function tulisSyafiq() {
		if (s < prn.length) {
			text.innerHTML += prn.charAt(s);
			setTimeout(tulisSyafiq, speed);
			s++
		}
	}
	tulisSyafiq();
}, 6000);

setTimeout(() => {
	text.innerHTML = '';
	var apaan = 0;
	function syafiq() {
		if (apaan < a4.length) {
			text.innerHTML += a4.charAt(apaan);
			setTimeout(syafiq, speed);
			apaan++
		}
	}
	syafiq();
}, 7030);


setTimeout(() => {
	text.innerHTML = '';
	var terAkhir = 0;
	var SYAFIQAFIFUDDIN = 'Syafiq Afifuddin';
	function LasONE() {
		if (terAkhir < SYAFIQAFIFUDDIN.length) {
			text.innerHTML += SYAFIQAFIFUDDIN.charAt(terAkhir);
			setTimeout(LasONE, speed);
			terAkhir++
		}
	}
	LasONE();
}, 7800);