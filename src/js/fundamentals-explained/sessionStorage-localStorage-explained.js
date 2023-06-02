//sessionStorage i localStorage
//pojemność 5 - 10 MB


//sessionStorage
window.sessionStorage.setItem('text', `tytuł 
opis zadania`);
//lub (bez window)
sessionStorage.setItem('text2', `tytuł
opis do zadania 2`);   //nie muszę się martwić o znaki specjalne jak w cookie

//ALE UWAGA: nie mogę zapisać obiektu, muszę użyć JSON.stringify()
sessionStorage.setItem('userData', JSON.stringify({ name: 'Janek', age: 33 }));

//pobieranie obiektu z sessionStorage - wymaga JSON.parse, bo pobierany jest string
console.log(JSON.parse(sessionStorage.getItem('userData')));
//pobieranie wartości - nie obiektu - z sessionStorage
console.log(sessionStorage.getItem('text2'));

//usuwanie
sessionStorage.removeItem('text');

//czyszczenie całego sessionStorage
sessionStorage.clear();



//localStorage() działa tak samo jak localStorage()
localStorage.setItem('text', `tytuł 
opis zadania 1`);
localStorage.setItem('user', 'Janek');

console.log(localStorage.getItem('text'));
console.log(localStorage.getItem('user'));
localStorage.removeItem('text');
localStorage.clear();