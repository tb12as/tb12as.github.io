function ready(fn) {
	document.addEventListener('DOMContentLoaded', fn);
}

let lirik = [
	{ lirik: "by Syafiq Afifuddin", durasi: 0 },
	{ lirik: "Some days‚ You are the only thing I know", durasi: 7052 },
	{ lirik: "Only thing that′s burning when the nights grow cold", durasi: 10080 },
	{ lirik: "Can′t look away‚ can′t look away", durasi: 14000 },
	{ lirik: "Beg you to stay‚ beg you to stay‚ yeah", durasi: 18001 },
	{ lirik: "Sometimes‚ You are a stranger in my bed", durasi: 21042 },
	{ lirik: "Don′t know if you love me or you want me dead", durasi: 24061 },
	{ lirik: "Push me away‚ push me away", durasi: 28001 },
	{ lirik: "Then beg me to stay‚ beg me to stay‚ yeah", durasi: 31032 },
	{ lirik: "Call me in the morning to apologize", durasi: 35022 },
	{ lirik: "Every le lie gives me butterflies", durasi: 38031 },
	{ lirik: "Something in the way You are looking through my eyes", durasi: 41061 },
	{ lirik: "Don′t know if I am gona make it out alive", durasi: 45020 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 49001 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 52020 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 55071 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 59000 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 62071 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 65091 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 69041 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 72082 },
	{ lirik: "Some days‚ You are the best thing in my life", durasi: 76051 },
	{ lirik: "Sometimes when I look at you‚ I see my wife", durasi: 79071 },
	{ lirik: "Then you turn into somebody I don′t know", durasi: 83011 },
	{ lirik: "And you push me away‚ push me away‚ yeah", durasi: 86042 },
	{ lirik: "Call me in the morning to apologize", durasi: 90040 },
	{ lirik: "Every le lie gives me butterflies", durasi: 93050 },
	{ lirik: "Something in the way You are looking through my eyes", durasi: 96091 },
	{ lirik: "Don′t know if I am gona make it out alive", durasi: 100041 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 104021 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 107041 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 110091 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 114031 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 117091 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 121031 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 124071 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 128011 },
	{ lirik: "Blood on my shirt‚ rose in my hand", durasi: 132061 },
	{ lirik: "You are looking at me like you don′t know who I am", durasi: 135061 },
	{ lirik: "Blood on my shirt‚ heart in my hand", durasi: 139021 },
	{ lirik: "Still beating", durasi: 142092 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 145061 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 148090 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 152032 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 155081 },
	{ lirik: "Fight so dirty‚ but your love so sweet", durasi: 159030 },
	{ lirik: "Talk so pretty‚ but your heart got teeth", durasi: 162062 },
	{ lirik: "Late night devil‚ put your hands on me", durasi: 166011 },
	{ lirik: "And never‚ never‚ never ever let go", durasi: 169051 },
	{ lirik: "Teeth", durasi: 176031 },
	{ lirik: "Teeth", durasi: 179020 },
	{ lirik: "Teeth", durasi: 182060 },
	{ lirik: "Never‚ never‚ never ever let go", durasi: 183060 },
	{ lirik: "Special thanks, Google, Stackoverflow", durasi: 188072 },
	{ lirik: "Syafiq Afifuddin, 2020", durasi: 189072 },
];

ready(() => {
	let video = document.querySelector('video');
	let playButton = document.querySelector('#playbutton');
	let loading = document.getElementById('loading');
	
	var mp3_link = 'assets/teeth.mp3';

	var req = new XMLHttpRequest();
	req.open("GET", mp3_link, true);
	req.addEventListener("progress", (evt) => {
		if (evt.lengthComputable) {
			var percentComplete = evt.loaded / evt.total * 100;
			loading.innerText = `${Math.floor(percentComplete)}%`;
			if (percentComplete === 100) {
				playbutton.style.display = 'block';
				loading.style.display = 'none';
			}
			// console.log(percentComplete);
		}
	}, false);

	req.responseType = "blob";
	req.onreadystatechange = () => {
		if (req.readyState === 4 && req.status === 200) {
			var filename = 'file.mp3';
			if (typeof window.chrome !== 'undefined') { // hanya work di chrome
				var link = window.URL.createObjectURL(req.response);
				video.src = link;
			} else if (typeof window.navigator.msSaveBlob !== 'undefined') {
				// IE version
				// var blob = new Blob([req.response], { type: 'application/force-download' });
				// window.navigator.msSaveBlob(blob, filename);
				alert('Your browser does not support for this');
			} else {
				// Firefox version
				var file = new File([req.response], filename, { type: 'audio/mpeg' });
				video.src = URL.createObjectURL(file);
			}
		}
	};
	req.send();
	// referensi : https://stackoverflow.com/questions/39589917/show-a-progress-bar-for-downloading-files-using-xhr2-ajax


	playButton.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector('.overlay').classList.add('hide');
		video.play();

	});

	video.addEventListener('play', (e) => {

		lirik.forEach((value, index) => {
			setTimeout(() => {
				document.querySelector('.tengah .semi').innerText = lirik[index + 1]['lirik'];
				document.querySelectorAll('.tengah h1')[index + 1].classList.add('focus');
				document.querySelectorAll('.tengah h1')[index == 0 ? 2 : index].classList.remove('focus');

			}, value.durasi);
		});
	});


	lirik.forEach((val, index) => {
		let par = document.createElement('h1');
		par.innerText = val.lirik;

		document.querySelector('.tengah').append(par);
	});

});