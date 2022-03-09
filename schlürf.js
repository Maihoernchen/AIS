{
document.addEventListener('DOMContentLoaded', init);

let c = 1;
let r = 0;
let f = 0;
let howmuchisthefish = 1;
let bbq = 100;
let i = 0;
let wasabi = 10000;
let themevalue = "Dark";
let important = "Light"
function init() {
    document.getElementById('bbqgabel').innerText=`Kosten: ${bbq}`;
    document.getElementById('wasabigabel').innerText=`Kosten: ${wasabi}`;
    document.getElementById('DARKMODE').innerText=`${important} Mode`;
    document.getElementById('clickerrr').addEventListener('click', danciniswhattodo);
    document.getElementsByClassName('knopf')[0].addEventListener('click', anstupsen);
    document.getElementById('verdppler').addEventListener('click', danciniswhatithinkido);
    document.getElementsByClassName('mode')[0].addEventListener('click', theme);
    p = 0;
    document.getElementById('pommesgabel').innerText=`Lappen: ${p}`;
    document.getElementById('majogabel').innerText=`Verdoppler: ${r}`;
    document.getElementById('ketchupgabel').innerText=`Auto-Clicker: ${f}`;
}
function anstupsen() {
    p+=c;
    document.getElementById('pommesgabel').innerText=`Lappen: ${Math.round(p)}`;
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
        wasabi *= 1.2;
        document.getElementById('wasabigabel').innerText=`Kosten: ${Math.round(wasabi)}`;
    }
}
function howmuch() {
    howmuchisthefish++;
    bbq*=1.2;
    console.log(bbq);
    document.getElementById('bbqgabel').innerText=`Kosten: ${Math.round(bbq)}`;
}
function zinsen() {
    if  (p > -1) {
        while (i < f) {
            setInterval(anstupsen, 1000);
            i++;
        }

    }

}
function theme() {
	if (themevalue === "Dark"){
		themevalue = "Light";
		important = "Dark";
		document.body.style.color = "#007FFF";
		document.body.style.backgroundColor = "white";
		document.getElementById('DARKMODE').innerText=`${important} Mode`;
	} else {
		themevalue = "Dark";
		important = "Light";
		document.body.style.color = "blue";
		document.body.style.backgroundColor = "#111";
		document.getElementById('DARKMODE').innerText=`${important} Mode`;
	}
}

}
