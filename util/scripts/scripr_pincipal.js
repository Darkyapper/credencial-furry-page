let i = 0;
let j = 3;


const images = document.querySelectorAll('.img-contenedor img');

function next() {
    document.getElementById('cont' + (i + 1)).classList.remove('active');
    i = (j + i + 1) % j;
    document.getElementById('cont' + (i + 1)).classList.add('active');
}

function prev(){
    document.getElementById('cont' + (i + 1)).classList.remove('active');
    i = (j + i - 1) % j;
    document.getElementById('cont' + (i + 1)).classList.add('active');
}