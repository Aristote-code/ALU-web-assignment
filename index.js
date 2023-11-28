let Copy1 = document.getElementById('copy');
let Copy2 = document.getElementById('copy1');
let celebrate = document.getElementById('celebrate');
let checkin = document.getElementById('checkin');
let clever = document.getElementById('clever');
let portfolioV1 = document.getElementById('portfolioV1');
let huzza = document.getElementById('huzza');

function copyEmail(email) {
    navigator.clipboard.writeText(email);
}

Copy1.addEventListener('click', function() {
    copyEmail('gahimaaristote1@gmail.com');
});

Copy2.addEventListener('click', function() {
    copyEmail('gahimaaristote1@gmail.com');
});

celebrate.addEventListener('click', function () {
    var websiteUrl = "https://www.behance.net/gallery/161768189/Celebrate-brand-guidlines";
    window.open(websiteUrl, '_blank');
});

checkin.addEventListener('click', function () {
    var websiteUrl = "https://www.figma.com/file/JPhwDcpOMSZAYisl2ysl2D/Check-In-tours-(Copy)?type=design&node-id=0%3A1&mode=design&t=FfHrVbWtOUBH5rzo-1";
    window.open(websiteUrl, '_blank');
});

clever.addEventListener('click', function () {
    var websiteUrl =
      "https://www.figma.com/file/jkryiNbGuxMGhIGOCsTMc0/Clever-Portifolo?type=design&node-id=0%3A1&mode=design&t=YqrhaPPbBSt2ZjyC-1";
    window.open(websiteUrl, '_blank');
});

portfolioV1.addEventListener('click', function () {
    var websiteUrl =
      "https://www.figma.com/file/ClVzG9XrTMfACSIJzI4rqv/My-portifolio?type=design&node-id=15%3A4&mode=design&t=PgTMfeTiPhR1hNez-1";
    window.open(websiteUrl, '_blank');
});

huzza.addEventListener('click', function () {
    var websiteUrl =
      "https://www.behance.net/gallery/170651087/Huuza-Agency-Brand-Guildlines";
    window.open(websiteUrl, '_blank');
});

let Download = document.getElementById('Download');

function downloadFile() {
    let pdf = 'ari.pdf';
    let a = document.createElement('a');
    a.href = pdf;
    a.download = pdf;
    a.click();
}

Download.addEventListener('click', downloadFile);

