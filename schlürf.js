window.addEventListener('load', init);

let c = 1;
let r = 0;
let f = 0;
let howmuchisthefish = 1;
let bbq = 100;
let i = 0;
function init() { 
    document.getElementsByClassName('danciniswhattod')[0].innerText=`Kosten: ${bbq}`;
    document.getElementsByClassName('danciniswhattodo')[0].addEventListener('click', danciniswhattodo);
    document.getElementsByClassName('knopf')[0].addEventListener('click', anstupsen);
    document.getElementsByClassName('danciniswhatithinkido')[0].addEventListener('click', danciniswhatithinkido);
    p = 0;
	document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
    document.getElementById('majogabel').innerText=`Verdoppler: ${r}`;
    document.getElementById('ketchupgabel').innerText=`Auto-Clicker: ${f}`;
}
function anstupsen() {
    p+=c;
    document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
    zinsen();
}
function danciniswhattodo() {
    if (p > bbq) {
            setInterval(anstupsen, 1000);
            p-= bbq;
            f++;
            document.getElementById('ketchupgabel').innerText=`Auto-Clicker: ${f}`;
            howmuch();
    } else {
        console.log('Nööö')
        p-= bbq;
        document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
        howmuch();
        f++;
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
function howmuch() {
    howmuchisthefish++;
    bbq*=2;
    console.log(bbq);
    document.getElementById('bbqgabel').innerText=`Kosten: ${bbq}`;
}
function zinsen() {
    if  (p > -1) {
        while (i < f) {
            setInterval(anstupsen, 1000);
            i++;       
        }
    
    }

}
