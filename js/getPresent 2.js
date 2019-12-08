// Работа с формами

let clientName = document.getElementById('inTxtClientName');
let selectedPlace = document.getElementById('selectedPlace');
let buttonSendInputForms = document.getElementById('buttonSendInputForms');

buttonSendInputForms.onclick = function(event){
    let name = clientName.value;
    let place = selectedPlace.value;

    if(name){
        console.log('clientName', name);
        selectedPlace.style.border = '1px solid red';        
    } else {
        clientName.style.border = '2px solid red';
    }
    if (place != 0){
        console.log('selectedPlace', place);
        selectedPlace.style.border = 'none';
    } else {
        selectedPlace.style.border = '2px solid red';
    }
    console.log('Информация отправлена');        
    event.preventDefault();
    // modalPresentWindow.style.display = 'none';
}

//Создание модального окна 

let buttonGetPresent = document.getElementById('buttonGetPresent');
let modalPresentWindow = document.getElementById('modalPresent');
let buttonCloseModalWindow = document.getElementById('buttonCloseModalWindow');

buttonGetPresent.onclick = function(){
    modalPresentWindow.style.display = 'block';   
}

buttonCloseModalWindow.onclick = function(){
    modalPresentWindow.style.display = 'none';  
}

