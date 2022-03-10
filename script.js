//Associamo una costante "mailButton" al bottone nel file html
const mailButton = document.querySelector('.login > button');
//definiamo un evento al "click" del button
mailButton.addEventListener("click", function () {

    //Definiamo una lista di email all'interno del server
    const emailList = ["robin.costanzo@gmail.com" , "alessandra.rub@gmail.com" , "carl_cap@gmail.com"];

    //Associamo all'"Input" nell'html la costante "mailInput"
    const emailInput = document.querySelector('.login > input');

    //Definiamo il valore dell'elemento "Input"
    const inputValue = emailInput.value;

    //Definiamo una variabile che indica se l'email è stata trovavata o meno.
    let isLogged = false
    //Creiamo un ciclo
    for (let i=0 ; i < emailList.length ; i++){

        if(inputValue === emailList[i]){
            isLogged = true;
            break;
        }  
    }

    //Se alla fine del ciclo isFound è ancora false allora...
    if(isLogged === false){
        alert('Devi prima registrarti');

    }else{
        alert('Ti sei loggato');
    }

})
//Facciamo tirare due dai all'utente (uno per l'utente e uno per il pc).

//Associamo all'id "dice" un evento "click".
document.getElementById('dice').addEventListener('click', function(){

    //Definiamo una costante per l'utente e una per il pc. Ognuno genererà un numero casuale.
    const user = 1 + Math.floor(Math.random()*6)
    const pc = 1 + Math.floor(Math.random()*6)

    //Creaiamo la condizione per cui se il valore di "user" è più alto o meno si vince o si perde.
    if(user > pc){
        alert('Hai vinto');
        

    }else if(user < pc){
        alert('Hai perso');

    }else{
        alert('Pareggio!');
    }
})