var now = new Date(Date.now());
var jam = now.getHours();

if(jam >= 0 && jam < 12) {
    $('#selamat').html('Selamat Pagi');
} else if(jam >= 12 && jam < 15) {
    $('#selamat').html('Selamat Siang');
} else if(jam >= 15 && jam < 18) {
    $('#selamat').html('Selamat Sore');
} else {
    $('#selamat').html('Selamat Malam');
}


$(function () {
    
    $('.tengah').each(function (i) { 
        var total = (2500 * i) + (500 * i);
        // document.write(total+'<br>');
        setTimeout(() => {
            $('.tengah').eq(i).fadeIn();
            setTimeout(() => {
                $('.tengah').fadeOut();
            }, 2500);
        }, 3000 * i);

        setTimeout(() => {
            $('#terakhir').fadeIn();
        }, 30000);
    });

});