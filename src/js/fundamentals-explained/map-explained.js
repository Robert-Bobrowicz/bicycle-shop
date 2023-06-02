//mapowanie tablic

const arr = new Array(1, 2, 3, 4); console.log(arr);

//utworzenie pustej tablicy na x elementów - new Array(x)
console.log(new Array(4));

//wypełnienie tablicy elementami fill(el, odktórego indexu, doktoregoindexu -1)
console.log(new Array(10).fill('wartość el', 4, 8));


//map(item => newItem) - zwraca nową tablicę i nie zmienia tablicy wyjściowej arr
console.log(arr.map(el => 'new element')); console.log(arr);

//example: łączenie obiektów
const users = [
    { name: 'Janek Kos' },
    { name: 'Gustlik Jeleń' },
    { name: 'Grigorij Sakaszwilij' },
    { name: 'Tomek Czereśniak' },
    { name: 'Szarik (Kuleczka)' }
];

console.log(users.map(el => el.name));
console.log(users.map(el => el.name).join(', '));