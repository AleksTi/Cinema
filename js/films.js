


const janr1 = 'фантастика';
const janr2 = 'боевик';
const janr3 = 'приключени';
const janr4 = 'фэнтези';
const janr5 = 'драма';
const janr6 = 'комедия';
const janr7 = 'мультфильм';
let startFilm1 = '10:00';
let startFilm2 = '12:00';
let startFilm3 = '14:00';
let startFilm4 = '14:00';
let nameFilm1 = 'Человек-паук';
let nameFilm2 = 'Собачья жизнь 2';
let nameFilm3 = 'История игрушек 4';
let nameFilm4 = 'Люди в чёрном: Интернэшнл';
let janrFilm1 = janr1 + ', ' + janr2 + ', ' + janr3;
let janrFilm2 = janr4 + ', ' + janr5 + ', ' + janr6;
let janrFilm3 = janr7 + ', ' + janr4 + ', ' + janr6;
let janrFilm4 = janr1 + ', ' + janr2 + ', ' + janr6;

let elementStartFilm1 = document.getElementById('startFilm1');
let elementStartFilm2 = document.getElementById('startFilm2');
let elementStartFilm3 = document.getElementById('startFilm3');
let elementStartFilm4 = document.getElementById('startFilm4');

let elementNameFilm1 = document.getElementById('nameFilm1');
let elementNameFilm2 = document.getElementById('nameFilm2');
let elementNameFilm3 = document.getElementById('nameFilm3');
let elementNameFilm4 = document.getElementById('nameFilm4');

let elementJanrFilm1 = document.getElementById('janrFilm1');
let elementJanrFilm2 = document.getElementById('janrFilm2');
let elementJanrFilm3 = document.getElementById('janrFilm3');
let elementJanrFilm4 = document.getElementById('janrFilm4');

elementNameFilm1.innerHTML = nameFilm1;
elementNameFilm2.innerHTML = nameFilm2;
elementNameFilm3.innerHTML = nameFilm3;
elementNameFilm4.innerHTML = nameFilm4;

elementJanrFilm1.innerHTML = janrFilm1;
elementJanrFilm2.innerHTML = janrFilm2;
elementJanrFilm3.innerHTML = janrFilm3;
elementJanrFilm4.innerHTML = janrFilm4;

elementStartFilm1.innerHTML = startFilm1;
elementStartFilm2.innerHTML = startFilm2;
elementStartFilm3.innerHTML = startFilm3;
elementStartFilm4.innerHTML = startFilm4;