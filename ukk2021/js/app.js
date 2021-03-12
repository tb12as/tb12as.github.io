function themeCheck() {
    let darkMode = document.querySelector('#toogleA')
    let body = document.querySelector('body')
    if (localStorage.theme == 'dark') {
        darkMode.checked = true;
        body.classList.add('dark');
    }

    darkMode.addEventListener('change', (e) => {
        e.preventDefault();

        if (e.target.checked) {
            localStorage.setItem('theme', 'dark');
            body.classList.add('dark');

        } else {
            localStorage.setItem('theme', 'light');
            body.classList.remove('dark');

        }
    })

}

themeCheck();
document.addEventListener('DOMContentLoaded', () => {
    let h1 = document.querySelector('h2');

    countdown.setLabels(
        ' millidetik| Detik| Menit| Jam| Hari| week| month| year| decade| century| millennium',
        ' millidetik| Detik| Menit| Jam| Hari| weeks| months| years| decades| centuries| millennia',
        ' dan ',
        ', ',
        '',

        function (n) { return n.toString(); });

    setInterval(() => {
        let count = countdown(new Date(2021, 2, 15, 7, 30)).toString();
        h1.innerText = count;
        // entah kenapa maret = 2 bukan 3
    }, 1000);

});

