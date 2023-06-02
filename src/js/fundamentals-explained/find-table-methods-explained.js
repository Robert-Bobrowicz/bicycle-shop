const users = [
    {
        id: 1,
        name: "Janek",
        age: 23,
        function: "tank 102 commander"
    },
    {
        id: 2,
        name: "Gustlik",
        age: 26,
        function: "tank 102 cannon operator"
    },
    {
        id: 3,
        name: "Szarik",
        age: 5,
        function: "tank 102 dog"
    }
];

const user = users.find(x => x.name === "Janek"); console.log(user);
const userIndex = users.findIndex(el => el.name === "Gustlik"); console.log(userIndex, users[userIndex]);
const userIndexOf = users.indexOf("Szarik"); console.log(userIndexOf, users[users.length + userIndexOf]);

console.log('ostatni element tablicy users: ', users[users.length - 1]);
console.log('ostatni element tablicy users (metoda at()): ', users.at(-1));
console.log('ostatni element tablicy users (metoda pop()): ', users.pop()); console.log(users); //UWAGA: pop() usuwa ostani element z tablicy i zwraca ten element


//[].includes() explained - działa tylko na tablicach
const inStringIn = ['tank 102', 'commander Janek', 'dog Szarik'].includes('tank 102'); console.log(inStringIn); //znajduje element tablicy, który jest stringiem. Parametr funkcji icludes musi być taki sam jak element tablicy (string)
const inStringIn1 = 'tank 102, commander Janek, dog Szarik'.includes('102'); console.log(inStringIn1); //znajduje element czyli jakąś część stringa

