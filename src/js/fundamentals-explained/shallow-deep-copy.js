//shalow copy and deep copy of object

const users = [
    { name: 'Janek', age: 23 },
    { name: 'Olgierd', age: 44 },
    { name: 'Gustlik', age: 27 },
    { name: 'Grigorij', age: 26 }
];

//shalow copy - kopiowanie obiektów złożonych jak tablice i obiekty to wskazywanie jedynie na miejsce w pamięci (referencja), które się nie zmienia
const copyUsers = [...users];

users[1].name = 'Tomek';
users[1].age = 19;
//DANGER! modyfikuje też skopiowaną płytko tablicę
console.log(users); console.log(copyUsers); //wynik: w obu przypadkach ten sam wynik ze zminionym członkiem załogi na Tomek



//deep copy - zmienia to co chemy czyli tworzy nowy obiekt złożony w pamięci, a nie referencję
const usresCopy = JSON.parse(JSON.stringify(users));
users[1].name = 'Szarik';
users[1].age = 5;
console.log(users); console.log(usresCopy);