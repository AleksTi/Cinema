// Работа с формами

let clientName = document.getElementById('inTxtClientName');
let selectPlace = document.getElementById('selectPlace');
let buttonSendInfo = document.getElementById('buttonInputForms');

buttonSendInfo.onclick = function(){
    let name = clientName.value;
    console.log('clientName', name);
    console.log('selectPlace', selectPlace.value);
    console.log('Информация отправлена');
}

console.log('buttonSendInfo', buttonSendInfo);