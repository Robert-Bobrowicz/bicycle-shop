//table modification methods

const arr = [1, 2, 3, 4];

//dodawanie elementu do tablicy
arr.push(5); console.log(arr);
//można dodatć kilka elementów do tablicy
arr.push(6, 7, 8, 9, 10); console.log(arr);


//pobieranie ostatniego el. z tablicy, usuwa ostatni element z tablicy
arr.pop(); console.log(arr);
//pobieranie pierwszego el. i usunięcie go z tablicy
arr.shift(); console.log(arr);

//dodawanie pierwszego el. lub kilku el. do tablicy
arr.unshift(100, 101, 102); console.log(arr);

//pobieranie kilku el. z tablicy - slice(odktórego indexu, do którego indexu), z minusem liczy od końca tablicy
console.log(arr.slice(2, -4));

//wycinanie kawałka tablicy - splice(odktóregoindexu, ile el. usunąć)
console.log(arr.splice(2, 2));
//można też wstawić nową wartość 
arr.splice(0, 1, 'nowa wartość');


//łączenie tablic concat()
console.log(arr.concat([200, 201, 202]));
const newArr = arr.concat([200, 201, 202]); console.log(newArr);
//łaczenie tablic za pomocą operatora spread [...[a,b,c],1,2,3]
console.log([...arr, 200, 201, 202]);

//konwersja tablicy naa string join(' element sepracji elementów z tablic w stringu, np. psacja, przecinek, średnik')
console.log(arr.join(', '));
console.log(arr);