// let janrList = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм'];
// let films = [
//     ['10:00', 'Человек-паук', [0, 1, 2]],
//     ['12:00', 'Собачья жизнь 2', [3, 4, 5]],
//     ['14:00', 'История игрушек 4', [6, 3, 5]],
//     ['16:00', 'Люди в чёрном: Интернэшнл', [0, 1, 5]]
// ];

// let filmTarget = [];
// for (let i = 0; i < films.length; i++) {
//     filmTarget[0] = document.getElementById('startFilm' + i); //для присвоения в цикле нужно, чтобы id были универсальные, т.е. первая часть одинаковой
//     filmTarget[1] = document.getElementById('nameFilm' + i);
//     filmTarget[2] = document.getElementById('janrFilm' + i);
//     for (let k = 0; k < films[i].length; k++) {
//         filmTarget[k].innerHTML = films[i][k];
//         if (k = 2) {
//             filmTarget[k].innerHTML = '';
//             for (let j = 0; j < films[i][k].length; j++) {
//                 filmTarget[k].innerHTML += janrList[films[i][k][j]];
//                 if (j < films[i][k].length - 1) {
//                     filmTarget[k].innerHTML += ', ';
//                 }
//             }
//         }
//     }
// }

const mockFilmsList = [{
        name: "Человек-паук",
        start: "10:00",
        genre: [0, 1, 2],
        filmHire: true,
        filmNew: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov1.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        link: "https://www.kinopoisk.ru/film/1008445/"
    },
    {
        name: "Собачья жизнь 2",
        start: "12:00",
        genre: [3, 4, 5],
        filmHire: true,
        filmNew: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov2.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        link: "https://www.kinopoisk.ru/film/1122114/"
    },
    {
        name: "История игрушек 4",
        start: "14:00",
        genre: [6, 3, 5],
        filmHire: true,
        filmNew: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        link: "https://www.kinopoisk.ru/film/846824/",
    },
    {
        name: "Люди в чёрном: Интернэшнл",
        start: "16:00",
        genre: [0, 1, 5],
        filmHire: true,
        filmNew: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov3.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        link: "https://www.kinopoisk.ru/film/693730/"
    }
];
//справочник жанров
const janrsList = [{
        id: 0,
        name: "фантастика"
    },
    {
        id: 1,
        name: "боевик"
    },
    {
        id: 2,
        name: "приключения"
    },
    {
        id: 3,
        name: "фэнтези"
    },
    {
        id: 4,
        name: "драма"
    },
    {
        id: 5,
        name: "комедия"
    },
    {
        id: 6,
        name: "мультфильм"
    }
];
let arrNewFilms = [];
let arrHireFilms = [];

for (const key in mockFilmsList) {
    if (mockFilmsList[key].filmNew) {
        console.log('New ' + mockFilmsList[key].name);
        arrNewFilms.push(mockFilmsList[key]);
    }
    if (mockFilmsList[key].filmHire === true) {
        console.log('Hire ' + mockFilmsList[key].name)
        arrHireFilms.push(mockFilmsList[key]);
    }
}

const film = {
    getName: function () {
        // console.log(this.name);
        return this.name;
    },
    getStart: function () {
        // console.log(this.start);
        return this.start;
    },
    getJanrs: function () {
        let strJanrs = '';
        for (const key in this.genre) {
            for (const key1 in janrsList) {
                if (janrsList[key1].id == this.genre[key]) {
                    strJanrs += janrsList[key1].name + ', ';
                }
            }
        }
        strJanrs = strJanrs.replace(/.$/, '');
        strJanrs = strJanrs.replace(/.$/, '');
        // console.log('Жанры фильмов ' + strJanrs);
        return strJanrs;
    },
    getLink: function(){
        return this.link;
    }

}

for (const key in arrHireFilms) {
    const filmName = film.getName.bind(arrHireFilms[key])();
    const filmStart = film.getStart.bind(arrHireFilms[key])();
    const filmJanr = film.getJanrs.bind(arrHireFilms[key])();
    const filmLink = film.getLink.bind(arrHireFilms[key])();
    let filmsHireHTML = document.getElementById('movieListHire');

    let filmHTML = `
        <td id="startFilm${key}">${filmStart}</td>
        <td id="nameFilm${key}"><a href="${filmLink}" target="_blank"
                title="Кинопоиск.ру">${filmName}</a></td>
        <td id="janrFilm${key}">${filmJanr}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="33px" height="33px">
                <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                    d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
            </svg></td>
    `
    
    let tr = document.createElement('tr');
    tr.innerHTML = filmHTML;
    filmsHireHTML.appendChild(tr);
}