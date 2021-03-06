// Работа с формами

let clientName = document.getElementById('inTxtClientName');
let selectedPlace = document.getElementById('selectedPlace');
let buttonSendInputForms = document.getElementById('buttonSendInputForms');

buttonSendInputForms.onclick = function(event){
    let name = clientName.value;
    let place = selectedPlace.value;

    if(name){
        console.log('clientName', name);
        clientName.style.border = '1px solid #bebebe';        
    } else {
        clientName.style.border = '1px solid red';
    }
    if (place != 0){
        console.log('selectedPlace', place);
        selectedPlace.style.border = '1px solid #bebebe';     
    } else {
        selectedPlace.style.border = '1px solid red';
    }

    if (name && place != 0){
        console.log('Информация отправлена');
        clientName.value = '';
        selectedPlace.value = 0;
        modalPresentWindow.style.display = 'none';
    }
    event.preventDefault();
}

clientName.onchange = function(){
    console.log('Имя до нажатия Отправить ' + clientName.value);
}

let buttonGetPresent = document.getElementById('buttonGetPresent');
let modalPresentWindow = document.getElementById('modalPresent');
let buttonCloseModalWindow = document.getElementById('buttonCloseModalWindow');

buttonGetPresent.onclick = function(){
    modalPresentWindow.style.display = 'block';   
}

buttonCloseModalWindow.onclick = function(){
    modalPresentWindow.style.display = 'none';  
}

