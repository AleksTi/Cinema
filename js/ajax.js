const SYPEX_URL = 'http://api.sypexgeo.net/json/';
const CITIES_URL = 'https://glavpunkt.ru/api/get_rf_cities/';

let cities;
let citiesModal = document.getElementById('citiesModal');
let buttonCitesClose = document.getElementById('buttonCitesClose');

buttonCitesClose.onclick = function(){
    citiesModal.style.display = 'none';
}

// Асинхронный запрос
function getRequest(api_url, callback){
    let xhr = new XMLHttpRequest();
    async = true;
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200)
        callback.call(xhr.responseText)
    }
    xhr.open('GET', api_url, async);
    xhr.send();
    if(xhr.status != 200){
        console.log('request error');
        return (xhr.status + ': ' + xhr.statusText);
    }
}

jQuery(($) => {
    $('#cityName').on('click', function(e){
        e.preventDefault();
        citiesModal.style.display = 'block';        
        if(!cities){
            getRequest(CITIES_URL, function(){
                cities = $.parseJSON(this)
            });
        }
    });

    $('body').on('input keyup', 'input[name = cities-modal__input-city]', function(){
        let search = $(this).val();
        let counter = 0;
        console.log(cities);
        let html = '<ul>';
        for (let i=0; i < cities.length; i++){
            if(cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5){
                html += '<li data-city="' + cities[i].name + '">' + cities[i].name + ' (' + cities[i].area +')</li>'
                counter++;
            }
        }
        html += '</ul>';
        $('#modalCitiesList').html(html);
    });

    $('body').on('click', '#modalCitiesList li', function(){
        $('#cityName').html($(this).data('city'));
        citiesModal.style.display = 'none';
    })
})


jQuery(document).ready(($) => {
    console.log('start request');
    getRequest(SYPEX_URL, function(){
        let answer = $.parseJSON(this)
        let city = answer['city']['name_ru'];
        console.log(city);
        $('#cityName').html(city);
    });
});


// Синхронный запрос
// function getRequest(api_url){
//     let xhr = new XMLHttpRequest();
//     async = false;
//     xhr.open('GET', api_url, async);
//     xhr.send();
//     if(xhr.status != 200){
//         console.log('request error');
//         return (xhr.status + ': ' + xhr.statusText);
//     }
//     return (xhr.responseText);
// }

// jQuery(document).ready(($) => {
//     console.log('start request');
//     let answer = $.parseJSON(getRequest(SYPEX_URL));
//     let city = answer['city']['name_ru'];
//     console.log(city);
//     $('#cityName').html(city);
// });