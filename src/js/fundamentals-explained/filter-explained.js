//filter() zwraca true lub false, i pozostawia te le. w tablicy, które spełniają ten warunek.

//tablica wyjściowa
const arr = [
    {
        id: 1,
        price: 1000,
        title: "Bicycle 1",
        quantity: 1,
        available: true
    },
    {
        id: 2,
        price: 1000,
        title: "Bicycle 2 electric power",
        quantity: 2,
        available: false
    },
    {
        id: 3,
        price: 1000,
        title: "Bicycle 3 super electric power",
        quantity: 1,
        available: true
    },
    {
        id: 4,
        price: 1000,
        title: "Bicycle 4 sun electric power",
        quantity: 1,
        available: true
    }
];

//filtrowanie tablic po fladze dostępności
const filtered = arr.filter(item => item.available); console.log(filtered); //nie modyfikuje tab. wyjściowej
const filteredUnavailable = arr.filter(item => !item.available); console.log(filteredUnavailable); //zwraca produkty niedostępne



//filtrowanie liczb
const num = [1, 2, 3, 4, 5, 6];
const numFiltered = num.filter(num => num > 2); console.log(numFiltered); //zwraca tab. z liczbami > od 2 -> [3,4,5,6]