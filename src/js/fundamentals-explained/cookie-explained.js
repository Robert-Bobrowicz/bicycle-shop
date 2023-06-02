//cookies - najstarszy sposób zapisu danych w pamięci
//max rozmiar to 4096 B = 4kB

const date = new Date(); console.log(date);
date.setHours(date.getHours() + 1); console.log(date);
const utc = date.toUTCString(); console.log(utc);

//ustawienie cookie
// document.cookie = "date=now + 1 hour; expires=" + utc;
//oczyt cookie
// console.log(document.cookie);
//usunięcie cookie - 2 sposoby
// 1 sposób - ustawienie pustej wartości pod istniejącym cookie
// document.cookie = "date=";
//2 spsób - ustawienie daty która już minęła
// date.setHours(date.getHours() - 1);
// const utc = date.toUTCString();

// document.cookie = "theme=; expires=" + utc;
// document.cookie = "date=; expires=" + utc;


//funkcje pomocnicze

function setCookie(name, value, expires) {
    const date = new Date();
    date.setHours(date.getHours() + expires);
    const expiresUTC = date.toUTCString();

    document.cookie = `${name}=${value}; expires=${expiresUTC}`;
};

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};

function getCookie(name) {
    const cookieValue = document.cookie
        .split(';')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];

    return cookieValue ? decodeURIComponent(cookieValue) : '';
};


// setCookie('theme', 'light', 1);
// console.log(getCookie('theme'));
// deleteCookie('theme');


//ALE, UWAGA: cookie nie umie przechowywać znaków specjalnych np. przejścia do nowego wiersza
setCookie('text', `tytuł 
opis`, 1);  //w cookie nie ma opisu!
// dlatego jest taka funcja encodeURIComponent, która zamienia znaki specjalne jak spacja, nowy wiesz, średnik, polskie litery na string
console.log(encodeURIComponent(`tytul
opis: opis do tytulu`)); // odpowiednio: %0, %20, %3A

//dlatego wielolinijkowy cookie trzeba przed zapisaniem zenkodować
setCookie('text', encodeURIComponent(`tytuł
opis do tytyłu`), 1); //ale pokazuje w cookie z tymi dodatkowymi znakami po %, więc jest funkcja decodeURIComponent

console.log(getCookie('text'));


//link: https://github.com/tworcastron/js-od-podstaw/tree/e53252e76af1c85ad75bea9b759e8fb28420afd8 