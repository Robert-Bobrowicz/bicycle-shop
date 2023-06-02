//date and time functions

//aktualna data - obiekt
const now = new Date();

//ISO standard of data string
console.log(now.toISOString('pl', {
    dateStyle: 'short',
    timeStyle: 'short'
}));

//timestamp in ms
console.log(now.getTime());


console.log(JSON.stringify(now));

const dateString = "2023-05-29T20:46:52.319Z";
const dateNumber = 1685393082730;

const now1 = new Date(dateNumber);
console.log(now1);

//+ doba
now.setDate(now.getDate() + 1); console.log(now);

//link do counter.js
// https://github.com/tworcastron/js-od-podstaw/tree/8a051ff8773663d3c9c71dc871f0fa9b54cfad24 