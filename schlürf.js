window.addEventListener('load', init);

let c = 1;
let r = 0;

function init() { 
    document.getElementsByClassName('danciniswhattodo')[0].addEventListener('click', danciniswhattodo);
    document.getElementsByClassName('knopf')[0].addEventListener('click', anstupsen);
    document.getElementsByClassName('danciniswhatithinkido')[0].addEventListener('click', danciniswhatithinkido);
    p = 0;
	document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
    document.getElementById('majogabel').innerText=`Verdoppler: ${r}`;
}
function anstupsen() {
    p+=c;
    document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
}
function danciniswhattodo() {
    if (p > 99) {
        setInterval(anstupsen, 1000);
        p-= 100;
    } else {
        location.href = 'https://fckaf.de/tD6';
      }
}
function danciniswhatithinkido() {
    if (p > 9999) {
        c*=2;
        r++;
        document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
        document.getElementById('majogabel').innerText=`Verdoppler: ${r}`;
        p-= 10000;
    }
}
