
let janrList = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм'];
let films = [
    ['10:00', 'Человек-паук', [0, 1, 2]],
    ['12:00', 'Собачья жизнь 2', [3, 4, 5]],
    ['14:00', 'История игрушек 4', [6, 3, 5]],
    ['16:00', 'Люди в чёрном: Интернэшнл', [0, 1, 5]]    
];

let filmTarget = [];
for (let i = 0; i < films.length; i++){
    filmTarget[0] = document.getElementById('startFilm' + i); //для присвоения в цикле нужно, чтобы id были универсальные, т.е. первая часть одинаковой
    filmTarget[1] = document.getElementById('nameFilm' + i);
    filmTarget[2] = document.getElementById('janrFilm' + i);    
    for (let k = 0; k < films[i].length; k++){
        filmTarget[k].innerHTML = films[i][k];
        if (k = 2) {
            filmTarget[k].innerHTML = '';
            for (let j = 0; j < films[i][k].length; j++){
                filmTarget[k].innerHTML += janrList[films[i][k][j]];
                if (j < films[i][k].length - 1) {
                    filmTarget[k].innerHTML += ', ';
                }
            }
        }
    }
}



// let elementStartFilm;
// let elementNameFilm;
// let elementJanrFilm;
// let janrs;
// for (let i = 0; i < films.length; i++){
//     elementStartFilm = document.getElementById('startFilm' + i);
//     elementNameFilm = document.getElementById('nameFilm' + i);
//     elementJanrFilm = document.getElementById('janrFilm' + i);
//     elementStartFilm.innerHTML = films[i][0];
//     elementNameFilm.innerHTML = films[i][1];
//     // Вывод жанров
//     elementJanrFilm.innerHTML = '';
//     janrs = films[i][2];
//     for (let j = 0; j < janrs.length; j++){
//         elementJanrFilm.innerHTML += janrList[janrs[j]];
//         if (j < janrs.length - 1) {
//             elementJanrFilm.innerHTML += ', ';
//         }
//     }
// }

