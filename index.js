let Copy1 = document.getElementById('copy');
let Copy2 = document.getElementById('copy1');

function copyEmail(email) {
    navigator.clipboard.writeText(email);
}

Copy1.addEventListener('click', function() {
    copyEmail('gahimaaristote1@gmail.com');
});

Copy2.addEventListener('click', function() {
    copyEmail('gahimaaristote1@gmail.com');
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

