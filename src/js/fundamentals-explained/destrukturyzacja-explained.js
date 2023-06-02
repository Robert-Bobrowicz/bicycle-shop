//destrukturyzacja tablic

const arr = ['Bicycle 1', 1000];

console.log('title: ', arr[0]);
console.log('price: ', arr[1]);
//destrukturyzacja to wyciąganie z tablicy pierwszego, drugiegi i kolejnych el. pod określoną nazwą
const [title, price] = arr;
console.log(title);
console.log(price);

//jeśli chcę tylko price1, to można z podkreślnikiem, ale sposób ie jest polecany
const [_, price1] = arr;
console.log(price1);


//destrukturyzacja obiektów
const obj = {
    titleObj: "Bicycle 2",
    priceObj: 25500
};
const { titleObj, priceObj } = obj;
console.log(titleObj);
console.log(priceObj);