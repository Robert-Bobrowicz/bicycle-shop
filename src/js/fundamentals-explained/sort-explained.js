//tablica wyjściowa
const users = [
    { name: 'Janek Kos' },
    { name: 'Gustlik Jeleń' },
    { name: 'Grigorij Sakaszwilij' },
    { name: 'Tomek Czereśniak' },
    { name: 'Szarik (Kuleczka)' }
];

//tablica stringów
const arr = users.map(el => el.name)
console.log(arr);

//sortowanie tablic stringów - modyfikuje tablicę wyjściową 
console.log(arr.sort());
console.log(arr.reverse());


//sortowanie liczb - z użyciem callback, ponieważ inaczej sortuje jak stringi
const arrNum = [345, 23, 2, 10000];

console.log(arrNum.sort()); // 10000 będzie pierwszym el. posortowanej tablicy
console.log(arrNum.sort((a, b) => a - b));
console.log(arrNum.sort((a, b) => b - a));


//sortowanie tablic obektów
const obj = [
    { title: 'Bicycle 1', price: 1000 },
    { title: 'Bicycle 2', price: 25000 }
];

console.log(obj.sort((a, b) => a.price - b.price));
console.log(obj.sort((a, b) => b.price - a.price)); //drugie wywołanie funkcji sotującej pwooduje również sotowanie linii powyżej wg tej samej reguły (descendant) - ciekawe dlaczego?