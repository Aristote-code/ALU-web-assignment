let button = document.getElementById('button');

function downloadFile() {
    let pdf = 'ari.pdf';
    let a = document.createElement('a');
    a.href = pdf;
    a.download = pdf;
    a.click();
}

button.addEventListener('click', downloadFile);