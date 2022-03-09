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

    //Definiamo una variabile che indica se l'email è stata trovavata o meno
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